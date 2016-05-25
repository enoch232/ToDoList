function capitalize(string){
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function getTodoList(){
	$.ajax({
		url: "http://localhost:3000/api/todos", 
		success: function(todos){
			console.log(todos);
			todos.forEach(function(todo){
				if(todo.finished){
					$('#todo-holder').append("<p style = 'text-decoration:line-through'>"+capitalize(todo.title)+"</p>");
				}else{
					$('#todo-holder').append("<p>"+capitalize(todo.title)+"</p>");
				}
			});
		
		}

	});
}
$(document).ready(function(){
	//get all data initially.
	getTodoList();
	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			$.ajax({
				url: "http://localhost:3000/api/todos", 
				type: "POST",
				data: {
					'title': $('#title').val()
				},
				success: function(data){
					$('#todo-holder').append("<p>"+capitalize(data.title)+"</p>");
				},
				error: function(){
					alert("Failed!");
				}
			});
		}
	});
});