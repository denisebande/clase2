<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Sala De Juegos</title>
		<!--Estilos-->
		<link rel="stylesheet" type="text/css" href="css/estilo.css">
		<link rel="stylesheet" type="text/css" href="css/animacion.css">
		<!--final de Estilos-->

		<!--Lógica-Programación-->

<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript">
        function login()
        {
        	var elUsuario=$("#nombreUsuario").val();
        	var laClave=$("#claveUsuario").val();

        	var funcionAjax =$.ajax({url:"ValidarUsuario.php", type:"post",
        		data:{
        			usuario:elUsuario,
        			clave:laClave
        			}});

        	funcionAjax.done(function(respuesta){

        		if(respuesta=="correcto")
        		{
					$("#MensajeError").val("");
					window.location.href="menu.php";
        			// vamos al menu
        		}
        		else
        		{
        			$("#MensajeError").val("NO esta registrado... ");
        		}	
        	});
        }

        function registrarse()
        {
        	var funcionAjax =$.ajax({url:"RegistrarUsuario.php", type:"post",
        		data:{       			
        			}});

        	funcionAjax.done(function(respuesta){

        		if(respuesta=="correcto")
        		{
					window.location.href="menu.php";
        		}
        		else
        		{
        			$("#MensajeError").val("Error al registrarse");
        		}	
        	});
        }
        </script>
        <!--Final de Lógica-Programación -->

	</head>
	<body>
		<div class="CajaInicio animated bounceInRight">
			<h3>Ingreso a la sala</h3>
			
		<form action="destino.php" method="post">

					<input type="text" id="nombreUsuario" name="usuario" value="<?php
					if(isset($_COOKIE['ultimoUsuario']))
					{
							 echo $_COOKIE['ultimoUsuario']; 
					}?> ">
					<input type="password" id="claveUsuario"> 

					<!--input type="submit"  class="MiBotonUTNMenuInicio" value= "ingresar" --> 
					<input type="button" onclick="login()" class="MiBotonUTNMenuInicio" value= "Login" >
					<input type="button" onclick="registrarse()" class="MiBotonUTNMenuInicio" value= "Registrarse" >
					<input type="text" id ="MensajeError" readonly>

		</form>
		</div>

		<center>

		</center>

	</body>
</html>