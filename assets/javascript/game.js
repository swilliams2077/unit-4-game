   
    var player1 = {
        //assigned when selected first.
        type:" ",
        health:"100",
        Attack1:" ",
        Attack2:" ",
        special:" ",
    };

     var player2 = {
        //assigned when selected first.
        type:" ",
        health:"100 ",
        Attack1:" ",
        Attack2:" ",
        special:" ",
     };

     var player3 = {
        //assigned when selected first.
        type:" ",
        health:"100",
        Attack1:" ",
        Attack2:" ",
        special:" ",
     };

    var player4 = {
        //assigned when selected first.
        type:"100",
        health:" ",
        Attack1:" ",
        Attack2:" ",
        special:" ",
    };

    //I would suggest putting these on an object instead of as separate variables


    var players = {
        player1: {
            //stats
        },
        player2: {
            //stats
        }
    }

    players["player1"];

    players["whateveridhere"]

    players[clickedPlayerId];

    //when character is selected, image is sent right above stats. On-click takes (selected image) <input> line and moves it to fighterimage id. Second click decides
    //what enemy you face off against. moves that enemy to the other side. prompt to begin fight begins.
// $("#playerimg1").click(function (){
//     $("#playerimg1").css("height:200px","width:200px");
//     $("#playerimg1").insertAfter($("#fighterimage"));
//     ; 
//     console.log("This works");
// });

// $("#playerimg2").click(function (){
//     $("#playerimg2").css("height:200px","width:200px");
//     $("#playerimg2").insertAfter($("#fighterimage"));
//     ; 
//     console.log("This works");
// });


// $("#playerimg3").click(function (){
//     $("#playerimg3").css("height:200px","width:200px");
//     $("#playerimg3").insertAfter($("#fighterimage"));
//     ; 
//     console.log("This works");
// });

// $("#playerimg4").click(function (){
//     $("#playerimg4").css("height:200px","width:200px");
//     $("#playerimg4").insertAfter($("#fighterimage"));
//     ; 
//     console.log("This works");
// });
var goodGuy;
var badGuy;

$(".player").click(function() {
    //var clickedThing = $(this);
    var currentPlayerId = $(this).attr("id");
    var clickedPlayer = $("#" + currentPlayerId); // maybe look up the player object in javascript nad save it it as good guy or bad guy instead of saving the HTML
    var goodGuyArea = $("#fighterimage");
    var badGuyArea = $("#fighterimage");

    if (!goodGuy) {
        goodGuy = clickedPlayer;
        clickedPlayer.appendTo(goodGuyArea);
    } else if (!badGuy) {
        badGuy = clickedPlayer;
        clickedPlayer.appendTo(badGuyArea);

        //how can I take some attribute from the 'this' to ultimately match it to one of my player objects, now I have their hp and their attacks and I can manage them and update stats

    }
    // $("#playerimg4").css("height:200px","width:200px");
    // $("#playerimg4").insertAfter($("#fighterimage"));

});

$(".attack-button").click(function() {
    if (goodGuy && badGuy) {
        console.log('lets fight');
        // do fight stuff 
    } else {
        console.log('please pick your character');
    }
})






