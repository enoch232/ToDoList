function capitalize(string){
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
$(document).ready(function(){
	
	function getTodoList(){
		$.ajax({
			url: "http://localhost:3000/api/todos", 
			success: function(todos){
				console.log(todos);
				todos.forEach(function(todo){
					var click;
					if(todo.finished){
						var click = $("<p class = 'todo' style = 'text-decoration:line-through' data-finished ='"+todo.finished+"' data-title ='"+todo.title+"' data-id ="+"'"+todo._id+"'"+" >"+capitalize(todo.title)+"</p>");
					}else{
						var click = $("<p class = 'todo' data-finished ='"+todo.finished+"' data-title ='"+todo.title+"' data-id ='"+todo._id+"'>"+capitalize(todo.title)+"</p>");
					}
					$('#todo-holder').append(click);
					click.on("click", function(){
						if (click.data('finished') == false){
							$.ajax({
								url: "http://localhost:3000/api/todos/"+click.data('id'), 
								type: "PUT",
								data: {
									title: click.data('title'),
									finished: true
								}
							});
						}else{
							$.ajax({
								url: "http://localhost:3000/api/todos/"+click.data('id'), 
								type: "PUT",
								data: {
									title: click.data('title'),
									finished: false
								}
							});
						}
						$('#todo-holder').empty();
						getTodoList();
					});
				});
			}

		});
	};
	//get all data initially.
	getTodoList()
	$("#make-btn").on("click",function(){
		if ($("#title").val().length){
			$.ajax({
				url: "http://localhost:3000/api/todos", 
				type: "POST",
				data: {
					'title': $('#title').val()
				},
				success: function(data){
					$('#todo-holder').append("<p class = 'todo' data-finished ='"+data.finished+"' data-title ='"+data.title+"' data-id ="+"'"+data._id+"'"+" >"+capitalize(data.title)+"</p>");
				},
				error: function(){
					alert("Failed!");
				}
			});
		}
	});
});