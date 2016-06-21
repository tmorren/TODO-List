var app = angular.module('todoApp', []);

app.controller('TodoController', ['$scope', function($scope){
	
	//Initializes the list if there is nothing in local storage
	if(localStorage['todos'] == undefined) {
        $scope.todos = [{
        	'title' : 'Create my first task!',
			'completed' : false,
			'highpriority' : false
        }]
    } else {
    	$scope.todos = JSON.parse(localStorage['todos']);
    }

	//Adds a new task to the list when the button is clicked
	$scope.addTodo = function(){
		
		$scope.todos.push({
				'title' : $scope.newTodo,
				'completed' : false,
				'highpriority' : false
		})
		
		$scope.newTodo = '';
	}

	//Clears the list of the completed tasks on button click
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.completed;
		})
	}

	//Watches for changes in todos, if a change is made, save to local storage
	$scope.$watch('todos', function(newValue, oldValue){
		if (newValue != oldValue){
			localStorage.setItem('todos', JSON.stringify(newValue));
		}
	}, true)

}]);
