function tiktak(r, v){
	var changed = r.update();
	var currentTime = r.getClock();
	//	si el 'segundo' ha cambiado actualizamos la pantalla
	if(changed.s) v.updateView(currentTime,changed);
}
var reloj = new Clocker;
var relojView = new ClockerView(reloj.getClock());
//	Usamos un interval menor que 1s para ajustar más el reloj
setInterval("tiktak(reloj, relojView)",200);