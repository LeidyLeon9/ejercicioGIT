function burbuja(miarreglo) {
    for (let i = 0; i < miarreglo.length; i++) {
        for (let x = 0; x < (miarreglo.length - i); x++) {
            if (miarreglo[x] > miarreglo[x - 1]) {
                let y = miarreglo[x - 1];
                miarreglo[x - 1] = miarreglo[x];
                miarreglo[x] = y;
            }
        }
    }
    return miarreglo;
}

miarreglo = Array('ejercicio2', 3, 9, 59, 10, 500, 1, 25, true, 98);
miarreglo = miarreglo.filter(numero => Number.isInteger(numero));

arrayB = burbuja(miarreglo);

console.log("Arreglo ordenado de Mayor a Menor");
for (i = 0; i < arrayB.length; i++) {
    console.log(arrayB[i]);

}
