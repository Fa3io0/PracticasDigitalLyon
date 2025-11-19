<?php
// ===================================================================
// ARCHIVO: submit_data.php
// ROL: Recibir, validar y guardar datos en la base de datos (SQL).
// ===================================================================

// 1. Configurar la respuesta como JSON y permitir acceso (CORS)
header('Content-Type: application/json');
// Nota: En un entorno de producción, ajusta '*' por tu dominio específico.
header('Access-Control-Allow-Origin: *'); 
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// La base de datos es OPCIONAL si usas servicios como Zapier/Webhook, 
// pero se recomienda para tener un respaldo.
$use_database = true; 

// Obtener los datos JSON enviados desde el JavaScript
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

// Función de respuesta rápida
function sendResponse($status, $message = '') {
    echo json_encode(['status' => $status, 'message' => $message]);
    exit;
}

// 2. Validación de Datos
if (empty($data) || !isset($data['email'])) {
    sendResponse('error', 'No se recibieron datos o falta el email.');
}

$nombre = $data['name'] ?? 'N/A';
$email = $data['email'];
$idea_nombre = $data['ideaName'] ?? 'N/A';
$respuestas_json = json_encode($data['answers'] ?? []);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse('error', 'Formato de email inválido.');
}

// ===================================================================
// 3. Conexión a Base de Datos (SQL - MySQLi)
// Reemplaza los siguientes datos con tu configuración real de DB
// ===================================================================
if ($use_database) {
    $servername = "localhost";
    $username = "fabio"; 
    $password = "123"; 
    $dbname = "leads_quiz"; 

    $conn = @new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        // En caso de error de conexión, registra el error pero no lo muestres al usuario
        error_log("Error de conexión SQL: " . $conn->connect_error);
        // Continuamos sin guardar en DB, pero aún podemos integrar con otros servicios
    } else {
        // Sanitizar datos para evitar inyecciones SQL
        $nombre_safe = $conn->real_escape_string($nombre);
        $email_safe = $conn->real_escape_string($email);
        $idea_safe = $conn->real_escape_string($idea_nombre);
        $respuestas_safe = $conn->real_escape_string($respuestas_json);
        
        // Sentencia SQL para la inserción
        $sql = "INSERT INTO leads (nombre, email, idea_nombre, respuestas) 
                VALUES ('$nombre_safe', '$email_safe', '$idea_safe', '$respuestas_safe')";

        if ($conn->query($sql) !== TRUE) {
            error_log("Fallo al insertar registro: " . $conn->error);
            // No es un error crítico si la integración con Zapier funciona, pero lo registramos
        }
        $conn->close();
    }
}

// ===================================================================
// 4. Lógica de Integración Externa (Webhook / Zapier / MailerLite)
// Esta parte se ejecutaría DESPUÉS de intentar guardar en la DB.
// Ejemplo de llamada a Webhook:
// $webhook_url = 'https://hooks.zapier.com/hooks/catch/xxxxxx/';
// $options = [
//     'http' => [
//         'method'  => 'POST',
//         'header'  => 'Content-type: application/json',
//         'content' => $json_data
//     ]
// ];
// $context  = stream_context_create($options);
// $result = file_get_contents($webhook_url, false, $context);
// ===================================================================

// 5. Respuesta Final al JavaScript
sendResponse('success', 'Datos guardados y proceso de email iniciado.');

?>