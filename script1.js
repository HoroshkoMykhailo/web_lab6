function ifenter(e){
    if(e.keyCode === 13){
        e.preventDefault();
    }
}
let list = [];
document.addEventListener("DOMContentLoaded", async function () {
    await load();
    document.getElementById("add_object").onclick = add;
});
async function load(){
    let response = await fetch("read_from_file.php");
    list = await response.json();
}
document.body.onkeydown = ifenter;
function add(){
    var textarea = document.getElementById("input_content")
    var text = textarea.value;
    list.push(text);
    textarea.value = '';
    save_to_server(list);
    alert(list);
}
async function save_to_server(list){
    let to_save = JSON.stringify(list);
    fetch("save_to_file.php", {
        method: "POST",
        body: to_save
    })
}