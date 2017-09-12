$('.btn').click(function() { 
	var lettre = $(this).data("letter");
	console.log(lettre);
	function getHeroes(lettre) {
		

		$.ajax ({    url : "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + lettre + "&limit=100&ts=10&apikey=1c5ca8dd607ef0055a74457e007a9bdb&hash=b5e59d3db4400c5d47a0e41d6fe41c61",
			success : function(data) {
				console.log(data);    
				$("#name").html("");
				var tab = data.data.results;
				for(var i = 0; i < tab.length; i++) {
					var tab1 = tab[i].name;
				// définir html
				
				$("#name").append("<tr><td>" + tab[i].id  + "</td>\
					<td><img src='"+tab[i].thumbnail.path+"."+tab[i].thumbnail.extension+ "'/></td>\
					<td>" + tab1  + "</td>\
					<td>" + tab[i].description  + "</td>\
					<td>" + tab[i].comics.available  + "</td>\
					<td>" + tab[i].stories.available  + "</td>\
					<td>" + tab[i].series.available  + "</td>\
					</tr>");
				console.log(tab);
			}

		}
   // fin fonction
});

	}

	
	getHeroes(lettre);
});

 // function Lettre(letter) { //  Lettre();
//si lettre = a
////   },
//   error : function(data) {
//     console.log("error");
//   }// } // fin fonction// });