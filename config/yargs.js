const opt = {
    base: {
        //comando obligatorio
        demand: true,
        alias: 'b',
        default: 1
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

//con esta libreria se podria crear un menu muy parecido a los de manuales de los comandos como --help
const argv = require('yargs')
    //comando  //lo que hace       //objeto que es obligatorio colocar          
    .command('listar', 'Imprime en consola la tablade multiplicar', opt)
    .command('crear', 'Crear un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}