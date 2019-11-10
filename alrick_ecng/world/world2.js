var moves = [[-1,0],[0,1],[1,0],[0,-1]];
var step = 100;
var start_time = 0;
var all_timeouts = [];
var alive = true;
var holes = [];

var goal_x;
var goal_y;
var currentx;
var currenty;
var deg;
var facing;

// LEVEL SETTINGS
var max_x = 3;
var max_y = 3;
var land = ["XXO",
             "XXO",
             "XXX"];





function load_tools(toolkit)
{
    
    toollist = [
    '<block type="move_person"></block>',
    '<block type="turn_person"></block>',
    '<block type="logic_compare"></block>',
    '<block type="controls_repeat_ext"></block>',
    '<block type="math_number"><field name="NUM">123</field></block>',
    '<block type="math_arithmetic"></block>',
    '<block type="text"></block>',
    '<block type="text_print"></block>'
    ];

    var tooltext = '<xml id="toolbox" style="display: none">';

    for(var i = 0;i<toolkit.length;i++)
    {
        tooltext += toollist[toolkit[i]];
    }

    tooltext += '</xml>';

    console.log(tooltext);

    demoWorkspace.updateToolbox(tooltext);
}



function createWorld(x,y)
{
    var text = ""
    for(var i =0; i<x;i++)
    {
        var cell = lands[level][i].split("");
        //console.log(cell);

        text += "<div class = 'rowz'>";
        for(var j =0; j < y; j++)
        {
            var hole = "";
            if(cell[j] == 'O')
            {
                hole = "hole";
                holes.push([i,j]);
            }
            text += "<div id='"+i+""+j+"' class = 'cell x"+i+" y"+j+" "+hole+" '></div>";
        }

        text += "</div>";

        //console.log(holes);

    }

    var x_pixel = currentx * step;
    var y_pixel = currenty * step;
    console.log("X Pixel");
    console.log(step);

    text += "<div id='player' class='player cellGrid' > <img src='http://localhost/blockly/rover/alrick_ecng/world/drone.png' ></div>";
    text += "<div id='rock' class='rock cellGrid' > <img src='http://localhost/blockly/rover/alrick_ecng/world/rock.png' ></div>";

    document.getElementById("worldDiv").innerHTML = text;

    document.getElementById("player").style.top = x_pixel+"px";
    document.getElementById("player").style.left = y_pixel+"px";
    document.getElementById("player").style.transform = "rotate("+deg+"deg)";

    document.getElementById("rock").style.top = (goal_x * step)+"px";
    document.getElementById("rock").style.left = (goal_y * step)+"px";

}

function validate_step()
{
    if(currenty < 0 || currentx < 0 || currentx >= max_x || currenty >= max_y)
    {
        return true;
    }
    else
    {
        for(var i = 0; i < holes.length; i++)
        {
            if (currentx == holes[i][0] && currenty == holes[i][1])
            {
                return true;
            }
        }
        return false;
    }
}

function move_player()
{
    if(alive)
    {
        var t = setTimeout(forward, start_time,start_time);
        start_time += 1000;
        
        all_timeouts.push(t);
    }
    console.log("MOVE Times");
    console.log(all_timeouts);
}

function forward(call_time)
{
    x = moves[facing][0];
    y = moves[facing][1];
    currenty += y;
    currentx += x;

    var x_pixel = currentx * step;
    var y_pixel = currenty * step;
    document.getElementById("player").style.top = x_pixel+"px";
    document.getElementById("player").style.left = y_pixel+"px";

    console.log("MOVE");
    console.log("act x:"+currentx);
    console.log("act y"+currenty);

    if( validate_step())
    {
        console.log("Kill Time : "+(start_time-300));
        console.log("Kill Time : "+(call_time-300));
        setTimeout(kill, 300);
        setTimeout(init, 1300);
    }
}

function turn_player(dir)
{
    if(alive)
    {
        var way = 0;
        if( dir == "left")
        {
            way = -1;
        }
        if( dir == "right")
        {
            way = 1;
        }
        var t = setTimeout(turn,start_time,way);
        start_time += 1000;
        all_timeouts.push(t);
    }
    console.log("MOVE Times");
    console.log(all_timeouts);
}

function turn(way)
{
    //facing = (facing + 4 + way)%4;
    deg += way * 90 ;
    facing = (facing + 4 + way)%4;
    document.getElementById("player").style.transform = "rotate("+deg+"deg)";
}

function init()
{
    alive = true;
    currentx = lvl_settings[level][2];
    currenty = lvl_settings[level][1];
    goal_x = lvl_settings[level][4];
    goal_y = lvl_settings[level][3];
    step = 90;
    start_time = 0;
    facing = lvl_settings[level][0];
    deg = facing * 90;
    holes = [];
    

    //blockly_init();

    load_tools(lvl_tools[level]);
    
    createWorld(max_x,max_y);

    document.getElementById('lvlnum').innerHTML = level+1;
    

}
function the_end()
{
    if(alive)
    {
        if (goal_x == currentx && goal_y == currenty)
        {
            console.log("Goal REACHED");
            level += 1;
            winner();
            //reset();
            //init();
        }
        else
        {
            console.log("Goal MISSED");
            loser();
            init();
        }
    }    
    console.log("Goal x:"+goal_x);
    console.log("Goal y:"+goal_y);
    console.log("act x:"+currentx);
    console.log("act y"+currenty);
}
function winner()
{
    document.getElementById('dlose').classList.add('d-none');
    document.getElementById('dwin').classList.remove('d-none');
    document.getElementById('nllink').classList.remove('disabled');
}
function loser()
{
    document.getElementById('dwin').classList.add('d-none');
    document.getElementById('dlose').classList.remove('d-none');
}
function end_check()
{
    console.log("End Time : "+start_time);
    var t = setTimeout(the_end,start_time);
    //start_time += 1000;
}

function kill()
{
    console.log("DEAD!!!!;");
    document.getElementById("player").classList.add("dead");
    alive = false;
    reset_times();
    all_timeouts = [];
}

function unkill()
{
    document.getElementById("player").classList.remove("dead");
}
function reset_times()
{
    for( var i =0 ; i< all_timeouts.length; i++)
    {
        clearTimeout(all_timeouts[i]);
    }
}
init();


