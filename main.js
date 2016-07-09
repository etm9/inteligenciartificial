saludoInicial="Hola";

arrayTriste = ["defraudado","afectado","lloroso","despedido","euforico","decaido","deprimido","horrible","mal","del nabo","de hueva","cortaron","batearon","soltero","cortamos","peleamos","pelear"]
arrayOdio = ["rencor","aversion","oposicion","en contra","enemigo","te vale","nefasto","odiar","rencoroso"]
arraySoledad = ["separado","alejarse","dejar","solo","abandonado","dejado","dejaron","corto","dejo"]
arrayContento = ["feliz", "emocionado", "entusiasmado", "excitado", "alegre"]
arrayEnamorado = ["flechado", "encantado", "ligado", "amado", "seducido"]
arrayIntenso = ["enojado", "grosero", "molesto", "enfadado", "violento", "pesado"]
arrayAngustia = ["intranquilidad", "intranquilo", "preocupacion", "preocupado", "inquietud", "inquieto", "desesperacion", "desesperado", "ansia", "ansioso", "atormentado", "agobia", "agobiado", "mortificacion", "mortificado"]

var arregloDeArreglos = [ arrayContento, arrayTriste, arrayEnamorado, arrayOdio, arrayIntenso, arraySoledad, arrayAngustia];




var saludo = prompt('','');

if(new String(saludo).valueOf() == new String(saludoInicial).valueOf()){
 console.log("como estas?");
 var frase =prompt('','');
    buscarSentimiento(frase);

}


function seguirConversacion(){
  var frase =prompt('','');
    buscarSentimiento(frase);
}


function buscarSentimiento(frase){
 var existo = false;


for (i = 0; i < arregloDeArreglos.length; i++) {
   
   existo = buscarSentimientoEnArreglo(arregloDeArreglos[i],frase);    
    if(existo){
       break;
    }

   }

  
  if(existo){
    if(i == 0){
    respuestaRamdom(1);
     }
    if(i == 1){
    respuestaRamdom(12);
   }
   if(i == 2){
    respuestaRamdom(22);
   }
if(i == 3){
    respuestaRamdom(32);
   }
if(i == 4){
    respuestaRamdom(46);
   }

if(i == 5){
    respuestaRamdom(56);
   }

if(i == 6){
    respuestaRamdom(66);
   }
}else{
  
  respuestaRamdom(-1);  
}    
                  
}


function buscarSentimientoEnArreglo(arreglo, frase){

for (i = 0; i < arreglo.length; i++){

    if((frase.indexOf(arreglo[i]))!=-1){
       return true;
      break;
      }
    }
  return false;
}


function respuestaRamdom(v){

if(v==-1){
v = probSentimiento();
}


if(v>0 && v < 11){
// contento
var resp= ["Eres una persona agradable", "Esa es la actitud!","Nice!","Que bonito d?a","Me encantas" ];
console.log(resp[probRespuesta()])
seguirConversacion()
 
}
if(v>11 && v < 20){
// triste
var resp= ["No me gusta este dia", "Que triste","Eso no me gusta","No me siento bien","Quiero llorar" ];
console.log(resp[probRespuesta()])
seguirConversacion()

}
if(v>21 && v < 30){
// enamorado
var resp= ["Te amoo", "Eres muy guap@","Me gustas","Te quieroo","Eres encantador" ];
console.log(resp[probRespuesta()])
seguirConversacion()
}
if(v>31 && v < 45){
// odio
var resp= ["Te odio", "No me hables!","Por que no te vas","Dejame en paz","Muere!!!" ];
console.log(resp[probRespuesta()])
seguirConversacion()
}
if(v>45 && v < 55){
// intenso
var resp= ["Probablemente es tu culpa", "No me hables!","No me interesa lo que tengas que decirme","No me importa","Largate" ];
console.log(resp[probRespuesta()])
seguirConversacion()
}
if(v>55 && v < 60){
var resp= ["No te vallas estoy muy solo", "Forever Alone","Eres mi unico amigo","Que mas da nadie nos quiere","No me dejes"];
console.log(resp[probRespuesta()])
seguirConversacion()
// soledad
}
if(v>60 && v < 65){
// angustia
var resp= ["Moriremos!", "Es muy complicado","No puedooo","No lo vamos a lograr","No me dejes, estoy angustiado"];
console.log(resp[probRespuesta()])
seguirConversacion()
}
if(v>65 && v < 70){
//salir
console.log("adios!!!!")
fin()

}
}

function fin(){
break;
}

function probSentimiento() {
   return Math.floor((Math.random() * 70));
}

function probRespuesta() {
   return Math.floor((Math.random() * 5));
}