const XMLHttpRequest = require('xmlhttprequest'); //llamamo los paetesqu
const API = 'https://api.escuelajs.co/api/v1'; //llamadio a la api

function fetchData(urlApi, callback) { /*se creaun funcion que reibe la url eneste casola api que tenemos y una callback que sera una una funcion anonima par recibir la soliciud  que nos esta entregando el llamado a esta API*/

    let xhttp = new XMLHttpRequest();    //podemos controlar todo el flujo delllamado


  xhttp.open('GET', urlApi, true); /*espara abrir el tipo depeticon se va a recibir con el meodo quue GET + la url que se va autilizar y el valor true
  */
  
  xhttp.onreadystatechange = function (event) { /*es culosdiferentes estados que tiene la solicitud y asisaber cuando esta disponble */
    if (xhttp.readyState === 4) { /*valida en qe estado esta a cuatro que significa */
    /*0 === no e ha inicializado
      1 === todabia no se a llamado el valorde send (cuandose ejecuta
      2 === cuando ya se ejecuto el valor de send
      3 === esta interactuando o descargando la solicitd ) */

      if(xhttp.status === 200) { /*se evalua que la si¡licitud ha sido corcta */
        callback(null, JSON.parse(xhttp.resposeText)); /*tranformacion de la informacion*/
      }
    } else {
      const error = new Error('Error' + urlApi);/*,maneo  de los errores*/
      return callback(error, null);
    }
  }
  xhttp.send(); //estto espara qu se ejecute
}

fetchData(`${API}/products`, function (error1, data1) {  //e lllamaa prodos y sepasa na funcion ani¡onima
    if (error1) return console.error(error1);//si sucede un error 
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) { //callback conel valor de error y de datos
      if (error2) return console.error(error2); 
      fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {//aqi sepasael id delpodco qe  yo qiero obener
        if (error3) return console.error(error3);
        console.log(data1[0]);
        console.log(data2.title);
        console.log(data3.name);
      });
    });
  });