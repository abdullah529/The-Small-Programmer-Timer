if(localStorage.getItem("Color") != null){
    setColor();
}else{

}
function updateDate(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerText = parseInt(date.getHours()-12)+":"+date.getMinutes()+":"+date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerText = date.getDay()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
onload = ()=>{
    updateDate();
};
setInterval(updateDate,100);
function getColor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("Color",getColor);
    document.body.style.background = localStorage.getItem("Color");
    document.getElementById("time").style.background = localStorage.getItem("Color");
}
function setColor(){
    document.getElementById("setColor").value = localStorage.getItem("Color");
    document.body.style.background = localStorage.getItem("Color");
    document.getElementById("time").style.background = localStorage.getItem("Color");
}