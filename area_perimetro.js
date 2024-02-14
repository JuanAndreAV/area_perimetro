
let a;
let b;
let c; 
let resultado;
let operacion;


let boton = document.getElementById("calcular")
let tipo_operacion = document.getElementById("area_perimetro")

//creacion reactiva de inputs y parrafos
let contenido = document.getElementById("contenido")
    
let parrafo1 = document.createElement('p')
let parrafo2 = document.createElement('p')
let parrafo3 = document.createElement('p')
   
let input1 = document.createElement('input')
    input1.setAttribute("type", "number")
    input1.setAttribute("id","valor1")
let input2 = document.createElement('input')
    input2.setAttribute("type", "number")
    input2.setAttribute("id","valor2")
let input3 = document.createElement('input')
    input3.setAttribute("type", "number")
    input3.setAttribute("id","valor3")

function triangulo(){

    document.getElementById("area_perimetro").addEventListener("change",mostrarContenido)

    function mostrarContenido(){
        if(tipo_operacion.value == "perimetro"){
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "lado a: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "lado a")

            contenido.appendChild(parrafo2)
            parrafo2.innerText = "lado b: "
            contenido.appendChild(input2)
            input2.setAttribute("placeholder", "lado b")

            contenido.appendChild(parrafo3)
            parrafo3.innerText = "lado c: "
            contenido.appendChild(input3)
            input3.setAttribute("placeholder", "lado c")
        } else {
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "base: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "base")

            contenido.appendChild(parrafo2)
            parrafo2.innerText = "altura (h): "
            contenido.appendChild(input2)
            input2.setAttribute("placeholder", "Altura")
           
        }
    }
      
};


function rectangulo(){
    document.getElementById("area_perimetro").addEventListener("change",mostrarContenido)

    function mostrarContenido(){
        
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "Longitud: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "longitud")

            contenido.appendChild(parrafo2)
            parrafo2.innerText = "Anchura: "
            contenido.appendChild(input2)
            input2.setAttribute("placeholder", "ancho")
        
    }
};

function cuadrado(){
    document.getElementById("area_perimetro").addEventListener("change",mostrarContenido)

    function mostrarContenido(){
        if(tipo_operacion.value == "perimetro"){
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "lado: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "lado")

        } else {
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "lado: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "lado")

        }
    }
      
};

function circulo(){
    document.getElementById("area_perimetro").addEventListener("change",mostrarContenido)

    function mostrarContenido(){
        if(tipo_operacion.value == "perimetro"){
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "radio r: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "radio")

            
        } else {
            document.getElementById("contenido").innerHTML="";
            contenido.appendChild(parrafo1)
            parrafo1.innerText = "radio r: "
            contenido.appendChild(input1)
            input1.setAttribute("placeholder", "radio")
           
        }
    }
};


let figuras = [triangulo, rectangulo, cuadrado, circulo]


function seleccion(){
    let limpiarContenido = document.getElementById("contenido").innerHTML="";
    
    let ubicacion = document.getElementById("figuras")
     operacion = parseInt(ubicacion.value)
    let  tipo_funcion = figuras[operacion]()
     return tipo_funcion
}
document.getElementById("figuras").addEventListener("change",seleccion)
   
function areaPerimetroFIguras(){
let parrafo = document.getElementById("resultado")
 
   switch (operacion) {
    case 0:
        if(tipo_operacion.value == "perimetro"){
            a = +document.getElementById("valor1").value;
            b = +document.getElementById("valor2").value;
            c = +document.getElementById("valor3").value;
            resultado = a + b + c;
            parrafo.innerText  = `Perímetro del triangulo: lado a: ${a} + lado b: ${b} + lado: ${c} = ${resultado}`
            input1.value = "";
            input2.value = "";
            input3.value = "";
    
        }else{
            a = +document.getElementById("valor1").value
            b = +document.getElementById("valor2").value
            resultado = (a * b) / 2;
            parrafo.innerText = "Area del triángulo: "+ "b "+ a + " x h "+b+ " / 2 "+"= "+resultado;
            input1.value="";
            input2.value="";
        }
        break;
    case 1: 
    if(tipo_operacion.value == "perimetro"){
        a = +document.getElementById("valor1").value;
        b = +document.getElementById("valor2").value;
        resultado = 2 * (a + b)
        parrafo.innerText  = `Perímetro del rectángulo: longitud b: ${a} + ancho a: ${b} * 2: = ${resultado}`
            input1.value = "";
            input2.value = "";
            input3.value = "";
    }else{
        a = +document.getElementById("valor1").value;
        b = +document.getElementById("valor2").value;
        resultado = a * b
        parrafo.innerText  = `Area del rectángulo: longitud b: ${a} x ancho a: ${b} = ${resultado}`
            input1.value = "";
            input2.value = "";
            input3.value = "";
    }
    break;
    case 2:
        if(tipo_operacion.value == "perimetro"){
            a = +document.getElementById("valor1").value;
            resultado = 4 * a
            parrafo.innerText  = `Perímetro del cuadrado: 4 * lado: ${a} = ${resultado}`
            input1.value = "";
        }else{
            a = +document.getElementById("valor1").value;
            resultado = a ** 2
            parrafo.innerText  = `Area del cuadrado:  lado: ${a} al cuadrado = ${resultado}`
            input1.value = ""; 
        }
    break;
    case 3:
        if(tipo_operacion.value == "perimetro"){
            a = +document.getElementById("valor1").value;
            resultado = 2 * Math.PI * a
            parrafo.innerText  = `Perímetro del círculo: 2 x PI x radio ${a} = ${resultado}`
            input1.value = "";
        }else{
            a = +document.getElementById("valor1").value;
            resultado = Math.PI * Math.pow(a,2)
            parrafo.innerText  = `Area del círculo:  PI x radio ${a} al cuadrado = ${resultado}`
            input1.value = "";
        }
        break;
   }
    
    
}

document.getElementById("calcular").addEventListener("click",areaPerimetroFIguras)

