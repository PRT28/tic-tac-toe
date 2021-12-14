$(document).ready(function(){
    var values=["","","","","","","","",""];
    var cpu="";
    var player="";
    var count=0;
    var game=false;

    var start=prompt("Choose your side, X or O").toUpperCase();
    switch(start){
        case "X":
            cpu="O";
            player="X";
            $("#message").html("Player "+player+" Start:-");
            break;
        case "O":
            cpu="X";
            player="O";
            $("#message").html("Player "+player+" Start:-");
            break;
        case null:
            alert("Sorry Type X or O");
            window.location.reload(true);
            break;
        default:
            alert("Sorry Type X or O");
            window.location.reload(true);
            break;
    }
    function cpuMoves() {
        var chosen = false;
        while (chosen === false && count !== 5) {
            var cpuSelect = Math.floor(Math.random()*9);
            var move = $("#" + cpuSelect).text();
            if (move === "") {
                $("#" + cpuSelect).text(cpu);
                chosen = true;
                values[cpuSelect] = cpu;
            }
        }
    }
    
    function playerMoves (player, id){
        var select=$("#"+id).text();
        if(select===""){
            count++;
            values[id]=player;
            $("#"+id).text(player);
            win(values,player);
            if(game===false){
                cpuMoves();
                $("#message").html("It's "+player+"'s turn");
                win(values,cpu);
            }
        }
    }

    function win(trackMoves, currentMove) {
        if (trackMoves[0] === currentMove && trackMoves[1] === currentMove && trackMoves[2] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            reset();
            alert("Player " + currentMove + " wins!");
        } else if(!(trackMoves.includes(""))){
           game = true;
          reset();
          alert("It is a Draw!");
          console.log(trackMoves);
        } else {
            game = false;
        }
    }

    $(".box").click(function(){
        var select=$(this).attr("id");
        playerMoves(player,select);
    });
    
    function reset(){
        values=["","","","","","","","",""];
        count=0;
        $(".box").text("")
        game=true;
    }

    $("#reload").click(function(){
        reset();
    });
});