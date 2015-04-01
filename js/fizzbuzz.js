


	fb = [];
	var $fizz = $('#fizz')
	for (var i=1; i<=100; i++) {
		if (i%15 == 0) {
			$appendage = ('<li>fizzbuzz</li>');
			fb.push("fizzbuzz");
		} else if (i%3 == 0) {
			$appendage = ('<li>fizz</li>');
			fb.push("fizz");
		} else if (i%5 ==0) {
			$appendage = ('<li>buzz</li>');
			fb.push("buzz");
		} else {
			$appendage = ('<li>'+i+'</li>');
			fb.push(i+"");
		}
		$('#fizzlist').append($appendage);
	}
	console.log(fb);
