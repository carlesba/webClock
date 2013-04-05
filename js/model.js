function Clocker () {
	this._now = {h:0, m:0, s:0}; 		//	tiempo actualizado
	this._before = {};							//	tiempo antes de actualizar
	this.update();
}
//	Devuelve la hora en JSON
Clocker.prototype.getClock = function(){
	return {h: this._now.h, m: this._now.m, s: this._now.s};
}
//	Actualiza el reloj
Clocker.prototype.update = function(){
	var currentTime = new Date();
	var changed = {h:false,m:false,s:false};	//	aviso de cambios
	//	guardamos antes de actualizar
	this._before.h = this._now.h;
	this._before.m = this._now.m;
	this._before.s = this._now.s;
	//	actualizamos
	this._now.h = currentTime.getHours();
	this._now.m = currentTime.getMinutes();
	this._now.s = currentTime.getSeconds();
	//	comprobamos cambios
	if(this._before.s != this._now.s){
		changed.s = true;
		if(this._before.m != this._now.m){
			changed.m = true;
		}
		if(this._before.h != this._now.h)
			changed.h = true;
	}
	return changed;
}