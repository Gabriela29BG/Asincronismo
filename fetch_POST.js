import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) { //recibe dos argumentos l url y la informacion que recibe
  const response = fetch(urlApi, { //la url y el objeto
    method: 'POST', //para enviar informaion se usa POST
    mode: 'cors', //permisos que va a tener por lo qe siempre estara en cors
    credentials: 'same-origin', //por defecto se aigna asi pero si no se asigna no pasa nada,es una autenticacion que no esta paando nada
    headers: {
      'Content-Type': 'application/json' //el valor que vamos a enviar es de aplicacion JSON
    },
    body: JSON.stringify(data) //es la informacion que yo e quiero tranmitir, se tranforma la informacion que se esta trae enstring.. para mandarla como texto y se le para como parametro la informacion (data)
  });
  return response;
}

const data = { //es  el producto que se enviara
  "title": "212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data) //usode la funcion: objetoque vmos a tramira esa API(dats)
  .then(response => response.json()) //lo que va a respnder el servidor cuando se almacena de forma correcta
  .then(data => console.log(data)); //mostrar la informaion