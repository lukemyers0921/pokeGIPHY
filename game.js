var buttonArray = ["bulbasaur","ivysaur","venasaur","squirtle","warturtle","blastoise","charmander","charmeleon","charizard","pikachu","eevee","snorlax","mewtwo","mew"]
for(i = 0;i < buttonArray.length; i++){
  var pokemon = buttonArray[i];
  var button = `<button class = " btn btn-danger pokeButton">${pokemon}</button>`
  $("#buttonDiv").append(button);
}
$("#container-fluid").on("click", "#findGif", function() {
  event.preventDefault();
  var newButton = $("#gifInput").val()
  var button = `<button class = "btn btn-danger pokeButton">${newButton}</button>`
  $("#buttonDiv").append(button);
});
$("#container-fluid ").on("click", ".pokeButton",function() {
$("#gifDiv").empty();
var pokemon = $(this).text();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pokemon + "&api_key=dc6zaTOxFJmzC&limit=10" ;
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
            console.log(response);
            var results = response.data;
            for(i = 0; i <results.length; i++){
            var rating = results[i].rating;
             var still = results[i].images.fixed_height_still.url;
            var animate = results[i].images.fixed_height.url;
            var gifDiv = `<div class = item><h3 class = "rate">Rating: ${rating}</h3> <img class = "gif" data-animate =${animate} data-still = ${still} =  src = ${still} data-state = "still"></div>`;
            $("#gifDiv").append(gifDiv);
            }
            
        });
    });
    
    $("#container-fluid").on("click", ".gif", function() {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    