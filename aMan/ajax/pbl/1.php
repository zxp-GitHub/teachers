<?php

header('Content-type:text/json');

$callback = isset($_GET['callback']) ? $_GET['callback'] : 'fn';

$arr = array('{"src":"img/1.jpg","alt":"1","height":"343px","width":"230px"}',
             '{"src":"img/2.jpg","alt":"2","height":"300px","width":"230px"}',
             '{"src":"img/3.jpg","alt":"3","height":"230px","width":"230px"}',
             '{"src":"img/4.jpg","alt":"4","height":"230px","width":"230px"}',
             '{"src":"img/5.jpg","alt":"5","height":"306px","width":"230px"}',
             '{"src":"img/6.jpg","alt":"6","height":"333px","width":"230px"}',
             '{"src":"img/7.jpg","alt":"7","height":"335px","width":"230px"}',
             '{"src":"img/8.jpg","alt":"8","height":"172px","width":"230px"}',
             '{"src":"img/9.jpg","alt":"9","height":"172px","width":"230px"}',
             '{"src":"img/10.jpg","alt":"10","height":"345px","width":"230px"}',
             '{"src":"img/11.jpg","alt":"11","height":"340px","width":"230px"}',
             '{"src":"img/12.jpg","alt":"12","height":"153px","width":"230px"}',
             '{"src":"img/13.jpg","alt":"13","height":"345px","width":"230px"}',
             '{"src":"img/14.jpg","alt":"14","height":"316px","width":"230px"}',
             '{"src":"img/15.jpg","alt":"15","height":"327px","width":"230px"}',
             '{"src":"img/16.jpg","alt":"16","height":"345px","width":"230px"}',
             '{"src":"img/17.jpg","alt":"17","height":"172px","width":"230px"}',
             '{"src":"img/18.jpg","alt":"18","height":"282px","width":"230px"}',
             '{"src":"img/19.jpg","alt":"19","height":"224px","width":"230px"}',
             '{"src":"img/20.jpg","alt":"20","height":"344px","width":"230px"}');


$json='{"name":"ling","sex":"女","age":"24"}';

$data = json_encode($arr);

echo $callback.'('.$data.');';
?>