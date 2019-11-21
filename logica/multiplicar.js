// requireds == dependencias
const colors = require('colors');
const fs = require('fs');
let data = '';


let listarTabla = async(base, limite) => {

    console.log(`===============`.yellow);
    console.log(`table de multiplicar del ${base}`.white);
    console.log(`===============`.yellow);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`.white)
    }
}

let crearArchivo = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error(`el valor introducido ${base} no es un numero`);
    } else if (!base || !limite) {
        throw new Error(`el valor introducido en limite o base no puede ser null`);
    } else {
        for (let i = 0; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i} \n`);
        }
    }

    //Libreria para guardar textos
    fs.writeFile(`./tablas/tabla${base}.txt`, `${data}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            let nameArchivo = (`${base}.txt`)
            console.log(colors.yellow('archivo creado con el nombre'), `${nameArchivo}`);
            return nameArchivo;
        }
    });
};


//exporta las funciones de la clase
module.exports = {
    crearArchivo,
    listarTabla

}