var anApp = angular.module("MiApp", []);

anApp.controller('contPPT2', function($scope){
	$scope.ganadas=0;
	$scope.empatadas=0;
	$scope.perdidas=0;

	$scope.comenzar = function(){	

	 	$scope.numeroSecreto =Math.floor( Math.random()*3)+1;
		switch($scope.numeroSecreto)
		{
			case 1:
				$scope.eleccionMaquina="piedra";
				break;
			case 2:
				$scope.eleccionMaquina="papel";
				break;
			case 3:
				$scope.eleccionMaquina="tijera";
				break;
		}
	};

	$scope.eleccion = function(eleccionUsuario){
		$scope.comenzar();	
		switch (eleccionUsuario)
		{
			case "papel":
						$scope.ganar = "piedra"
						break;
			case "tijera":
						$scope.ganar = "papel"
						break;
			case "piedra":
						$scope.ganar = "tijera"
						break;
			default :	break;
		}
			
		alert("la maquina selecciono: "+ $scope.eleccionMaquina);
		if(eleccionUsuario== $scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		
		}
		else if($scope.eleccionMaquina==$scope.ganar)
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	};

/*

	$scope.papel = function(){
		$scope.comenzar();		
		alert("la maquina selecciono: "+ $scope.eleccionMaquina);
		$scope.eleccionHumano="papel";
		if($scope.eleccionHumano== $scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		
		}
		else if($scope.eleccionMaquina=="piedra")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	};

	$scope.piedra = function(){
		$scope.comenzar();		
		alert("la maquina selecciono: "+ $scope.eleccionMaquina);
		$scope.eleccionHumano="piedra";
		if($scope.eleccionHumano== $scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		
		}
		else if($scope.eleccionMaquina=="tijera")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	};	

	$scope.tijera = function(){
		$scope.comenzar();		
		alert("la maquina selecciono: "+ $scope.eleccionMaquina);
		$scope.eleccionHumano="tijera";
		if($scope.eleccionHumano== $scope.eleccionMaquina)
		{
			alert("empate.");
			$scope.empatadas++;		
		}
		else if($scope.eleccionMaquina=="papel")
		{
			alert("vos ganastes.");
			$scope.ganadas++;
		}
		else
		{
			alert("ganó la Maquina.");
			$scope.perdidas++;
		}
	};	
*/

	});