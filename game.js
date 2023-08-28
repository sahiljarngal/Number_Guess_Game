`use strict`;
// #HTML DOCUMENT #
let again=document.querySelector(`.again`);
let random_no=Math.floor((Math.random()*20)+1);

let check=document.querySelector(`.check`);
let score=document.querySelector(`.score`);
score.textContent=`20`;
let highscore=document.querySelector(`.high`);
let message=document.querySelector(`.message`);
let body=document.querySelector(`body`);
let guess=document.querySelector(`.guess`);



        // CLICK FUNCTION#
      const clickbtn=()=>{ 
        
        // console.log(random_no);
        // console.log(`press`);
        if(document.querySelector(`.number`).value==random_no){
                console.log(`win`);
                console.log(document.querySelector(`.number`).value);
                message.textContent=`You Win🏆`;
                body.style.backgroundColor=`#5b7c99`;
                guess.textContent=random_no;
                 score.textContent;

                //  #HIGHSCORE SETUP
                 if(highscore.textContent<score.textContent){
                        highscore.textContent=score.textContent;
                }
        
        // #IF INPUT BOX IS EMPTY OR INVAILD INPUT#
        
        }
        else if(document.querySelector(`.number`).value==`` || document.querySelector(`.number`).value>20){
           message.textContent=`Invalid Number🥲`;
        }
        //   #IF GUESS NO. SMALLER THAN THE ACTUAL NUMBER#
        else if((document.querySelector(`.number`).value<random_no) &&  ((document.querySelector(`.number`).value)>0)){
                message.textContent=`To low👇`;
                score.textContent-=`1`;
        }
        //   #IF GUESS NO. GREATER  THAN THE ACTUAL NUMBER
        else if((document.querySelector(`.number`).value>random_no) &&  ((document.querySelector(`.number`).value)>0)){
                message.textContent=`To High👆`
                score.textContent-=`1`;
        }
        //  #IF YOU DONT GUESS THE NUMBER OR WRITE 0 IN THE INPUT
        else{
                message.textContent='You loss☠️'
        }
      
}
// # AGAIN BUTTON SETUP#
const againbtn=()=>{
        random_no=Math.floor((Math.random()*20)+1);
        body.style.backgroundColor=`#101820FF`;
        guess.textContent=`?`;
        score.textContent=`20`;
        document.querySelector(`.number`).value=``;
        message.textContent=`Start guessing......`;
     
}
// BOTH BUTTON 
check.addEventListener(`click` ,clickbtn);
again.addEventListener(`click`,againbtn);


