function ClockerView (clock) {
	this.hour = $('.hour .digit');
	this.min = $('.minutes .digit');
	this.sec = $('.seconds .digit');

	this.currentSec = $('<span>'+('0' + clock.s).slice(-2)+'</span>').prependTo(this.sec);
	this.currentMin = $('<span>'+('0' + clock.m).slice(-2)+'</span>').prependTo(this.min);
	this.currentHour = $('<span>'+('0' + clock.h).slice(-2)+'</span>').prependTo(this.hour);
}
ClockerView.prototype.updateView = function(currenTime, changed){
	var elements;
	var speed = 600;
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	/*	SEGUNDOS
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	//	nuevo elemento actualizado
	var nextSec = $('<span>'+('0' + currenTime.s).slice(-2)+'</span>').prependTo(this.sec);
	this.currentSec.addClass('after');
	this.currentSec.attr('style','');

	//	Movemos los dijitos
	this.currentSec.animate({top:"0px"}, {duration: speed, easing:'linear'});	
	nextSec.animate({top:"0px"}, {duration: speed, easing:'linear'});

	// liberamos memoria
	elements = this.sec.find('span');
	if(elements.length > 2) elements.last().remove();
	this.currentSec = nextSec;
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	/*	MINUTOS
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	elements = this.min.find('span');
	if(changed.m || elements.length < 2){
		//	nuevo elemento actualizado
		var nextMin = $('<span>'+('0' + currenTime.m).slice(-2)+'</span>').prependTo(this.min);
		this.currentMin.addClass('after');
		this.currentMin.attr('style','');

		//	movemos los dijitos
		this.currentMin.animate({top:"0px"}, speed, 'linear');	
		nextMin.animate({top:"0px"}, speed, 'linear');	

		// liberamos memoria
		if(elements.length > 2) elements.last().remove();
		this.currentMin = nextMin;
	}
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	/*	HORAS
	/*––––––––––––––––––––––––––––––––––––––––––––*/
	elements = this.hour.find('span');
	if(changed.h || elements.length < 2){
		//	nuevo elemento actualizado
		var nextHour = $('<span>'+('0' + currenTime.h).slice(-2)+'</span>').prependTo(this.hour);
		this.currentHour.addClass('after');
		this.currentHour.attr('style','');

		//	movemos los dijitos
		this.currentHour.animate({top:"0px"}, speed, 'linear');	
		nextHour.animate({top:"0px"}, speed, 'linear');	

		// liberamos memoria
		var elements = this.hour.find('span');
		if(elements.length > 2) elements.last().remove();
		this.currentHour = nextHour;
	}
}