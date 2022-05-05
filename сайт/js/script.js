window.onload = function()
{
    var aw = new Array;
    aw = document.getElementsByTagName("area");
    var i =  0;
    while(aw[i])
    {
        aw[i].onmouseover = function(){document.getElementById('onover_r').className = 'r' + this.alt;}
        aw[i].onmouseout = function(){document.getElementById('onover_r').className = 'r0';}
        aw[i].onclick = function(){document.getElementById('activ_r').className = 'r' + this.alt;}
        i+=1;
    }
}