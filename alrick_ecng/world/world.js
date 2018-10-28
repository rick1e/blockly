var start = [1,1];
var facing = 0;
var move = [[0,1],[1,0],[0,-1],[-1,0]]
var start_time = 1000;
var current_x;
var current_y;
var max_x = 3;
var max_y = 3;


function createWorld(x,y)
{
    var text = ""
    for(var i =0; i<x;i++)
    {
        text += "<div class = 'row'>";
        for(var j =0; j < y; j++)
        {
            text += "<div id='"+i+""+j+"' class = 'cell'></div>";
        }

        text += "</div>";

    }

    document.getElementById("block_world").innerHTML += text;

}
function validate_move(x,y)
{
    if(x > max_x || y > max_y || x< 0 || y<0)
    {
        init();
    }
}
function colour( x,y,c)
{
    //var x = pos[0];
    //var y = pos[1];
    var id = x+""+y;
    console.log(id);
    console.log(c);
    document.getElementById(id).style.background = c;
}

function clear(length,width)
{
    for(var i=0; i< length; i++)
    {
        for(var j=0; j < width; j++)
        {
            colour(i,j, "white");
        }

    }

}

function move_player()
{
    current_x += move[facing][0];
    current_y += move[facing][1];
    
    start_time += 1000;

    console.log(start_time);
    console.log(current_x);
    console.log(current_y);

    validate_move(current_x,current_y);

    setTimeout(clear, start_time - 100,3,3);
    setTimeout(colour, start_time, current_x,current_y , "red");

}

function turn_left()
{
    facing = (facing + 4 + 1)%4;
}

function turn_right()
{
    facing = (facing + 4 - 1)%4;
}

function init()
{
    createWorld(3,3)
    current_x =  start[0];
    current_y =  start[1];
    start_time = 1000;
    setTimeout(colour, start_time, current_x,current_y , "red");

}

//init();

facing = 3;
/*
move_player();

turn_right();
move_player();

turn_right();
move_player();

turn_right();
move_player();

facing = 1;
move_player();

turn_left();
move_player();

turn_left();
move_player();

turn_left();
move_player();

facing = 2;

move_player();

turn_right();
move_player();

turn_right();
move_player();

turn_right();
move_player();

facing = 0;
move_player();

turn_left();
move_player();

turn_left();
move_player();

turn_left();
move_player();
*/

