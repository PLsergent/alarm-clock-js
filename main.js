window.addEventListener("load", function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    //some change to have the format 00:00:00
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    var time = h + " : " + m + " : " + s;

    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
  return timesec;
});

function addLine() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  var list = document.querySelector("#list-alarm");
  list.appendChild(clon);
}

window.addEventListener("change", function checkChange() {
    var alarm_list = document.querySelector('.list-alarm');
    //for each alarm
    for(let alarm of alarm_list.children) {
        //button to delete an alarm clock
        var button = alarm.querySelector('.btn');
        button.onclick = function() {
          alarm.remove()
        }

        var checkbox = alarm.querySelector('input[type=checkbox]');
        if (checkbox.checked) {
          //change of background if selected
          alarm.style.background = 'LightBlue';

          //current time
          let date = new Date();
          let h = date.getHours();
          let m = date.getMinutes();
          let s = date.getSeconds();
          var timesec = h + " : " + m + " : " + s;

          //time of the alarm clock
          let target_hour = alarm.querySelector('#hour').value;
          let target_min = alarm.querySelector('#minute').value;
          let target_second = 0;
          var time = target_hour + " : " + target_min + " : " + target_second;

          if(timesec === time){
            //opening of the youtube link or any link put
            window.open(alarm.querySelector('#linkVie').value.toString(),"skuu");
          }}else{alarm.style.background = 'initial';}}
  setTimeout(checkChange, 1000);
});
