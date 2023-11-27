function ifenter(e){
    if(e.keyCode === 13){
        e.preventDefault();
    }
}
document.body.onkeydown = ifenter;
let list = [];
function add(){
    var textarea = document.getElementById("input_content")
    var text = textarea.value;
    list.push(text);
    textarea.value = '';
    save_to_server(list);
}
async function save_to_server(list){
    let to_save = JSON.stringify(list);
    fetch("save_to_file.php", {
        method: "POST",
        body: to_save
    })
}
document.getElementById("add_object").onclick = add;