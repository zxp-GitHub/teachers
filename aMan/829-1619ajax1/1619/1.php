<?php
header('Content-type:application/json');

$url = isset($_GET['filename']) ? $_GET['filename'] : 'test.txt';
//$url 文件的路径地址
$result="";

if(file_exists($url)){

    $file = fopen($url,"r");

    while(!feof($file)){
        $result=$result.fgets($file);

    }
    fclose($file);
}else{
    $result="nothing";
}

//输出内容
echo $result

?>