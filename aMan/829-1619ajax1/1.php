<?php

header('Access-Control-Allow-Origin:*' );
header('Content-type:application/json');


$url = isset($_GET['filename']) ? $_GET['filename'] : 'test.txt';

$result="";

if(file_exists($url)){
    $file = fopen($url,"r");

    while(!feof($file)){
        $result=$result.fgets($file);

    }
    fclose($file);
}


echo $result


?>