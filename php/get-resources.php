<?php
$conn = new mysqli("localhost", "root", "", "binary_library");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM resources";
$result = $conn->query($sql);

$resources = [];
while ($row = $result->fetch_assoc()) {
    $resources[] = $row;
}

echo json_encode($resources);
$conn->close();
?>
