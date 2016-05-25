$(document).ready(function(){
	$.ajax({
		url: "http://localhost:3000/api/todos", 
		success: function(todos){
			console.log("successful");
			console.log(todos);
			todos.forEach(function(todo){
				$('#todo-holder').append("<p>"+todo.title+"</p>");
			});
		
		}

	});
	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			$.ajax({
				url: "http://localhost:3000/api/todos", 
				type: "POST",
				data: {
					'title': $('#title').val()
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