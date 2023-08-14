
d = new Date();
hour = d.getHours();

if(hour < 6){
    document.getElementById('saudacao').innerText = "boa noite!";
}else if(hour < 12){
    document.getElementById('saudacao').innerText = "bom dia!";
}else if(hour < 18){
    document.getElementById('saudacao').innerText = "boa tarde!";
}else{
    document.getElementById('saudacao').innerText = "boa noite!";
};
