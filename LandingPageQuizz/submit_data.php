<?php
header('Content-Type: application/json');
$response = ['status' => 'error', 'message' => 'Error desconocido.'];

error_reporting(E_ALL); 
ini_set('display_errors', 0); 

try {
    // 1. Recibir los datos JSON de JavaScript
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if ($data === null) {
        throw new Exception("Datos JSON no válidos.");
    }

    // 2. Extraer los datos
    $nombre = $data['name'] ?? 'N/A';
    $correo_participante = $data['email'] ?? 'N/A';
    $telefono = $data['phone'] ?? 'N/A';
    $answers = $data['answers'] ?? []; 

    // 3. Crear el Cuerpo del Mensaje
    $para = 'fbcanaza@gmail.com'; // ACTUALIZAR ESTO CON UN NUEVO EMAIL
    $asunto = 'NUEVO DIAGNÓSTICO: ' . $nombre;
    
    $cuerpo_mensaje = "--- Datos del Contacto ---\n";
    $cuerpo_mensaje .= "Nombre: " . $nombre . "\n";
    $cuerpo_mensaje .= "Correo: " . $correo_participante . "\n";
    $cuerpo_mensaje .= "Teléfono: " . $telefono . "\n\n";

    $cuerpo_mensaje .= "--- Respuestas del Quiz ---\n";
    foreach ($answers as $qId => $answerValue) {
        $cuerpo_mensaje .= "Pregunta ID {$qId}: Respuesta ({$answerValue})\n";
    }

    // 4. Enviar el correo
    $cabeceras = 'From: noreply@tudominio.com' . "\r\n" .
                 'Reply-To: ' . $correo_participante . "\r\n";

    if (mail($para, $asunto, $cuerpo_mensaje, $cabeceras)) {
        $response['status'] = 'success';
        $response['message'] = 'Datos guardados y correo enviado.';
    } else {
        throw new Exception("Error al intentar enviar el correo.");
    }

} catch (Exception $e) {
    $response['message'] = 'Error en el servidor: ' . $e->getMessage();
}

// 5. Imprimir la respuesta JSON y finalizar la ejecución
echo json_encode($response);
exit;
?>