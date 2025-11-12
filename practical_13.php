<?php
$string = "   Hello   World   from   PHP   ";

$noSpaces = preg_replace('/\s+/', '', $string);

echo "Original String: " . $string . "\n";
echo "String without whitespaces: " . $noSpaces . "\n";
?>


<!-- Original String:    Hello   World   from   PHP   
String without whitespaces: HelloWorldfromPHP -->