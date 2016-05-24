$(document).ready(function(){
	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			$.ajax("http://localhost:3000/api/todos", {
				type: "POST",
				data: {
					title: $('#title').val()
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