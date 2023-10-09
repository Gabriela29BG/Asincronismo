/*Este código en JavaScript utiliza la biblioteca node-fetch para realizar solicitudes HTTP a una API en línea y recuperar datos. Aquí tienes una descripción de lo que hace este código:

Se importa la función fetch desde el módulo node-fetch. Esto permite realizar solicitudes HTTP en un entorno de Node.js.

Se define la constante API, que contiene la URL base de la API a la que se realizarán las solicitudes.

Se define una función llamada fetchData que toma una URL como argumento y simplemente realiza una solicitud fetch a esa URL. Esta función devuelve la promesa resultante de fetch.

El código incluye una serie de solicitudes fetch encadenadas que se ejecutan en secuencia:

Se realiza una solicitud a ${API}/products para obtener datos de productos.
Se analiza la respuesta JSON y se imprime en la consola.
Luego, se toma el primer producto de la respuesta y se realiza una solicitud adicional a ${API}/products/${products[0].id} para obtener detalles de ese producto.
Se analiza la respuesta JSON y se imprime el título del producto en la consola.
Finalmente, se realiza una solicitud a ${API}/categories/${product.category.id} para obtener información sobre la categoría del producto.
Se analiza la respuesta JSON y se imprime el nombre de la categoría en la consola.
Se utiliza .catch() para manejar cualquier error que pueda ocurrir durante las solicitudes fetch, en caso de que ocurra un problema en la comunicación con la API.

El método .finally() se utiliza para imprimir "Finally" en la consola después de que se complete todo el flujo de trabajo, independientemente de si hubo éxito o error en las solicitudes.

Este código demuestra cómo realizar solicitudes secuenciales a una API utilizando fetch y cómo manejar las respuestas y los errores en cada paso. Las solicitudes se realizan en orden, lo que garantiza que se complete una antes de comenzar la siguiente.*/

import fetch from 'node-fetch'; //trer a nodepra ejecutar el archivo
const API = 'https://api.escuelajs.co/api/v1'; //es la apide la peticion

function fetchData(urlApi) { //funcoion dende se pasaunvalor y reorna elmismo elemento y tranformar conformese continua
  return fetch(urlApi);
};

// fetchData(`${API}/products`)  //el LLAMADO: e paa la url a la cual queremos llamar y tranformar al valoralcual queremos llamar  
//   .then(response => response.json()) //para tranformar la informacion que esta regresandoa un objeto Json
//   .then(products => { //muestra que incluye 
//     console.log(products); //para derlos ver 
//   })
//   .then(() => {
//     console.log('hola')
//   })
//   .catch(error => console.log(error)); //muestra los errores

fetchData(`${API}/products`)  // es la ogicadelaprmersoliciud
  .then(response => response.json()) //tranformacion de la inormacion a format JSON
  .then(products => { //funcion que muestra los elementos que queremosreornar 
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`) //se llama al primer producto, concecuencia de elementos 
  })
  .then(response => response.json()) //se vuelve a llamar la data para hacerle otra peticion
  .then(product => {
    console.log(product.title); // llamar la segunda peticion  que haccede a la categoria que tiene
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json()) //se llma la data
  .then(category => {
    console.log(category.name); // se mprime elnombre delproducto
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));