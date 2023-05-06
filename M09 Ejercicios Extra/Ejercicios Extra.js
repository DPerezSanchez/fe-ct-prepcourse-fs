/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   const resultado = [];
  for (const clave in objeto) {
    resultado.push([clave, objeto[clave]]);
  }
  return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   const chars = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in chars) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }
  const sortedChars = {};
  Object.keys(chars).sort().forEach(function(key) {
    sortedChars[key] = chars[key];
  });
  return sortedChars;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let uppercase = '';
  let lowercase = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      uppercase += char;
    } else {
      lowercase += char;
    }
  }
  return uppercase + lowercase;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   // Convertir la cadena de entrada en un arreglo de palabras
  const words = frase.split(' ');

  // Iterar sobre el arreglo de palabras y para cada palabra, invertir su orden de caracteres
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  // Unir las palabras invertidas en una nueva cadena y devolverla
  return reversedWords.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   // Convertir el número a una cadena de caracteres
  const numStr = numero.toString();

  // Obtener la longitud de la cadena
  const len = numStr.length;

  // Iterar sobre la mitad de la cadena
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // Comparar el carácter i-ésimo con el carácter (n-i)-ésimo
    if (numStr[i] !== numStr[len - i - 1]) {
      // Si alguno de los caracteres no coincide, retornar "No es capicua"
      return "No es capicua";
    }
  }

  // Si todos los caracteres coinciden, retornar "Es capicua"
  return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   const newString = string.replace(/[abc]/g, '');

  // Retornar el string sin estas letras
  return newString;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
    // Ordenar el arreglo de strings por la longitud de cada string
  const sortedArray = arrayOfStrings.sort((a, b) => a.length - b.length);

  // Retornar el nuevo arreglo ordenado
  return sortedArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // Encontrar los elementos en común entre ambos arreglos
  const intersectionArray = array1.filter((value) => array2.includes(value));

  // Si no tienen elementos en común, retornar un arreglo vacío
  if (intersectionArray.length === 0) {
    return [];
  }

  // Retornar el nuevo arreglo con los elementos en común
  return intersectionArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
