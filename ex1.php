<?php
header("Content-Type: text/xml");
echo "<?xml version='1.0' encoding='UTF-8' atandalone='yea'";
echo '<response>';
$name =$_GET['name'];
$maitres = array('HONORE','BELYNDA','MARIE');
if(in_array(strtoupper($name),$maitres)){
    echo 'salut'.htmlentities($name);
}else if(trim($name) == ''){
echo 'coucou etrager!! quel est votre nom??';
}else{
 echo 'OMG'.htmlentities($name).'.je ne te connais pas!!';   
}
echo '<response>';

?>