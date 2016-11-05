<?php


header('Content-type:text/json');


$callback = isset($_GET['callback']) ? $_GET['callback'] : 'fn';

$arr = array('asdasd','dsfsdfsdf','sdfsdfsdf','asdasdasd','asdghryjrtyjy');

$json='{"name":"ling","sex":"女","age":"24"}';

$data = json_encode($arr);

echo $callback.'('.$json.');';
//fn1($json)


?>