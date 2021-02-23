// EventEmitter.
// Implementa on y emit

class EventEmitter {
	
	constructor() {
		this.eventos = {};
	}

	on(evento, callback) {

//En la primera entrada para el evento inicializamos el array
    if (!this.eventos[evento]) {
        this.eventos[evento] = [];
    } 

// Añadimos el escuchador para el evento    
    this.eventos[evento].push(callback);
      
    
	}

	emit(evento, ...args) {
		for(let e of this.eventos[evento]) {
      e(...args);
    }
	}
}

exports = module.exports = EventEmitter;