async function load(){
    let response = await fetch("read_from_file.php");
    let list = await response.json();
    alert(list);
}
load();