function limit_height(target_obj, lim_obj) {
    console.log("original height: " + target_obj.offsetHeight.toString()+"px")
    console.log("limiting height: " + lim_obj.offsetHeight.toString()+"px")

    target_obj.style.height = lim_obj.offsetHeight.toString()+"px";
    target_obj.style.maxHeight = lim_obj.offsetHeight.toString()+"px"; //lim_obj.style.offsetHeight;
}

function onload_func() {
    when_where_content = document.getElementById("when-where-content")
    announcements_content = document.getElementById("announcements-content")
    // logo_col = document.getElementById("logo-col")
    limit_height(announcements_content, when_where_content)
    // limit_height(logo_col, when_where_content)
}

// function do_collapse(id) {
//     document.getElementById(id).appendChild("is-collapsed")
//     element.addAttribute("disabled");

// }

// function do_uncollapse(id) {
//     document.getElementById(id).appendChild("not-collapsed")
//     element.removeAttribute("disabled");

// }

// ​document.body.appendChild(inputElement);​
// }

window.onload = onload_func;
window.onresize = onload_func;