<?php
header('Content-Type: application/json');
require 'db.php';

// Prepare the SQL statement
$sql = "SELECT * FROM banners WHERE status = ? ORDER BY id DESC LIMIT 1";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $status = 1;
    $stmt->bind_param("i", $status); // Bind status as an integer
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        $banner = $result->fetch_assoc();
        echo json_encode($banner);
    } else {
        echo json_encode(["error" => "No active banner found"]);
    }
    $stmt->close();
} else {
    echo json_encode(["error" => "Database error"]);
}

$conn->close();
?>
