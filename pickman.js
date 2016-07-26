function stop(){
  var audio;
  audio = document.querySelector("audio");
  audio.pause();
  audio.currentTime = 0;
}
function ShowSelectedData(){
    var show = document.database.play.value;
    document.write('<script src="pickman.js"></script>')
    if(show=="2016tana01"){
        //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/01.wav" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="01.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>人気のない惑星のお屋敷に<br>');
        document.write('女の子と二人の従者だけが<br>');
        document.write('暮らしておりました。<br>');
        document.write('ほかに誰かやってきても<br>')
        document.write('みんなお嬢様に追い出されてしまうのです。<br>あぁ<br>噂をすれば <br>')
        document.write('それでは失礼させていただきます<br>')
        document.write('お客様をお待たせするわけにはいきませんからね。</h4><br>');
        document.write('<h3>◇原案</h3><br><h4>瀧岡美咲</h4><br>');
        document.write('<h3>◇脚本</h3><br><h4>白石響</h4><br>');
        document.write('<h3>◇演出</h3><br><h4>頃末龍</h4><br>');
        document.write('<h3>◇出演</h3><br><h4>境大軌・村上航・本岡万侑・山本静香</h4></br>')
        document.write('<h3>◇スタッフ</h3>');
        document.write('<h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台美術 　加藤真央・尾林太郎・木村智矩・木村美帆・瀧岡美咲・野宮傑<br>')
        document.write('音響 　齋藤大樹・境大軌・野宮傑<br>');
        document.write('照明　 山本希<br>');
        document.write('宣伝美術 　頃末龍<br>');
        document.write('衣裳　栗原朋子<br>');
        document.write('広報　 山本希<br>');
        document.write('制作　 白石響<br></h4>' );
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br>');
        document.write('<br>');
        document.write('<br>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/_bc0GIXUUyM" frameborder="0" allowfullscreen></iframe></div>');
        document.write('&nbsp;<br/>');
        document.write('&nbsp;<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Bn1Ni-GoESY" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('</section>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/KF2HBgCQkW9bakPg7")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
    else if(show=="2016tana02"){
        //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/02.wav" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="02.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>子供の頃からの親友だったぬいぐるみを母に捨てられてしまったハルマは友達のいない高校二年生。<br>');
        document.write('母を心配させないため、日々友達を作ろうと試行錯誤するハルマの前にある日謎の男が現れてこう言った。「君の願いを叶えてあげる」<br>')
        document.write('そこから始まるハルマの短い夏の物語。</h4><br>');
        document.write('<h3>◇脚本・演出</h3><br><h4>赤間洸介</h4><br>');
        document.write('<h3>◇出演</h3><br><h4>岩城智子・木村智矩・木村美帆・熊谷啓孝<br>');
        document.write('斎藤悠人・田村重人・星野礼馬・吉井優香</h4><br>');
        document.write('<h3>◇スタッフ</h3>');
        document.write('<h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台美術 　加藤真央・尾林太郎・木村智矩・木村美帆・瀧岡美咲・野宮傑<br>')
        document.write('音響 　齋藤大樹・境大軌・野宮傑<br>');
        document.write('照明　 山本希<br>');
        document.write('宣伝美術 　頃末龍<br>');
        document.write('衣裳　栗原朋子<br>');
        document.write('広報　 山本希<br>');
        document.write('制作　 白石響<br></h4>' );
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/-gQbLLPVjVA" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/UEUb3ZjNHqw" frameborder="0" allowfullscreen></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('</section>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/KF2HBgCQkW9bakPg7")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<br/>');
        document.write('<br/>');document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
    else if(show=="2016sinkan"){
         //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/03.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="03.jpg" width="500" height="700"><br>'); 
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>人の上に人がいて、人の下にも人がいる。<br>');
        document.write('そんな世知辛い現実世界で、 <br>');    
        document.write('原発級のハッピー野郎が<br>');
        document.write('原爆級のサゲマン少女に恋をした！<br>');
        document.write('豊かな暮らしは幸せか、貧乏人は不幸せか？<br>');
        document.write('……そもそも、幸せって何だっけ？</h4><br>');
        document.write('<h3>◇脚本・演出</h3><br><h4>斎藤悠人</h4><br>')
        document.write('<h3>◇出演</h3><br><h4>加藤真央・川中萌・貴福雄志郎・木村智矩<br>');
        document.write('頃末龍・笹本健斗・白石響</h4><br>');
        document.write('<h3>◇スタッフ</h3><h4>舞台監督　 瀧岡美咲<br>');
        document.write('舞台監督補佐　木村智矩<br>')
        document.write('舞台美術 　大川愛梨沙・加藤真央・北川里奈・瀧岡美咲<br>')
        document.write('音響 　齋藤大樹<br>照明　 山本希・岡田彬彦<br>');
        document.write('宣伝美術 　川中萌<br>制作　 山本希<br>' );
        document.write('制作補佐　栗原朋子</h4>');
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe src="https://drive.google.com/file/d/0ByGlB98ttM5jY0JpWUZxbGlvbm8/preview" width="640" height="480"></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/><br/>Stage2</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe src="https://drive.google.com/file/d/0ByGlB98ttM5jQW9JUHBGeWgyMUk/preview" width="640" height="480"></iframe></div>');
        document.write('</div>');
        document.write('</div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('</section>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/FdGanyx98QAgRuQWA")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<br/>');
        document.write('<br/>');
        document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
    
    else if(show=="2015haru"){
         //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/04.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="04.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>あらすじ</h3><br>');
        document.write('<h4>ーだけど、キミは来ないー<br><br> ')
        document.write('アスファルトに咲くスイセンを抜いて花占いするぼくちゃんは、<br><br>');
        document.write('何回やっても何回やっても「キライ」にしかなりませんでした！ファック！<br><br>');
        document.write('鏡をナイフに持ち替えて、<br>ぼくらのペシミズムは加速する！！<br><br>');
        document.write('恋、考えたヤツ、殺す！！！！</h4><br>');
        document.write('<h3>◇脚本</h3><br><h4>小野亮</h4><br>');
        document.write('<h3>◇演出</h3><br><h4>梅澤健二郎</h4><br>');
        document.write('<h3>◇演出助手</h3><br><h4>赤間洸介・木村智矩</h4><br>');
        document.write('<h3>◇出演</h3><br>');
        document.write('<h4>赤間洸介・金澤卓哉・頃末龍・笹本健斗<br>');
        document.write('高橋陽・田村重人・吉井優香・加藤真央<br>');
        document.write('木村智矩・栗原朋子・斎藤悠人</h4><br>');
        document.write('<h3>◇スタッフ</h3><br>');
        document.write('<h4>舞台監督　大川愛梨沙<br>');
        document.write('舞台美術　北川理奈・加藤真央・瀧岡美咲<br>');
        document.write('照明　岡田彬彦・山本希<br>');
        document.write('音響　齋藤大樹・高橋陽<br>');
        document.write('制作　吉井優香・大川愛梨沙・笹本健斗・山本希<br>');
        document.write('宣伝美術　若杉亮介・川中萌</h4>')
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">公演CM</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>CM</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/4j4P2JrfIj4" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('</section>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/GpD9JCdwjykZ1ZbQ6")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<br/>');
        document.write('<br/>');
        document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
    else if(show=="2015bangai"){
        //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/05.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="05.jpg" width="500" height="700"><br>');
        //公演情報
        document.write('<h3>◇あらすじ</h3><br>');
        document.write('<h4>地獄×新春×野球×純愛<br>');
        document.write('<br>');
        document.write('<br>');
        document.write('うっかり死んだ与太郎は、<br>');
        document.write('<br>');
        document.write('地獄のコンテスト出場者に。<br>');
        document.write('<br>');
        document.write('ただこの地獄、なんともおかしな場所のようで...<br>');
        document.write('<br>');
        document.write('<br>');
        document.write('勝てば復活!負ければ成仏!?<br>');
        document.write('<br>');
        document.write('陰謀・策略入り乱れ、<br>');
        document.write('<br>');
        document.write('結局最後に勝つのは誰だ！</h4>');
        document.write('<h3>◇脚本・演出</h3><br><h4>崎山貴文</h4><br>');
        document.write('<h3>◇演出助手</h3><br><h4>北川理奈・梅澤健二郎</h4><br>');
        document.write('<h3>出演者</h3><br>');
        document.write('<h4>中野太ニ・栗原朋子・加藤瑶子・但野仁美<br>');
        document.write('仲本花・吉井優香・金澤卓哉・平井政旭・田村重人・赤間洸介</h4><br>');
        document.write('<h3>◇スタッフ</h3><br>');
        document.write('<h4>舞台監督　新居真夏・今西淳樹・大川愛梨沙<br>');
        document.write('舞台美術　井川浩輔・岩屋友理・加藤真央・瀧岡美咲<br>');
        document.write('照明　岡田彬彦・福沢理紗<br>');
        document.write('音響　長尾優紀・齋藤大樹<br>');
        document.write('宣伝美術　熊本里彩・若杉亮介・吉井優香<br>');
        document.write('制作　窪田哲朗・山本希<br>');
        document.write('</h4>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/sMh6VX1M7R79jduC8")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<br/>');
        document.write('<br/>');
        document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
     else if(show=="2015aki"){
        //BGMを流す
        document.write('<audio id="Name" preload="auto"><source src="audio/06.mp3" type="audio/mp3"></audio>') ;
        document.write('<script>document.getElementById("Name").play();</script> ');
        //注意文
        document.write('※このページは開いた瞬間に客入れ音楽が流れます')
        //BGMを止める
        document.write('<input type="button" value="客入れ音楽を止める" Onclick="stop();"><br>')
        //フライヤーを載せる
        document.write('<img src="06.jpg" width="700" height="500"><br>');
        //公演情報
        document.write('<h3>あらすじ</h3><br>');
        document.write('<h4>きざんで いためて もりつけて<br>');
        document.write('<h4>そして食した数ある想いは<br>');
        document.write('<h4>いまじゃお鍋の底にたまった<br>');
        document.write('<h4>消化されない食べ残し<br>');
        document.write('<h4>そんな想いをにこみにつめて<br>');
        document.write('<h4>親子の白・茶が混ざり合い<br>');
        document.write('<h4>時を超えて記憶を超えて<br>');
        document.write('<h4>また食卓によみがえる<br>');
        document.write('<h4>カレーをめぐる家族と家族の<br>');
        document.write('<h4>奇想天外グルメ劇<br>');
        document.write('<h4>スプーン片手に心をお皿に<br>');
        document.write('<h4> おいしい戯曲をくいつくせ！<br><br><br>');
        document.write('<h3>◇脚本・演出</h3><br><h4> 金澤卓哉</h4><br>');
        document.write('<h3>◇演出助手</h3><br><h4>笹本健斗 吉井優香</h4><br>');
        document.write('<h3>◇出演</h3><br>');
        document.write('<h4>赤間洸介・木村智矩・頃末龍・齋藤大樹<br>');
        document.write('笹本健斗・成田明未・丸橋慧・山本希・吉井優香<br>');
        document.write('<h3>◇スタッフ</h3><br>');
        document.write('<h4>舞台監督　大川愛梨沙<br>');
        document.write('舞台美術　北川理奈・今西淳樹・加藤真央・木村智矩・栗原朋子<br>');
        document.write('照明　岡田彬彦・本田晃之<br>');
        document.write('音響　梅澤健二郎・佐藤まい<br>');
        document.write('制作　新居真夏・山本希<br>');
        document.write('宣伝美術　高野菜々子<br>')
        document.write('宣伝美術補佐　吉井優香</h4>')
        //当日映像
        document.write('<section id="youtube" class="bg-light-gray">');
        document.write('<div class="container">');
        document.write('<div class="row">');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('<h2 class="section-heading">本番映像</h2></div>');
        document.write('<div class="col-lg-12 text-center">');
        document.write('<h3 class="service-heading"><br/>Stage1</h3></div>');
        document.write('<div class="col-lg-12 text-center"><iframe width="560" height="315" src="https://www.youtube.com/embed/jVLlqxUmmJs" frameborder="0" allowfullscreen></iframe></div>');
        document.write('<br/>');
        document.write('<br/>');
        document.write('</section>');
        //アルバム
        document.write('<form>');
        document.write('<input type="button" value="公演アルバムはこちら" onclick= window.open("https://goo.gl/photos/pxiPYfHQ3UNwZ45b9")>');
　　　　 document.write('</form>');
        //戻るボタン
        document.write('<br/>');
        document.write('<br/>');
        document.write('<form>');
        document.write('<input type="button" value="戻る" onclick="history.back()">');
        document.write('<input type="button" value="更新" onclick="location.reload(true)">');
        document.write('<input type="button" value="トップページへ"login.html">');
        document.write('</form>');
    }
}