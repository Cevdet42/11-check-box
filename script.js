document.getElementById("tr").addEventListener("click", trClicked)
document.getElementById("kibris").addEventListener("click", kibrisClicked)

function trClicked(){

    if(document.getElementById("tr").checked){
    document.getElementById("istanbul").checked = true;
    document.getElementById("ankara").checked = true;
    document.getElementById("izmir").checked = true;
    }

    else{
    document.getElementById("istanbul").checked = false;
    document.getElementById("ankara").checked = false;
    document.getElementById("izmir").checked = false;
    }
    }

document.getElementById("istanbul").addEventListener("click", trCityClicked);
document.getElementById("ankara").addEventListener("click", trCityClicked);
document.getElementById("izmir").addEventListener("click", trCityClicked);

function trCityClicked(){
    if(document.getElementById("istanbul").checked &&
       document.getElementById("ankara").checked &&
       document.getElementById("izmir").checked)
       document.getElementById("tr").checked = true;

    else
    document.getElementById("tr").checked = false
}

function kibrisClicked(){
    if(document.getElementById("kibris").checked){
        document.getElementById("magosa").checked = true;
        document.getElementById("lefke").checked = true;
        }
    
        else{
        document.getElementById("magosa").checked = false;
        document.getElementById("lefke").checked = false;
        }
        }

document.getElementById("magosa").addEventListener("click", kibrisCityClicked);
document.getElementById("lefke").addEventListener("click", kibrisCityClicked);

function kibrisCityClicked(){
    if(document.getElementById("magosa").checked &&
    document.getElementById("lefke").checked)
    document.getElementById("kibris").checked = true;

    else
    document.getElementById("kibris").checked = false
}