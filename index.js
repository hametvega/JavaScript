
            //TIPOS DE DATOS    
let Num=1     //let es una variable de bloque, solo se puede usar en el lugar donde se declaro
let Nombre='Hamet'
let Estado = true;
let lista =[1,2,3,4,5]
            //OBJETOS

let personas ={nombre:"hamet", apellido:"vega", email:"hamet1203@gamil.com"}


//Mostrarlos

console.log(Num)
console.log(Nombre)
console.log(Estado)
console.log(lista)
console.log(personas)
console.log()

//Definir constante
const ambiente = 109
console.log(ambiente)

//Condicionales

//ingresando datos por teclado
let nom_estudiante
let nota

nom_estudiante = prompt('Ingrese nombre del estudiante') //prompt es como el imput
nota = parseFloat(prompt('ingrear nota'))
if (nota >= 3.0 )
{
    document.write(nom_estudiante + 'esta aprobado con una nota de'+ nota) //Con el más se concatena
}
else {
    document.write(nom_estudiante + 'No esta reprobado con una nota de ' + nota )
}

//Funciones sin argumentos
//Var = Variables globales
var peso = parseInt(prompt('¿Cual es tu peso actual? (en kg)'))
var altura = parseInt(prompt('¿Cual es tu altura? (en M)'))

function calcularIMC()
{
let IMC = peso /(altura*altura) 
    if (IMC<18.5){
        window.alert('tu indice de masa corporal es'+ IMC.toFixed(2) +'Estas Bajo de peso')
    }
    else if (IMC>=18.5 && IMC < 25){
        window.alert('tu indice de masa corporal es'+ IMC.toFixed(2) +'Tu peso es normal')

    }
    else if (IMC>=25 && IMC < 30){
        window.alert('tu indice de masa corporal es'+ IMC.toFixed(2) +'Sobre peso')
    }
    else{
        window.alert('tu indice de masa corporal es'+ IMC.toFixed(2) +'Obeso')
    
    }
}


function promedioAltura()
{

}






// Llamando funciones
calcularIMC();


