function limit_height(target_obj, lim_obj) {
    console.log("original height: " + target_obj.offsetHeight.toString()+"px")
    console.log("limiting height: " + lim_obj.offsetHeight.toString()+"px")

    target_obj.style.height = lim_obj.offsetHeight.toString()+"px";
    target_obj.style.maxHeight = lim_obj.offsetHeight.toString()+"px"; //lim_obj.style.offsetHeight;
}

function onload_func() {
    when_where_content = document.getElementById("when-where-content")
    announcements_content = document.getElementById("Announcements-content")
    limit_height(announcements_content, when_where_content)
}

window.onload = onload_func;
window.onresize = onload_func;