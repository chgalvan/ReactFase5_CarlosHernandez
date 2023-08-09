function procesarRespuestas() {
    let total=5
    let puntos=0;

let myForm = document.forms["formulario"];
let respuestasCorrectas = ["d", "c", "b", "b", "b"];

for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value == null ||
        myForm["r" + i].value == '') {
        alert('favor responder todas las preguntas');
        return false;
   } else {
     if (myForm["r" + i].value === respuestasCorrectas[i - 1])
         puntos++;
   }
}
let resultado = document.getElementById('resultado')
alert(resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ');
return false;
}

function procesarRespuestas2() {
    let total=5
    let puntos=0;

let myForm = document.forms["formulario"];
let respuestasCorrectas = ["b", "b", "c", "a", "b"];

for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value == null ||
        myForm["r" + i].value == '') {
        alert('favor responder todas las preguntas');
        return false;
   } else {
     if (myForm["r" + i].value === respuestasCorrectas[i - 1])
         puntos++;
   }
}
let resultado = document.getElementById('resultado')
alert(resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ');
return false;
}

function procesarRespuestas3() {
    let total=5
    let puntos=0;

let myForm = document.forms["formulario"];
let respuestasCorrectas = ["c", "a", "b", "c", "d"];

for (let i=1; i <= total; i++) {
    if (myForm["r" + i].value == null ||
        myForm["r" + i].value == '') {
        alert('favor responder todas las preguntas');
        return false;
   } else {
     if (myForm["r" + i].value === respuestasCorrectas[i - 1])
         puntos++;
   }
}
let resultado = document.getElementById('resultado')
alert(resultado.innerHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ');
return false;
}