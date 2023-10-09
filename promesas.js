const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
  });//estructura basica
  
  const cows = 15;
  
  const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
      resolve(`We have ${cows} cows on the farm`);
    } else {
      reject("There is no cows on the farm");
    }
  });
  
  countCows.then((result) => { //result sera un resolve o reject segun sea el resultado
    console.log(result);
  }).catch((error) => {
    console.log(error);
  }).finally(() => console.log('Finally'));
---------------




function exitoCallback(resultado) {
    console.log("Archivo de audio disponible en la URL " + resultado);
  }
  
  function falloCallback(error) {
    console.log("Error generando archivo de audio " + error);
  }
  
  crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);


  const promesa = crearArchivoAudioAsync(audioConfig);
promesa.then(exitoCallback, falloCallback);