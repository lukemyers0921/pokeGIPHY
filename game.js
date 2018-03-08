var buttonArray = ["bulbasaur","ivysaur","venasaur","squirtle","warturtle","blastoise","charmander","charmeleon","charizard","pikachu","eevee","snorlax","mewtwo","mew"]
for(i = 0;i < buttonArray.length; i++){
  var pokemon = buttonArray[i];
  var button = `<button class = "pokeButton">${pokemon}</button>`
  $("#buttonDiv").append(button);
}
$("#container-fluid").on("click", "#findGif", function() {
  event.preventDefault();
  var newButton = $("#gifInput").val()
  var button = `<button class = "pokeButton">${newButton}</button>`
  $("#buttonDiv").append(button);
});
$("#container-fluid ").on("click", ".pokeButton",function() {
$("#gifDiv").empty();
var pokemon = $(this).text();
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        pokemon + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
            var results = response.data;
            for(i = 0; i <results.length; i++){
            var rating = results[i].rating;
            var imgSrc = results[i].images.fixed_height.url; 
            var gifDiv = `<div class = item><h3>Rating: ${rating}</h3><img src = ${imgSrc}></div>`;
            $("#gifDiv").append(gifDiv);
            }
        });
    });