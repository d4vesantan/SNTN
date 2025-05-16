var menu-items = document.getElementById("menu-items");
menu-items.style.maxHeight = "0px";

function menetoggle=(){
    if(menu-items.style.maxHeight == "0px")
    {
        menu-items.style.maxHeight = "200px";
    }
    else
    {
        menu-items.style.maxHeight = "0px";
    }
}