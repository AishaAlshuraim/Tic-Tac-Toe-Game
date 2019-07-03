//  user click on play button
//  user 1 click inside any square then x apears
//  after each play show message of who's turn , win, lose or tie 
//  user 2 click inside any square except the used squares then O apears and so on 
//  after each play show message of who's turn , win, lose or tie 
//  when win, lose or tie end the game 
//  if user want to play again press reset button 
var play1= 'X';
var play2 = 'O';
var winArray = [ [0 , 1, 2]]
var butt = document.querySelector('#reset');

var cont = document.querySelector('#gif');
const cells = document.querySelectorAll('.item');
const contain = document.querySelector('.container');
var iron = document.querySelector('#p1');
var thor = document.querySelector('#p2');
thor.style.opacity = "0.6";
var wins = document.querySelector('h2');

var count= 1; 
const clicked = function () {
    if (count%2 !== 0 ){
        //this.style.textShadow= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
        this.innerHTML= "<img src=\"ironFace.png\">";
        this.setAttribute("data", "x");

        count++;
     if(win()) {
      //   console.log("win i");
       //cont.innerHTML = "<img src=\"ironWin.gif\">";
       wins.innerText="IRON MAN WINS";
       contain.style.pointerEvents= 'none';  
      }
        else if(count == 10){
            wins.innerText = "Tie"; }    
                    else{
        iron.style.opacity = "0.6";
        thor.style.opacity = "1";

   // turns.innerHTML = "O turns"
    }}
    else { 
        this.style.textStroke= "1px black";
       // this.style.size= "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
       this.innerHTML= "<img src=\"thor-png-25750.png\">";
       this.setAttribute("data", "o");
       count++;
    if(win()) {
       // cont.innerHTML = "<img src=\"thorWin.gif\">";
        wins.innerText="THOR WINS";
        //console.log("win");
   // turns.innerHTML = " O is the winner !";
    contain.style.pointerEvents = 'none'; 
 }
    else if(count== 10){
        wins.innerText = "Tie";
}
else{
    thor.style.opacity = "0.6";
    iron.style.opacity = "1";

//turns.innerHTML = "X turns"
}}
}
flag = false;
const win = function(){
    // console.log(cells[0].getAttribute("data"));
    
      if( cells[0].getAttribute("data")!==null && cells[0].getAttribute("data") == cells[1].getAttribute("data") && cells[0].getAttribute("data")== cells[2].getAttribute("data") ){
          
          flag=true;}
          if(cells[3].getAttribute("data")  !== null && cells[3].getAttribute("data")  ==  cells[4].getAttribute("data")  &&   cells[3].getAttribute("data")  == cells[5].getAttribute("data") ){
            console.log("1");
            flag=true;}
            if( cells[6].getAttribute("data") !== null && cells[6].innerHTML ==  cells[7].innerHTML &&   cells[6].getAttribute("data")  == cells[8].getAttribute("data") ){
                console.log("**",cells[6].getAttribute("data") )
                flag=true;}
      if(cells[0].getAttribute("data")  !== null&& cells[0].getAttribute("data")  ==  cells[3].getAttribute("data")  &&   cells[0].getAttribute("data")  == cells[6].getAttribute("data") ){
        flag=true;}
       if( cells[1].getAttribute("data")  !== null && cells[1].getAttribute("data")  ==  cells[4].getAttribute("data")  &&   cells[1].getAttribute("data")  == cells[7].getAttribute("data") ){
        flag=true;}
        if( cells[2].getAttribute("data")  !== null&&cells[2].getAttribute("data")  ==  cells[5].getAttribute("data")  &&   cells[2].getAttribute("data")  == cells[8].getAttribute("data") ){
        flag=true;;}
        if( cells[0].getAttribute("data")  !== null &&cells[0].getAttribute("data")  ==  cells[4].getAttribute("data")  &&   cells[0].getAttribute("data")  == cells[8].getAttribute("data") ){
            flag=true;;}
        if( cells[2].getAttribute("data")  !== null &&cells[2].getAttribute("data")  ==  cells[4].getAttribute("data")  &&   cells[2].getAttribute("data")  == cells[6].getAttribute("data") ){
            flag=true;;}
            
        
return flag; 
    
    
    }
    butt.addEventListener('click',reset);

function reset(){
    for(var i=0 ;i<cells.length;i++){
        cells[i].innerHTML="";
        wins.innerText = "";
        this.setAttribute("data", " ");
        thor.style.opacity = "0.6";
        count=1;
    
    }
    
    cells.forEach ( function (cell){
        cell.addEventListener('click',clicked , {once : true});
      })
}

    

cells.forEach ( function (cell){
    cell.addEventListener('click',clicked , {once : true});
  })

 

var audio
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "The-Avengers-Theme-Song.mp3";
	audio.loop = true;
	audio.play();

}
window.addEventListener("load", initAudioPlayer);

 mutebtn = document.getElementById("mutebtn");

 function mute(event){
     event.preventDefault();

    // e.preventDefault();
     //console.log('clicked')
         if(audio.muted){

         audio.muted = false;
         //$('#mutebtn').css("background-image", "url(speaker.png)");  

        mutebtn.style.background = "url(speaker.png) no-repeat";
       // $("mutebtn").attr("style","border:none");
       // mutebtn.style.border="none";

     } else {     
         audio.muted = true;
       // $('#mutebtn').css("background-image", "url(mute.png)");  

         mutebtn.style.background = "url(mute.png) no-repeat";
        // $("mutebtn").attr("style","border:none");

        // mutebtn.style.border="none";

     }
 }
 mutebtn.addEventListener("click", mute);






// element.getAttribute("data-columns"); // 3
// element.setAttribute("data-columns", 3);