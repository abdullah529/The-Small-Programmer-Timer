if(localStorage.getItem("Color") != null){
    setColor();
}else{

}
function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    var Hours = date.getHours();
    if(Hours<13){

    }else{
        Hours -= 12;
    }
    setTime.innerText = Hours+":"+date.getMinutes()+":"+date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerText = date.getDay()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
    playMusic();
}
function playMusic(){
    var music = document.getElementById("music");
    music.pause();
    music.load();
    music.play();
}
onload = ()=>{
    updateDate();
    playMusic();
};
setInterval(updateDate,1000);
function getColor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("Color",getColor);
    document.body.style.background = localStorage.getItem("Color");
}
function setColor(){
    document.getElementById("setColor").value = localStorage.getItem("Color");
    document.body.style.background = localStorage.getItem("Color");
}