const argv = require('./config/yargs').argv;
const colors = require('colors');
//lo que sea

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
    listarTabla( argv.base, argv.limite );
    break;

    case 'crear':
   crearArchivo(argv.base, argv.limite)
  .then( archivo => console.log(`archivo creado: ` + `${ archivo }`.red) )
  .catch(e => console.log(e));
    console.log('crear');
    break;

    default:
        console.log('comando no reconocido');

}

console.log(argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]

console.log('limite',argv.limite);

 