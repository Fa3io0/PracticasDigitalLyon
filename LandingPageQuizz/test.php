<?php
$use_database = true;
// ===================================================================
// 3. Conexión a Base de Datos (SQL - MySQLi)
// ===================================================================
if ($use_database) {
    $servername = "localhost";
    $username = "fabio"; 
    $password = "123"; // ¡Peligroso en producción!
    $dbname = "leads_quiz"; 

    $conn = @new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        // ... Lógica de manejo de error (aquí puede estar la advertencia)
    } 
    // ...
}
?>