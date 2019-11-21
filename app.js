const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./logica/multiplicar');

let comando = argv._[0];
console.log(argv);
// es como un if 
switch (comando) {

    case 'listar':

        let baseListar = argv.base;
        let limiteListar = argv.limite;

        let listar = async(baseListar, limiteListar) => {
            let result = await listarTabla(baseListar, limiteListar);
            return result;
        }

        listar(baseListar, limiteListar).then(respListarTable => {
            console.log(respListarTable);
        }, (err) => {
            console.log(err);
        })
        break;

    case 'crear':

        let base = argv.base;
        let limite = argv.limite;
        console.log(base);

        let getResult = async(base, limite) => {
            let result = await crearArchivo(base, limite);
            return result;
        }

        getResult(base, limite).then(objResp => {
            console.log(objResp);
        }, (err) => {
            console.log(`error al crear archivo`, err);
        });
        console.log('comando crear');
        break;

    default:
        console.log('comando no reconocido');
        break;
}