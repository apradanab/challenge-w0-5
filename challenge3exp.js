// 1.Crea un generador de pirámides de asteriscos. El programa debe pedir al usuario la altura de la pirámide y mostrarla en la consola.

export const pyramidCreator = (height) => {
  for (let i = 1; i <=height; i++) {
    const spaces = ' '.repeat(height - i);
    const asterisk = '*'.repeat(2 * i - 1);
    console.log (spaces + asterisk);
  }
}


// 2.Crea una función que genere una contraseña aleatoria con letras mayúsculas, letras minúsculas y números. Por parámetros se indicara la longitud, con un minimum de 6 caracteres.

export const passwordMaker = (length) => {
  const type = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789';
  let password = [];
  if (length < 6) {
    console.log('longitud minima 6 caracteres.');
  } else {
  for(let i=0; i < length; i++) {
    let typeIndex = Math.floor(Math.random()*type.length);
    password.push(type[typeIndex])
  }
}
console.log(password.join(''))
}


// 3.Crea una función que filtre un array de nombres y devuelva solo los nombres con menos de cierta longitud.

export const nameLengthSelector = (namesArray, maxLength) => {
  let longNames = [];
  for (let i = 0; i < namesArray.length; i++) {
    let elementLength = namesArray[i].length;
    if (elementLength <= maxLength) {
      longNames.push(namesArray[i]);
    }
  }
  return longNames;
}


// 4.Crea una función que sume todos los números de un array y devuelva también la media, mediana, moda y la suma total.

export function getArrayData(inputArray) {
  let sum = 0;
  for (const element of inputArray) {
    sum = sum + element;
  }
  let average = (sum / inputArray.length).toFixed(2);
  let median = [];
  let sortedArray = inputArray.slice().sort((a, b) => a - b);
  if (inputArray.length % 2 !== 0) {
    let medianIndex = Math.floor(sortedArray.length / 2);
    median.push(sortedArray[medianIndex]);
  } else {
    let medianIndex1 = sortedArray.length / 2 - 1;
    let medianIndex2 = sortedArray.length / 2;
    median.push((sortedArray[medianIndex1] + sortedArray[medianIndex2]) / 2);
  }
  let result = { sum: sum, average: average, median: median };

  return result;
}
