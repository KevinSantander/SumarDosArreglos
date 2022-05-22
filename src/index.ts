let numVector1: number[] = new Array(3);
let indice: number = 0;
numVector1[0] = Number(
  prompt(
    `Indique el número del primer vector que desea incorporar en la posición a1: `
  )
);
numVector1[1] = Number(
  prompt(
    `Indique el número del primer vector que desea incorporar en la posición b1: `
  )
);
numVector1[2] = Number(
  prompt(
    `Indique el número del primer vector que desea incorporar en la posición c1: `
  )
);
for (indice = 0; indice < 3; indice++) {
  console.log(
    `El número del vector 1 en la posición ${indice} es ${numVector1[indice]}`
  );
}
console.log(
  "El vector 1 es ",
  "<",
  numVector1[0],
  ",",
  numVector1[1],
  ",",
  numVector1[2],
  ">"
);
let numVector2: number[] = new Array(3);
let indice2: number = 0;
numVector2[0] = Number(
  prompt(
    `Indique el número del segundo vector que desea incorporar en la posición a2: `
  )
);
numVector2[1] = Number(
  prompt(
    `Indique el número del segundo vector que desea incorporar en la posición b2: `
  )
);
numVector2[2] = Number(
  prompt(
    `Indique el número del segundo vector que desea incorporar en la posición c2: `
  )
);
for (indice2 = 0; indice2 < 3; indice2++) {
  console.log(
    `El número del segundo vector en la posición ${indice2} es ${numVector2[indice2]}`
  );
}
console.log(
  "El vector 2 es ",
  "<",
  numVector2[0],
  ",",
  numVector2[1],
  ",",
  numVector2[2],
  ">"
);
let numVectorSuma: number[] = new Array(6);
let indiceSuma: number = 0;
numVectorSuma[0] = Number(numVector1[0]);
numVectorSuma[1] = Number(numVector2[0]);
numVectorSuma[2] = Number(numVector1[1]);
numVectorSuma[3] = Number(numVector2[1]);
numVectorSuma[4] = Number(numVector1[2]);
numVectorSuma[5] = Number(numVector2[2]);
for (indiceSuma = 0; indiceSuma < 6; indiceSuma++) {
  console.log(
    `El número del vector suma en la posición ${indiceSuma} es ${numVectorSuma[indiceSuma]}`
  );
}
console.log(
  "El vector suma es",
  "<",
  numVector1[0] + numVector2[0],
  ",",
  numVector1[1] + numVector2[1],
  ",",
  numVector1[2] + numVector2[2],
  ">"
);
