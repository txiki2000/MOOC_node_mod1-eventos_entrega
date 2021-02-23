//Para emitir eventos.
const EventEmitter = require('./events');

// Gestion horaria
const later = require('later');

//Usamos la hora local
later.date.localTime();



class Programador extends EventEmitter {
// Recibe la tabla con la programación horaria.    
    constructor(programacion) { 
        super();
        console.log(programacion)

        for (let par of programacion) {
            console.log('Programacion aceptada a las ' + par.hora + '=>' + par.temperatura );

            //Planificamos un evento a la hora indicada.
            const prog = later.parse.text('at ' + par.hora);

            //a la hora indicada lanzamos el evento 'ideal'
            later.setInterval(() => this.emit('ideal', par.temperatura), prog);
        }
        
    }
}

exports = module.exports = Programador;