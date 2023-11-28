function slider(){
    let radios = ["r1", "r2", "r3", "r4"];
    let radio = [];
    for (let i = 0; i < radios.length; i++) {
        if (radios[i] == "r4"){
            document.getElementById(radios[0]).checked = true;
        }
        else if(document.getElementById(radios[i]).checked){
            radio = radios[i+1];
            document.getElementById(radio).checked = true;
            break;
        }
    }
}
setInterval(slider, 8000);