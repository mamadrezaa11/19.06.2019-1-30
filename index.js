<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Lon Hosford Basic Animation in Create JS</title>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script>
        var stage, sunShape;
		function init()
		{
            stage = new createjs.Stage("stage-canvas");
			sunShape = new createjs.Shape();
			sunShape.graphics.beginFill("#F00");
			sunShape.graphics.drawCircle(0, 0, 25);
			sunShape.graphics.endFill();
			stage.addChild(sunShape);
			stage.update();
		}
</script>
<style>s
	body {
		margin: 0 ;
		padding: 15px;
		background-color: #ccc;
	}
	canvas {
		border: solid 2px #000;
		background-color: #fff;
		display: block;
		margin: 0px auto 0px auto;
		padding-left: 0;
		padding-right: 0;
	}
</style>
</head>
<body onload="init();">
<canvas id="stage-canvas" width="550" height="400">
	This web browser does not support canvas.
</canvas>
</body>
</html>
