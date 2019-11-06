var calculadora = function(){
    var resultado = 0;
    var n = 0;
    var n2 = 0;
    var operacion = "";
    var result = document.getElementById("display");
    var encender = document.getElementById("on");
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var seven = document.getElementById("7");
    var eight = document.getElementById("8");
    var nine = document.getElementById("9");
    var zero = document.getElementById("0");

    var sumar = document.getElementById("mas");
    var restar = document.getElementById("menos");
    var multiplicar = document.getElementById("por");
    var dividir = document.getElementById("dividido");

    var igual = document.getElementById("igual");
    var punto = document.getElementById("punto");
    var signo = document.getElementById("sign");

    /*var teclas = document.getElementsByClassName("tecla");
    teclas[0].addEventListener('click', function(){
        alert("cliclk");
    });*/
    
   /*Numeros*/
   
    one.addEventListener('click', function(){
        n = 1;
        eliminarCero(result, n);
        validacionNumeros(result);
        one.addEventListener('mousedown', function(){
            one.style.width = "20px;"
        });
        
    });

    two.addEventListener('click', function(){
        n = 2;
        eliminarCero(result, n);
    });
    
    three.addEventListener('click', function(){
        n = 3;
        eliminarCero(result, n);
    });
    
    four.addEventListener('click', function(){
        n = 4;
        eliminarCero(result, n);
    });
    
    five.addEventListener('click', function(){
        n = 5;
        eliminarCero(result, n);
    });
    
    six.addEventListener('click', function(){
        n = 6;
        eliminarCero(result, n);
    });
    
    seven.addEventListener('click', function(){
        n = 7;
        eliminarCero(result, n);
    });
    
    eight.addEventListener('click', function(){
        n = 8;
        eliminarCero(result, n);
    });
    
    nine.addEventListener('click', function(){
        n = 9;
        eliminarCero(result, n);
    });
    
    zero.addEventListener('click', function(){
        n = 0;
        eliminarCero(result, n);
    });

    /*Operaciones */
    encender.addEventListener('click', function(){
        console.log("encendido");
        on(result);
    });

    sumar.addEventListener('click', function(){
        console.log("suma");
        operacion = "suma";
        n = parseInt(result.textContent);
        result.textContent = "";
        resultado = n;
    });

    restar.addEventListener('click', function(){
        console.log("resta");
        operacion = "resta";
        n = parseInt(result.textContent);
        result.textContent = "";
        resultado = n;
    });

    multiplicar.addEventListener('click', function(){
        console.log("multiplicar");
        operacion = "multiplicar";
        n = parseInt(result.textContent);
        result.textContent = "";
        resultado = n;

    });

    dividir.addEventListener('click', function(){
        console.log("dividir");
        operacion = "dividir";
        n = parseInt(result.textContent);
        result.textContent = "";
        resultado = n;
    });

    igual.addEventListener('click', function(){
        n2 = parseInt(result.textContent);
        switch(operacion){
            case "suma":
                sumaNumeros(resultado , n2);
                break;

            case "resta":
                restarNumeros(resultado , n2);
                break;

            case "multiplicar":
                multiplicarNumeros(resultado , n2);
                break;

            case "dividir":
                dividirNumeros(resultado , n2);
                break;

            default:
                alert("opcion no encontrada");
        }
    });

    punto.addEventListener('click', function(){
        console.log("punto");
        verificarPunto(result);
        
    });

    signo.addEventListener('click', function(){
        console.log("signo");
        cambioSigno(result);
    });


            
    
    /*Metodos*/
    function on(result){
        result.textContent = parseInt('0');
    }
    
    function eliminarCero(variable, n){
        if(variable.textContent === '0'){
            variable.textContent = n;
        } else {
            variable.textContent = variable.textContent + n;
        }
    }

    function sumaNumeros(num1, num2) {
        result.textContent = num1 + num2;
    }

    function restarNumeros(num1, num2) { 
        result.textContent = num1 - num2; 
    }

    function multiplicarNumeros(num1, num2) { 
        result.textContent = num1 * num2;
    }

    function dividirNumeros(num1, num2) { 
        result.textContent = num1 / num2;
    }

    function validacionNumeros(result){
        if (result.textContent.length > 8){
            result.textContent = result.textContent;
        } 
    }

    function verificarPunto(result){
        if(result.textContent.indexOf(".") == -1){
            result.textContent = result.textContent + ".";
        } else { 
            result.textContent = result.textContent;
        }
    }

    function tamanoBoton(boton){
        boton.style.width = "50px";
        
    }

    function cambioSigno(result){
        if(result.textContent.indexOf("-") == -1){
            result.textContent = "-" + result.textContent;
        } else { 
            result.textContent = result.textContent;
        }
    }
    
};

calculadora();
