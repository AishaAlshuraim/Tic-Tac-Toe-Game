// user click on play button
// user 1 click inside any square then x apears
// after each play show message of who's turn , win, lose or tie 
// user 2 click inside any square except the used squares then O apears and so on 
// after each play show message of who's turn , win, lose or tie 
// when win, lose or tie end the game 
// if user want to play again press reset button 

var play1= 'x';
var play2 = 'O';

//var winArray = [ [0 , 1, 2]]
var butt = document.querySelector('button');

const cells = document.querySelectorAll('.item');
const contain = document.querySelector('div');
var turns = document.querySelector('h2');
count= 1; 
const clicked = function () {
    if (count%2 !== 0 ){
    this.innerText= play1;
    count++;
     if(win()) {
        turns.innerText = " X is the winner !";
        contain.style.pointerEvents = 'none';    }
        else if(count == 10){
            turns.innerText = "Tie";}
    else{
    turns.innerText = "O turns"
    }}
    else { 
    this.innerText= play2;
    count++;
    if(win()) {
    turns.innerText = " O is the winner !";
    contain.style.pointerEvents = 'none';  }
    else if(count== 10){
    turns.innerText = "Tie";}
else{
turns.innerText = "X turns"
}}
}
flag = false;
const win = function(){
      if( cells[0].innerText !== "" && cells[0].innerText ==  cells[1].innerText &&   cells[0].innerText == cells[2].innerText){
        flag=true;}
      if(cells[3].innerText !== "" && cells[3].innerText ==  cells[4].innerText &&   cells[3].innerText == cells[5].innerText){
        flag=true;}
       if( cells[6].innerText !== "" && cells[6].innerText ==  cells[7].innerText &&   cells[6].innerText == cells[8].innerText){
        flag=true;}
      if(cells[0].innerText !== "" && cells[0].innerText ==  cells[3].innerText &&   cells[0].innerText == cells[6].innerText){
        flag=true;}
       if( cells[1].innerText !== "" && cells[1].innerText ==  cells[4].innerText &&   cells[1].innerText == cells[7].innerText){
        flag=true;}
        if( cells[2].innerText !== "" &&cells[2].innerText ==  cells[5].innerText &&   cells[2].innerText == cells[8].innerText){
        flag=true;;}
        if( cells[0].innerText !== "" &&cells[0].innerText ==  cells[4].innerText &&   cells[0].innerText == cells[8].innerText){
            flag=true;;}
        if( cells[2].innerText !== "" &&cells[2].innerText ==  cells[4].innerText &&   cells[2].innerText == cells[6].innerText){
            flag=true;;}
            
        
return flag; 
    
    
    }

function click(){
    window.location.reload(true);

}
butt.addEventListener('click',click);

    

cells.forEach ( function (cell){
    cell.addEventListener('click',clicked , {once : true});
  })


