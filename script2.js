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
function addToast(index) {

    var toast = document.createElement('div');
    toast.className = 'toast';


    var closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '&times;'; // Use '×' for a close symbol
    closeButton.onclick = function() {
      document.body.removeChild(toast);
      list.slice(index, 1);
      save_to_server(list);
    };

    toast.innerText = "<p>" + list[index] + "</p>";

    toast.appendChild(closeButton);

    var toasts = document.querySelector(".toasts");
    toasts.appendChild(toast);
}
let list = [];
document.addEventListener("DOMContentLoaded", async function () {
    await load();
    for (var i = 0; i < list.length; i++){
        addToast(i);
    }
});