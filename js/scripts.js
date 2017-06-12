 //Business interface
function pings(pingg){
var array = []

	for(var i = 1; i<= pingg; i++){
 	if(i % 15===0){
 		array.push('pingPong')
 	}
 	else if(i % 3 === 0) {
 		array.push('ping')
 	}
 	else if (i % 5 === 0){
 		array.push('pong')
 	}
 	else{
 		array.push(i)
 	
 	}
 	
}
return array
}

//user interface
$(document).ready(function(){
  $('form#pingPong').submit(function(event){
  event.preventDefault();
    var pingg = parseInt($('input#number').val())
    var aweNum = pings(pingg)

    $('#results').text('');

    $('#results').append('<ul>')
    aweNum.forEach(function(aweNu){
    	console.log("w")
    	$('#results').append('<li>' + aweNu + '</li>')
    	})
    $('#results').append('</ul>')
    $('#results').show()
   });
});