async function load(){
    let response = await fetch("read_from_file.php");
    list = await response.json();
}
async function save_to_server(list){
    let to_save = JSON.stringify(list);
    fetch("save_to_file.php", {
        method: "POST",
        body: to_save
    })
}
async function update(){
    let toasts = document.querySelector(".toasts");
    list = [];
    await load();
    toasts.innerHTML = '';
    for (var i = 0; i < list.length; i++){
        addToast(i);
    }
}
function addToast(index) {

    var toast = document.createElement('div');
    toast.className = 'toast';

    var toasts = document.querySelector(".toasts");

    var closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = function() {
      toasts.removeChild(toast);
      list.splice(index, 1);
      save_to_server(list);
    };

    toast.innerHTML = "<p>" + list[index] + "</p>";

    toast.appendChild(closeButton);
    
    toasts.appendChild(toast);
}
let list = [];
document.addEventListener("DOMContentLoaded", update);
setInterval(update, 5000);