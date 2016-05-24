$(document).ready(function(){
	$.ajax({
		url: "http://localhost:3000/api/todos", 

	});
	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			$.ajax({
				url: "http://localhost:3000/api/todos", 
				type: "POST",
				data: {
					'title': $('#title').val();
				},
				success: function(){
					alert("Success!");
				},
				error: function(){
					alert("Failed!");
				}
			});
		}
	});
});