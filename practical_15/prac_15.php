<?php

echo "Enter your birthday (MM-DD): ";
$input = trim(fgets(STDIN));

if (!preg_match("/^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/", $input)) {
    echo "Invalid format! Please use MM-DD (e.g., 11-30)\n";
    exit;
}

$currentYear = date("Y");
$today = strtotime(date("Y-m-d"));
$birthDate = strtotime("$currentYear-$input");

if ($birthDate < $today) {
    $birthDate = strtotime(($currentYear + 1) . "-$input");
}

$diff = ($birthDate - $today) / (60 * 60 * 24);

if ($diff == 0) {
    echo "Happy Birthday!\n";
} else {
    echo "Your birthday is in $diff days!\n";
}
?>
