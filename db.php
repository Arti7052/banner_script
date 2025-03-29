<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "banner_db";

// Enable error reporting for debugging (disable in production)
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Secure connection using PDO with error handling
    $conn = new mysqli($servername, $username, $password, $database);
    $conn->set_charset("utf8mb4");

} catch (Exception $e) {
    // Log the error instead of exposing it
    error_log("Database Connection Error: " . $e->getMessage());
    die("Database connection failed. Please try again later.");
}
?>
