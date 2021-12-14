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
            strikeThrough(0,2,currentMove);
        } else if (trackMoves[2] === currentMove && trackMoves[4] === currentMove && trackMoves[6] === currentMove) {
            game = true;
            strikeThrough(2,6,currentMove);
        } else if (trackMoves[0] === currentMove && trackMoves[3] === currentMove && trackMoves[6] === currentMove) {
            game = true;
            strikeThrough(0,6,currentMove);
        } else if (trackMoves[0] === currentMove && trackMoves[4] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            strikeThrough(0,8,currentMove);
        } else if (trackMoves[1] === currentMove && trackMoves[4] === currentMove && trackMoves[7] === currentMove) {
            game = true;
            strikeThrough(1,7,currentMove);
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            strikeThrough(2,8,currentMove);
        } else if (trackMoves[2] === currentMove && trackMoves[5] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            strikeThrough(2,8);
        } else if (trackMoves[3] === currentMove && trackMoves[4] === currentMove && trackMoves[5] === currentMove) {
            game = true;
            strikeThrough(3,5,currentMove);
        } else if (trackMoves[6] === currentMove && trackMoves[7] === currentMove && trackMoves[8] === currentMove) {
            game = true;
            strikeThrough(6,8,currentMove);
        } else if(!(trackMoves.includes(""))){
           game = true;
          reset();
          alert("It is a Draw!");
          console.log(trackMoves);
        } else {
            game = false;
        }
    }

    function strikeThrough(a,b,winner){
        $("canvas").css("z-index",100)
        var canvas = $("#paper")[0];
        var c = canvas.getContext("2d");
        var amount = 0;
        if(a==0 && b==2){
            var startX = 0;
            var startY = 20;
            var endX = 200;
            var endY = 20;
        }else if(a==2 && b==6){
            var startX = 200;
            var startY = 0;
            var endX = 0;
            var endY = 200;
        }else if(a==0 && b==6){
            var startX = 20;
            var startY = 0;
            var endX = 20;
            var endY = 200;
        }else if(a==0 && b==8){
            var startX = 0;
            var startY = 0;
            var endX = 200;
            var endY = 200;
        }else if(a==1 && b==7){
            var startX = 100;
            var startY = 0;
            var endX = 100;
            var endY = 200;
        }else if(a==2 && b==8){
            var startX = 180;
            var startY = 0;
            var endX = 180;
            var endY = 200;
        }else if(a==3 && b==5){
            var startX = 0;
            var startY = 100;
            var endX = 200;
            var endY = 100;
        }else if(a==6 && b==8){
            var startX = 0;
            var startY = 180;
            var endX = 200;
            var endY = 180;
        }
        setInterval(function() {
            amount += 0.05; 
            if (amount > 1) amount = 1;
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.strokeStyle = "white";
            c.moveTo(startX, startY);
            c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);
            c.stroke();
        }, 30);
        winMessage(winner);
    }

    function winMessage(win){
        $("#message").text(win+" wins");
        $("#message").addClass('animated');
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