

// num = parseFloat(prompt('ingrese el primer numero'))
// num2 = parseFloat(prompt('ingrese el segundo numero'))

// sum = num + num2;
// resta = num-num2
// multiplicación = num*num2
// división = num/num2
// document.write (' la suma de  ' + num +' , '+num2 + '  da como resultado ' + sum)
// document.write (' la resta de  ' + num +' , '+num2 + '  da como resultado ' + resta)
// document.write (' la multiplicación  de  ' + num +' , '+num2 + '  da como resultado ' + multiplicación)
// document.write (' la divisón de  ' + num +' , '+num2 + '  da como resultado ' + división)

//Definir contador y acumulador
var contesta = 0
var acumesta = 0
var acumpeso = 0

function ingresandovalores(){
//Var = Variables globales
peso = parseInt(prompt('¿Cual es tu peso actual? (en kg)'))
altura = parseInt(prompt('¿Cual es tu altura? (en M)'))
    contesta ++; //el ++ suma de uno en uno
    acumesta += altura;
    acumpeso += peso;
    
}

function preguntar(){
    var respuesta = prompt('¿Desea continuar?').toLowerCase() //El lower convierte las letras en minisculas y oper en mayusculuas
    return respuesta == 'si' || respuesta == 'SI'
}



function calcularIMC()
{
let IMC = peso /(altura*altura) 
    if (IMC<18.5){
        console.log('tu indice de masa corporal es'+ IMC.toFixed(2) +'Estas Bajo de peso') //El to fised limita la cantidad de numeros que se muestran despues de la ","
    }
    else if (IMC>=18.5 && IMC < 25){
        console.log('tu indice de masa corporal es'+ IMC.toFixed(2) +'Tu peso es normal')

    }
    else if (IMC>=25 && IMC < 30){
        console.log('tu indice de masa corporal es'+ IMC.toFixed(2) +'Sobre peso')
    }
    else{
        console.log('tu indice de masa corporal es'+ IMC.toFixed(2) +'Obeso')
    
    }
}



function promedioAltura(){
    if (contesta ==0){ 
        console.log('No se han ingresado datos')
    }
    else {
        let promedio=acumesta/contesta
        console.log('El promedio de la estatura es: '+ promedio.toFixed(2) + 'Metros')
    }


}
function promedioPeso(){
    if (contesta == 0){
        console.log('No hay valores registrados')
    }  
    else{
        let promedio1 = acumpeso/contesta
        console.log('El promeido de peso es: ' + promedio1.toFixed(2) + 'kg')
    }


}

do{
    ingresandovalores();
    calcularIMC();
}
while(preguntar());

promedioPeso();
promedioAltura();











