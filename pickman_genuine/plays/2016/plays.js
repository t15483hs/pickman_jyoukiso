function ShowSelectedData(){
    var show = document.database.play.value;
    location.href="plays/"+show+".html";
    }
function stop(){
  var audio;
  audio = document.querySelector("audio");
  audio.pause();
  audio.currentTime = 0;
}