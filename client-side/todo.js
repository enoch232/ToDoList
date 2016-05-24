$(document).ready(function(){

	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			var data = $('#title').val();
			$.ajax({
				url: "http://localhost:3000/api/todos", 
				type: "POST",
				data: {
					'title': data
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