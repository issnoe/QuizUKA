<%@ Page Language="C#" AutoEventWireup="false" CodeBehind="AdminIN.aspx.cs" Inherits="InfoKilo.WebApp.Miembros.IN.Admin.AdminIN" %>

<!DOCTYPE html>
<html  >
<head>

<title>Administrador de Instrumentos</title>

</head>

<body>

	<!-- HEADER -->
    <header class="container-fullwidth">
    	<div class="container">
    	<div class="col-md-6 col-sm-6 col-xs-5">
        	<div class="logo">
        	<a href="#"><img src="../../../images/login-logo.png" alt="UKA" class=""/></a>
            </div>
		</div>
        <div class="col-md-6 col-sm-6 col-xs-7  text-right">
        	
		</div>
        </div>
    </header>
    
    <!-- CONTAINER -->
    <div>
        <div class="container">
            <div class="row">
            	<div class="col-md-12 col-sm-12">
                	<ol class="breadcrumb">
                      <li><a href="#">Inicio</a></li>
                      <li>Administrador de Instrumentos</li>
                    </ol>
                </div>
                
            </div>
        </div> 
	</div>
    <div id="reactIntrumentsApp" ></div>
    <div id="panel" >
        Panel preguntas
    </div>
    
    <footer>
    	&nbsp;
    </footer>



    <link rel="stylesheet" type="text/css" href="../../../css/bootstrap.min.css"/>
    <link href="https://file.myfontastic.com/CrszDy9EX5PKEPWYeoAXdg/icons.css" rel="stylesheet"/>
    <link rel="stylesheet" type="text/css" href="../../../css/style.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/xt.css"/>

    <link rel="stylesheet" type="text/css" href="../../../css/form.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/icons.css"/>
    <link rel="stylesheet" type="text/css" href="../../../css/flexslider.css"/>
     <link rel="stylesheet" type="text/css" href="../../../css/dev.css"/>
    <script src="../../../Scripts/jquery.min.js"></script>
    <script src="../../../Scripts/jquery-ui.min.js"></script>
    <script src="../../../Scripts/bootstrap.min.js"></script>
    <script src="../../../Scripts/moment-with-locales.js"></script>
    <script src="../../../Scripts/src-react/prop-types.min.js"></script>
   
    <!--
<script src="../../../Scripts/jquery.flexslider.js"></script>
<script src="../../../Scripts/functions.js"></script>
        -->


    <!--

    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    <script src="https://npmcdn.com/react-motion/build/react-motion.js"></script>
     <script src="https://npmcdn.com/react-collapse/build/react-collapse.min.js"></script>
    <script src="https://unpkg.com/prop-types/prop-types.min.js"></script>
    
    -->
    <script src="../../../Scripts/src-react/react.js"></script>
    <script src="../../../Scripts/src-react/react-dom.js"></script>
    <script src="../../../Scripts/src-react/babel.min.js"></script>
    <script src="../../../Scripts/src-react/react-motion.js"></script>
     <script src="../../../Scripts/src-react/react-collapse.min.js"></script>
    

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
   
    <link href="https://file.myfontastic.com/CrszDy9EX5PKEPWYeoAXdg/icons.css" rel="stylesheet"/>
   


    <<!--<script src="../../../Scripts/jquery.js"></script>
         <link rel="stylesheet" href="../../../css/bootstrap.min.css" />
    <script src="../../../Scripts/bootstrap.js"></script>-->
    <script src="../../../Scripts/react-bootstrap.min.js"></script>
   

     <script type="text/babel" src="../scripts/BasePreguntas.js"></script>
 
    <script type="text/babel" src="../scripts/PopupMsg.js"></script>
    <script type="text/babel" src="../scripts/PopupItem.js"></script>
    <script type="text/babel" src="../scripts/ModuloItem.js"></script>
    <script type="text/babel" src="../scripts/Instrumento.js"></script>
    <script type="text/babel" src="../scripts/Instrumentos.js"></script>
    <script type="text/babel" src="../scripts/Modulos.js"></script>
       <script type="text/babel" src="../scripts/PanelPreguntas.js"></script>
    <script type="text/babel" src="../scripts/Pregunta.js"></script>
    <script type="text/babel" src="../scripts/Reactivos.js"></script>
    <script type="text/babel" src="../scripts/PopupReactivos.js"></script>
    <script type="text/babel" src="../scripts/start.js"></script>

</body>
</html>
