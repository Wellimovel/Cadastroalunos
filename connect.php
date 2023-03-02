<?php
$localhost = "";
$user = "root";
$passw ="";
$banco="loja";

$conecta = mysqli_connect($localhost, $user, $passw, $banco);
$sql = mysqli_query($conecta,"SELECT * FROM cadastro");
echo nysqli_num_rows($sql);

?>