<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userdb";

$conn = new mysqli(hostname: $servername, username: $username, password: $password, database: $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// global variable $_POST
$user = $_POST['username'];
$pass = $_POST['password'];

$sql = "SELECT * FROM users WHERE username='$user' AND password='$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Welcome, $user!</h2>";
} else {
    echo "<h2>Error: Invalid username or password!</h2>";
}

$conn->close();
?>
