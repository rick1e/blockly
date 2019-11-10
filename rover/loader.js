function loadTutorials()
{
    var text = '';
    var tutCount = 10;
    var maxRow = 4;

    var rowCount = tutCount / maxRow;

    text = '<h1 class="my-4">Tutorial</h1>';

    for(var j = 0 ; j< rowCount;j++)
    {
        text += '<div class="row">';

        var cur = maxRow;
        if (tutCount-maxRow*j < cur)
        {
            cur = tutCount-maxRow*j;
        }

        for(var i = 0 ; i< cur;i=i+1)
        {
            var count = i+(maxRow*j)+1;
            var locked = 'disabled="disabled"';
            if(done.includes(i+1))
            {
                locked = "";
            }
            text += '<div class="col-3"><a href="stage.php?lvl='+(count-1)+'" '+locked+' ><div class="card h-100 "><div class="card-body"><h4 class="card-title">Level '+count+'</h4></div></div></a></div>';
        }

        text += '</div>';
    }
    
    document.getElementById('level_grid').innerHTML = text;
}

loadTutorials();