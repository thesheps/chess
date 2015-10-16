$(function() {
	$("<div>").load("games.txt", function(data){
		var games = data.split('\n');
		
		for(var i = 0;i < games.length-1;i++){
			var fields = games[i].split(',');
			
			$("#game-list")
				.append("<li game-file='" + fields[1] + "' game-title='" + fields[0] + "' class='list-group-item game'><a href='#'>" + fields[0] + "</a></li>");
		}
	});

	$(document).on("click", ".game", function(){
		game = createGame($(this).attr("game-file"), $(this).attr("game-title"));
	});
});

function createGame(game, gameTitle){
	$("#game-container").empty();
	$("#game-moves").empty();
	$("#gameTitle").html(gameTitle);

    return new PgnViewer(
    {
        boardName: "game",
        pgnFile: game,
        pieceSet: "leipzig",
        pieceSize: 46
    });
}