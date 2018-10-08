var game = {
    wins: 0,
    losses: 0,
    target: 0,
    total: 0,
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0
};

game.printScore = function(){
$('#wins').html("<h1>WINS<br>" + game.wins + "</h1>");
$('#losses').html("<h1>LOSSES<br>" + game.losses + "</h1>");
$('#target').html("<h1>TARGET<br>" + game.target + "</h1>");
$('#score').html("<h1>SCORE<br>" + game.total + "</h1>");

};

game.nextRound = function (){
    game.total = 0;
    this.target = Math.floor((Math.random() * 101) + 19);
    $('#cr1').val(Math.floor((Math.random() * 12) + 1));
    $('#cr2').val(Math.floor((Math.random() * 12) + 1));
    $('#cr3').val(Math.floor((Math.random() * 12) + 1));
    $('#cr4').val(Math.floor((Math.random() * 12) + 1));
    console.log("cr1 is", $('#cr1').val());
    console.log("cr2 is", $('#cr2').val());
    console.log("cr3 is", $('#cr3').val());
    console.log("cr4 is", $('#cr4').val());
};

game.winCheck = function (){
    if (game.total == this.target){
        this.wins++;
        game.nextRound();
    }
    else if (game.total > this.target){
        this.losses++;
        game.nextRound();
    }
};

$(".btn").on("click", function (){
    game.total = parseInt(game.total) + parseInt($(this).val());
    game.winCheck();
    game.printScore();
});

$("#stuff").on("click", function (){
    alert("Crystal Collector!\n\nYou will be given a random number(TARGET) at the start of the game.\n\nThere are crystals. By clicking on a crystal you will add a specific amount of points to your total(SCORE).\n\nYou win the game by matching your SCORE to TARGET, you lose the game if your SCORE goes above TARGET.\n\nThe value of each crystal is hidden from you until you click on it.\n\nEach time when the game starts, the game will change values of each crystal.");
});

game.nextRound();
game.printScore();