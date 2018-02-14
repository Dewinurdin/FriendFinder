$('.submit-data').on('click', function(event) {
			event.preventDefault();
			console.log("You are submitting data");
			var newFriend = {
				name: $('#name').val().trim(),
				photo: $('#photo').val().trim()
			}
			console.log(newFriend);
			$.post('/survey', newFriend)  //look this up!!!
			.done(function(data) {
				console.log(data)
			})
		})