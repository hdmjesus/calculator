var operandoa;
var operandob;
var operacion;

pantalla =document.getElementById("resultado");

var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var  nueve= document.getElementById("nueve");
var cero= document.getElementById("cero");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var division = document.getElementById("division");
var multiplicacion = document.getElementById("multi");
var igual= document.getElementById("igual");
var resetea= document.getElementById("reset")


// Eventos
uno.addEventListener("click", oprimirUno);
dos.addEventListener("click", oprimirDos);
tres.addEventListener("click", oprimirTres);
cuatro.addEventListener("click", oprimirCuatro);
cinco.addEventListener("click", oprimirCinco);
seis.addEventListener("click", oprimirSeis);
siete.addEventListener("click", oprimirSiete);
ocho.addEventListener("click", oprimirOcho);
nueve.addEventListener("click", oprimirNueve);
cero.addEventListener("click", oprimirCero);
suma.addEventListener("click", oprimirSuma);
resta.addEventListener("click", oprimirResta);
division.addEventListener("click", oprimirDivision);
multiplicacion.addEventListener("click", oprimirMulti);
igual.addEventListener("click", oprimirIgual);
resetea.addEventListener("click",oprimirReset);

function oprimirUno()
{
  resultado.innerHTML =resultado.innerHTML + "1";
}

function oprimirDos()
{
  resultado.innerHTML =resultado.innerHTML + "2";
}

function oprimirTres()
{
  resultado.innerHTML =resultado.innerHTML + "3";
}

function oprimirCuatro()
{
  resultado.innerHTML =resultado.innerHTML + "4";
}

function oprimirCinco()
{
  resultado.innerHTML =resultado.innerHTML + "5";
}

function oprimirSeis()
{
  resultado.innerHTML =resultado.innerHTML + "6";
}

function oprimirSiete()
{
  resultado.innerHTML =resultado.innerHTML + "7";
}

function oprimirOcho()
{
  resultado.innerHTML =resultado.innerHTML + "8";
}

function oprimirNueve()
{
  resultado.innerHTML =resultado.innerHTML + "9";
}

function oprimirCero()
{
  resultado.innerHTML =resultado.innerHTML + "0";
}

function oprimirSuma()
{
  operandoa =resultado.innerHTML;
  operacion="+";
  limpiar();
}

function oprimirResta()
{
  operandoa =resultado.innerHTML;
  operacion="-";
  limpiar();
}

function oprimirDivision()
{
  operandoa =resultado.innerHTML;
  operacion="/";
  limpiar();
}

function oprimirMulti()
{
  operandoa =resultado.innerHTML;
  operacion="x";
  limpiar();
}

function oprimirIgual()

{
  operandob =resultado.innerHTML;
  resolver();
}

function limpiar()
{
  resultado.innerHTML= "";
}

function oprimirReset()
{
  resultado.innerHTML = "";
  operandoa=0;
  operandob=0;
  operacion = "";
}


function resolver()
{
  var res= 0;

  switch (operacion)
  {
    case "+":

    res=parseFloat(operandoa) + parseFloat(operandob)

      break;


    case "-":

    res=parseFloat(operandoa) - parseFloat(operandob)

      break;


    case "x":

    res=parseFloat(operandoa) * parseFloat(operandob)

      break;


    case "/":

    res=parseFloat(operandoa) / parseFloat(operandob)

      break;
    default:;


  }

  resultado.innerHTML=res;

  oprimirReset();
  resultado.innerHTML =res;

}
