function ShowSelectedData(){
    var show = document.database.play.value;
    var year = show[0]+show[1]+show[2]+show[3]
    if(show=="00"){
      alert("閲覧したい過去公演を選択してください")
    }else{
    location.href="plays/"+year+"/"+show+".html";
    }
    }
function stop(){
  var audio;
  audio = document.querySelector("audio");
  audio.pause();
  audio.currentTime = 0;
}