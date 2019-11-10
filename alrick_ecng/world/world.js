var start = [2,2];
var facing = 0;
var move = [[-1,0],[0,1],[1,0],[0,-1]]
var start_time = 1000;
var current_x;
var current_y;
var max_x = 5;
var max_y = 5;
var all_timeouts = []


function createWorld(x,y)
{
    var text = ""
    for(var i =0; i<x;i++)
    {
        text += "<div class = 'row'>";
        for(var j =0; j < y; j++)
        {
            text += "<div id='"+i+""+j+"' class = 'cell test'></div>";
        }

        text += "</div>";

    }

    document.getElementById("block_world").innerHTML = text;

}
function validate_move(x,y)
{
    if(x > max_x || y > max_y || x< 0 || y<0)
    {
        init();
    }
}
function colour( x,y,c,i)
{
    //var x = pos[0];
    //var y = pos[1];
    //console.log(y);
    if(i == 0)
    {
        console.log('----i is 0-----')        
        console.log(facing);
        console.log(current_y);
        current_x += move[facing][0];
        current_y += move[facing][1];
        
    }
    
    
    var id = x+""+y;
    if( c == "red")
    {
        x = current_x;
        y = current_y;
        id = x+""+y;
        console.log('----c is red-----')
        console.log(i);
        console.log(facing);
        console.log(id);
    }
    //console.log(id);
    //console.log(c);
    document.getElementById(id).style.background = c;
    document.getElementById(id).innerHTML = "o^o";
    var deg = facing * 90;
    document.getElementById(id).style.transform = "rotate("+deg+"deg)";
    
}

function clear(length,width)
{
    for(var i=0; i< length; i++)
    {
        for(var j=0; j < width; j++)
        {
            colour(i,j, "white",1);
            var id = i+""+j;
            document.getElementById(id).innerHTML = "";
        }

    }

}

function move_player()
{
    //current_x += move[facing][0];
    //current_y += move[facing][1];
    
    start_time += 1000;
    console.log("------moving------");
    console.log(start_time);
    console.log(current_x);
    console.log(current_y); 

    validate_move(current_x,current_y);

    var t = setTimeout(clear, start_time - 100,max_x,max_y);
    var t2 = setTimeout(colour, start_time, current_x,current_y , "red",0);
    all_timeouts.push(t);
    all_timeouts.push(t2);
    
}
function turn_player(dir)
{
    start_time += 1000;
    if( dir == "left")
    {
        //turn_left();
        setTimeout(turn_left,start_time-50);
    }
    if( dir == "right")
    {
        //turn_right();
        setTimeout(turn_right,start_time-50);
    }
    var t = setTimeout(clear, start_time - 100,max_x,max_y);
    var t2 = setTimeout(colour, start_time, current_x,current_y , "red",1);
    all_timeouts.push(t);
    all_timeouts.push(t2);
}
function turn_left()
{
    facing = (facing + 4 - 1)%4;
    var deg = facing * 90;
    var id = current_x+""+current_y;
    document.getElementById(id).style.transform = "rotate("+deg+"deg)";

}

function turn_right()
{
    facing = (facing + 4 + 1)%4;
    var deg = facing * 90;
    var id = current_x+""+current_y;
    document.getElementById(id).style.transform = "rotate("+deg+"deg)";

}

function init()
{
    facing = 3;
    createWorld(max_x,max_y)
    current_x =  start[0];
    current_y =  start[1];
    start_time = 1000;
    colour(current_x,current_y , "red",1);
    //setTimeout(colour, start_time, current_x,current_y , "red");

    for( var i =0 ; i< all_timeouts.length; i++)
    {
        clearTimeout(all_timeouts[i]);
    }

}

init();


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

