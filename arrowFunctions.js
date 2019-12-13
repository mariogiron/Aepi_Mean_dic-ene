function sumar(a, b) {
    return a + b;
}

const sumar2 = function (a, b) {
    return a + b;
}

const sumar3 = (a, b) => a + b;

const sumar5 = num => num + 5;

setTimeout(() => console.log('Hola Mundo'), 2000);

const numeros = [1, 2, 3, 4, 5, 89, 234];

let arrPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        arrPares.push(numeros[i]);
    }
}

let arrPares2 = numeros.filter(item => item % 2 == 0);
console.log(arrPares2);

let arrDobles = numeros.map(item => item * 2);
console.log(arrDobles);

let arrParesDobles = numeros.filter(item => item % 2 == 0).map(item => item * 2);
console.log(arrParesDobles);

const sumarCB = (a, b, done) => {
    setTimeout(() => {
        done(a + b);
    }, 2000);
}

sumarCB(3, 6, (resultado) => {
    console.log(resultado);
});

const sumarPromise = (a, b) => {
    let prom = new Promise((resolve, reject) => {
        let numAleatorio = Math.random();
        if (numAleatorio > 0.3) {
            resolve(numAleatorio);
        } else {
            reject(`Error: ${numAleatorio}`);
        }
    });
    return prom;
};

sumarPromise(4, 5)
    .then((numero) => {
        console.log(numero);
    })
    .catch((mensaje) => {
        console.log(mensaje);
    });

async function prueba() {
    let numero = await sumarPromise(8, 9);
};

(async () => {
    try {
        let numero = await sumarPromise(8, 9);
        console.log(numero);
        let numero2 = await sumarPromise(8, 9);
        console.log(numero2);
    } catch (err) {
        console.log(err);
    }
})();

function insert({ nombre, apellidos, direccion = "Default", numCalle, numPiso }) {

}

insert({
    nombre: 'Mario',
    apellidos: 'Girón',
    numCalle: 23,
    numPiso: 3
})

const sumaResta = (a, b) => {
    const suma = a + b;
    const resta = a - b;
    return [suma, resta];
}

const [resultSuma, resultResta] = sumaResta(8, 5);
// const resultSuma = result[0];
// const resultResta = result[1];
