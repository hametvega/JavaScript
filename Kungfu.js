//Definir clase
class Persona{//En las clases la primera letra viene en maayusucla.

            //Definir atributos de la clase
    constructor(nombre,apellido,edad, genero){ //Se establecen los parametros
    this.Nombre = nombre;   //con el this. lo igualo, parecido al .get
    this.Apellido = apellido;
    this.Edad = edad;
    this.Genero = genero;
    }

            //Defnir metodos
saludar() {
        
    console.log( `Días porque buenas estas tu bb, soy ${this.Nombre}`)
}
mayor(){
    if(this.Edad >= 18){
        console.log (`Felicidades eres mayor de edad`)
    }
    else{
        console.log(`Aun eres menor de edad 😢`)
    }
        
}
calcularedad(){
    let anitos = Math.floor(this.Edad);
    let meses = Math.floor();

    console.log(`Tienes ` +anitos + ` años y `+meses+` meses `)
}




} 
            //crear objeto
console.log(`soy la primera persona = obejeto`)
const Persona1 = new Persona('Hamet','Vega',18,'Masculino')

Persona1.saludar();
Persona1.mayor();
Persona1.calcularedad()
console.log(`soy la segunda persona`)
const Persona2 = new Persona('Paula','Gomez',25,'Femenino')

Persona2.saludar();
Persona2.mayor();
Persona1.calcularedad()
const Persona3 = new Persona(`Ian`, `Matias`,2, `undefined`)

Persona3.saludar();
Persona3.mayor();
Persona1.calcularedad()


































