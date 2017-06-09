 //Business interface

 
// var number;
// for(var i =0; i <= number i++) {
// 	if(i % 5 === 0){ 	else if(i % 3 === 0){ 	else if( i % 5 ===0){

//  }
//    }
// }









//user interface
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
  event.preventDefault();
    $("#results").text(" ");


 var number = $("input#number").val();
 for(var i = 1; i<= number; i++){
 	if(i % 15===0){
 		$("#results").append('<li>'+ "ping-pong"+ '</li>');
 	}
 	else if(i % 3 === 0) {
 		$("#results").append('<li>' + "ping" + '</li>');
 	}
 	else if (i % 5 === 0){
 		$("results").append('<li>' + "pong" + '</li>');
 	}
 	else{
 		$("#results").append('<li>' + i + '</li>');
 	
 	}

 }



   });
});