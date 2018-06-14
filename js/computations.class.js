(function(window) {
	window.CalculatorComputations = {
		compute: function (type,numOne,numTwo,callback) {
			/// I have filled in one of the switch cases, fill out the rest.
			/// you must use callbacks to trigger the change in UI elements
			switch (type) {
				case 'plus':
					this.add(numOne,numTwo,callback);
					break;
				case 'minus':
					break;
				case 'divide':
					break;
				case 'times':
					break;
			}
		},
		add: function (numOne,numTwo,callback) {
			if (typeof callback === 'undefined') callback = null;
			if (callback !== null) {
				var added = parseFloat(numOne) + parseFloat(numTwo);
				callback(added);
			}
		},
		subtract: function (numOne,numTwo,callback) {

		},
		divide: function (numOne,numTwo,callback) {

		}
	}
})(window);