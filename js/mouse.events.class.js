(function(window) {
	window.CalculatorMouseEvents = {
		registerEvents: function (argument) {
			$('.num').off().click(function () {
				console.log('num clicked!');
			});
			///// other click events go here
		},
	}
})(window);