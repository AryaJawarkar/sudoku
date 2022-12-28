
let tileSelected = null;
let numSelected = null;
var err = 0;
 audio = new Audio('asset/sound-k-117217.mp3');
var board =[
"--65784-2", 
"5---3-7-8", 
"-----9-3-", 
"-634----7", 
"--4----2- ", 
"--17--643", 
"1-8-4---6", 
"69-35----", 
"74--86---"]
var board1 =[
"2-----69-", 
"-5---3---", 
"17---94-5", 
"--3-25-18", 
"----4---- ", 
"72-38-5--", 
"5-26---41", 
"---5---7-", 
"-67-----3"]
var board2 =[
"--65784-2", 
"5---3-7-8", 
"-----9-3-", 
"-634----7", 
"--4----2- ", 
"--17--643", 
"1-8-4---6", 
"69-35----", 
"74--86---"]

var solution = [
"316578492", 
"529134768", 
"487629531", 
"263415987",
"974863125",
"851792643",
"138947256",
"692351874",
"745286319"]
var solution1 = [
"234158697", 
"956473182", 
"178269435", 
"643925718",
"815746329",
"729381564",
"592637841",
"381594276",
"467812953"]
var solution2 = [
"316578492", 
"529134768", 
"487629531", 
"263415987",
"974863125",
"851792643",
"138947256",
"692351874",
"745286319"]







window.onload = function(){
    setGame();  
    muse();
    timer();

    //    [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[easy hard mode]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
    
    document.getElementById('med').addEventListener('click',()=>{
        alert("Buy game to unlock Medium level!");      
    })
    document.getElementById('easy').addEventListener('click',()=>{
        location.reload();
    })
     document.getElementById('hard').addEventListener('click',()=>{
        alert("Buy game to unlock Hard level!");
    })
}








//game functions----------------------------------------------------
function muse(){
    let e = document.querySelector("#music1");
    e.addEventListener('click',()=>{
    audio.play();

})
    e.addEventListener('dblclick',()=>{
    audio.pause();

})

}

// ------------------------------------------TIMER-----------------------------------------------

function timer() {
    var sec = 0;
    function pad ( val ) { 
        return val > 9 ? val : "0" + val;
     }
    setInterval( function(){
        document.getElementById("sec").innerHTML=pad(++sec % 60);
        document.getElementById("min").innerHTML=pad(parseInt(sec/60,10));
    }, 1000);
}



function setGame(){

    
    for (let i = 1; i <= 9; i++){
        let dig = document.createElement('div');
        dig.id = i;
        dig.innerText = i;
dig.addEventListener('click',selectNumber);
dig.classList.add('numb');
document.getElementById('num').appendChild(dig);

    }

    for (let c = 0; c< 9; c++){
        for (let r = 0; r < 9; r++){
            let tile = document.createElement('div');
            tile.id = c.toString() + "-" + r.toString();
            tile.classList.add('tile');
tile.addEventListener('click',selectTile);


// ------------------------------------------SOLVE---------------------------------------------
document.getElementById('sol').addEventListener('click',()=>{
    tile.innerText = solution[c][r];
    
})


if(board[c][r] != "-"){
    tile.innerText = board[c][r];
    tile.classList.add('tiles');
};

if(c == 2 || c == 5 ){
    tile.classList.add('hline');
}
if( r == 2 || r == 5){
                tile.classList.add('vline');
}
            document.getElementById('board').appendChild(tile);
        }
    }



}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("ns");
    }
    numSelected = this;
    numSelected.classList.add("ns");
}
function selectTile(){
    if(numSelected){
        if(this.innerText != ""){
return;
        }
        let coords = this.id.split("-");
        let c = parseInt(coords[0]);
        let r = parseInt(coords[1]);
        if(solution[c][r] == numSelected.id){
            
            this.innerText = numSelected.id;
        }
        else{
            err = err + 1;
            document.getElementById('err').innerHTML = "Error : " + err;
            if(err === 10){
                alert('you loose');
                location.reload();
            }
        }
    }
   
}



