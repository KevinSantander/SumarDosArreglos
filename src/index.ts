let vector1: number[] = new Array(6);
let vector2: number[] = new Array(6);
let sVectores: number[] = new Array(6);
let indice: number;

for (indice = 0; indice < 6; indice++) {
  vector1[indice] = Number(
    prompt("ingrese el valor de Vector1[" + indice + "]:")
  );
}

for (indice = 0; indice < 6; indice++) {
  vector2[indice] = Number(
    prompt("ingrese el valor de Vector2[" + indice + "]:")
  );
}

for (indice = 0; indice < 6; indice++) {
  sVectores[indice] = vector1[indice] + vector2[indice];
  console.log("sVectores[", indice, "]=", sVectores[indice]);
}
