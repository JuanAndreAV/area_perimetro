let a, b, c, resultado, operacion;

let boton = document.getElementById("calcular");
let tipo_operacion = document.getElementById("area_perimetro");

// Creación reactiva de inputs y párrafos
let contenido = document.getElementById("contenido");

let parrafo1 = document.createElement('p');
let parrafo2 = document.createElement('p');
let parrafo3 = document.createElement('p');

let input1 = document.createElement('input');
input1.setAttribute("type", "number");
input1.setAttribute("id", "valor1");

let input2 = document.createElement('input');
input2.setAttribute("type", "number");
input2.setAttribute("id", "valor2");

let input3 = document.createElement('input');
input3.setAttribute("type", "number");
input3.setAttribute("id", "valor3");

function triangulo() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido(); // Para inicializar la interfaz al seleccionar la figura

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        if (tipo_operacion.value == "perimetro") {
            contenido.appendChild(parrafo1);
            parrafo1.innerText = "Lado a: ";
            contenido.appendChild(input1);
            input1.setAttribute("placeholder", "lado a");

            contenido.appendChild(parrafo2);
            parrafo2.innerText = "Lado b: ";
            contenido.appendChild(input2);
            input2.setAttribute("placeholder", "lado b");

            contenido.appendChild(parrafo3);
            parrafo3.innerText = "Lado c: ";
            contenido.appendChild(input3);
            input3.setAttribute("placeholder", "lado c");
        } else if (tipo_operacion.value == "volumen") {
            alert("Un triángulo no tiene volumen.");
        } else {
            contenido.appendChild(parrafo1);
            parrafo1.innerText = "Base: ";
            contenido.appendChild(input1);
            input1.setAttribute("placeholder", "base");

            contenido.appendChild(parrafo2);
            parrafo2.innerText = "Altura (h): ";
            contenido.appendChild(input2);
            input2.setAttribute("placeholder", "altura");
        }
    }
}

function rectangulo() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        contenido.appendChild(parrafo1);
        parrafo1.innerText = "Longitud: ";
        contenido.appendChild(input1);
        input1.setAttribute("placeholder", "longitud");

        contenido.appendChild(parrafo2);
        parrafo2.innerText = "Anchura: ";
        contenido.appendChild(input2);
        input2.setAttribute("placeholder", "anchura");
    }
}

function cuadrado() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        contenido.appendChild(parrafo1);
        parrafo1.innerText = "Lado: ";
        contenido.appendChild(input1);
        input1.setAttribute("placeholder", "lado");
    }
}

function circulo() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        contenido.appendChild(parrafo1);
        parrafo1.innerText = "Radio (r): ";
        contenido.appendChild(input1);
        input1.setAttribute("placeholder", "radio");
    }
}

function cubo() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        if (tipo_operacion.value == "volumen") {
            contenido.appendChild(parrafo1);
            parrafo1.innerText = "Lado del cubo: ";
            contenido.appendChild(input1);
            input1.setAttribute("placeholder", "lado");
        } else {
            alert("Solo se puede calcular el volumen del cubo.");
        }
    }
}

function cilindro() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        if (tipo_operacion.value == "volumen") {
            contenido.appendChild(parrafo1);
            parrafo1.innerText = "Radio de la base: ";
            contenido.appendChild(input1);
            input1.setAttribute("placeholder", "radio");

            contenido.appendChild(parrafo2);
            parrafo2.innerText = "Altura: ";
            contenido.appendChild(input2);
            input2.setAttribute("placeholder", "altura");
        } else {
            alert("Solo se puede calcular el volumen del cilindro.");
        }
    }
}

function esfera() {
    document.getElementById("area_perimetro").addEventListener("change", mostrarContenido);
    mostrarContenido();

    function mostrarContenido() {
        document.getElementById("contenido").innerHTML = "";
        if (tipo_operacion.value == "volumen") {
            contenido.appendChild(parrafo1);
            parrafo1.innerText = "Radio de la esfera: ";
            contenido.appendChild(input1);
            input1.setAttribute("placeholder", "radio");
        } else {
            alert("Solo se puede calcular el volumen de la esfera.");
        }
    }
}

let figuras = [triangulo, rectangulo, cuadrado, circulo, cubo, cilindro, esfera];

function seleccion() {
    document.getElementById("contenido").innerHTML = "";
    let ubicacion = document.getElementById("figuras");
    operacion = parseInt(ubicacion.value);
    figuras[operacion]();
}
document.getElementById("figuras").addEventListener("change", seleccion);

function areaPerimetroFiguras() {
    let parrafo = document.getElementById("resultado");

    switch (operacion) {
        case 0:
            if (tipo_operacion.value == "perimetro") {
                a = +document.getElementById("valor1").value;
                b = +document.getElementById("valor2").value;
                c = +document.getElementById("valor3").value;
                resultado = a + b + c;
                parrafo.innerText = `Perímetro del triángulo: ${a} + ${b} + ${c} = ${resultado}`;
            } else {
                a = +document.getElementById("valor1").value;
                b = +document.getElementById("valor2").value;
                resultado = (a * b) / 2;
                parrafo.innerText = `Área del triángulo: (base ${a} * altura ${b}) / 2 = ${resultado}`;
            }
            break;
        case 1:
            if (tipo_operacion.value == "perimetro") {
                a = +document.getElementById("valor1").value;
                b = +document.getElementById("valor2").value;
                resultado = 2 * (a + b);
                parrafo.innerText = `Perímetro del rectángulo: 2 * (${a} + ${b}) = ${resultado}`;
            } else {
                a = +document.getElementById("valor1").value;
                b = +document.getElementById("valor2").value;
                resultado = a * b;
                parrafo.innerText = `Área del rectángulo: ${a} * ${b} = ${resultado}`;
            }
            break;
        case 2:
            a = +document.getElementById("valor1").value;
            if (tipo_operacion.value == "perimetro") {
                resultado = 4 * a;
                parrafo.innerText = `Perímetro del cuadrado: 4 * ${a} = ${resultado}`;
            } else {
                resultado = a * a;
                parrafo.innerText = `Área del cuadrado: ${a} * ${a} = ${resultado}`;
            }
            break;
        case 3:
            a = +document.getElementById("valor1").value;
            if (tipo_operacion.value == "perimetro") {
                resultado = 2 * Math.PI * a;
                parrafo.innerText = `Perímetro del círculo: 2 * π * ${a} = ${resultado.toFixed(2)}`;
            } else {
                resultado = Math.PI * a * a;
                parrafo.innerText = `Área del círculo: π * ${a}² = ${resultado.toFixed(2)}`;
            }
            break;
        case 4:
            a = +document.getElementById("valor1").value;
            resultado = Math.pow(a, 3);
            parrafo.innerText = `Volumen del cubo: ${a}³ = ${resultado}`;
            break;
        case 5:
            a = +document.getElementById("valor1").value;
            b = +document.getElementById("valor2").value;
            resultado = Math.PI * Math.pow(a, 2) * b;
            parrafo.innerText = `Volumen del cilindro: π * ${a}² * ${b} = ${resultado.toFixed(2)}`;
            break;
        case 6:
            a = +document.getElementById("valor1").value;
            resultado = (4 / 3) * Math.PI * Math.pow(a, 3);
            parrafo.innerText = `Volumen de la esfera: (4/3) * π * ${a}³ = ${resultado.toFixed(2)}`;
            break;
    }
}
boton.addEventListener("click", areaPerimetroFiguras);