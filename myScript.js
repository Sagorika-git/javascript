function change_color(){
    var para = document.getElementById('para');
    para.style.color = "red";
}

function create_element(){
    var ele = document.createElement("div");
    ele.style.height = "100px";
    ele.style.width = "100px";
    ele.style.backgroundColor = "red";
    document.body.appendChild(ele);
}