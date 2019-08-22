// window.onload = make_qwerhacks_containers();
// //window.onresize = make_qwerhacks_containers();

// function make_qwerhacks_containers() {
//     var qwer_windows = document.getElementsByClassName("qwerhacks-container");
//     var i;
//     for (i = 0; i < qwer_windows.length; i++) {
//         var qwer_children = qwer_windows[i].childNodes;

//         var width = qwer_windows[i].offsetWidth.toString() + "px";
//         var top = qwer_windows[i].offsetTop.toString() + "px";
//         var left = qwer_windows[i].offsetLeft.toString() + "px";
//         console.log(width);
//         qwer_bar = curved_top_rectangle(width);

//         qwer_windows[i].appendChild(qwer_bar,top,left);
//         qwer_windows[i].style.border = "3px solid #000";
//         qwer_windows[i].style.borderRadius = "25px";
//     }
// }

// function curved_top_rectangle(width,top,left) {
//     el = document.createElement('div');
//     el.style.position = "absolute";
//     el.style.top = "0px";
//     el.style.left = "0px";
//     el.style.height = "28px";
//     el.style.width = "100%";

//     el.style.borderTopRightRadius = "25px";
//     el.style.borderTopLeftRadius = "25px";
//     el.style.backgroundColor = "#000";
//     return el;
// }

// function get_qwer_padding_container() {
//     el = document.createElement("div");
//     el.classList.add("qwerhacks-content");
//     el.style.paddingTop = "40px";
//     el.style.paddingLeft = "20px";
//     el.style.paddingRight = "20px";
//     el.style.paddingBottom = "20px";
//     return el;
// }