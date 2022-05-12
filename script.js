const startButton = document.querySelector('.start_btn')

const option_list = document.querySelector('.option_list');
const infoBox = document.querySelector('.info_box')
startButton.onclick = ()=>{
    infoBox.classList.add("infoBoxShow")
}

const exitQuiz = document.querySelector('.quit');
exitQuiz.onclick = ()=>{
    infoBox.classList.remove("infoBoxShow")
}

const continueButton = document.querySelector('.restart')
const quizBox = document.querySelector('.quiz_box')
continueButton.onclick = ()=>{
    infoBox.classList.remove("infoBoxShow")
    quizBox.classList.add("quizBoxShow")
    showQuestions(0)
}

let queCount = 0;
const next_btn = document.querySelector('.next_btn');
next_btn.onclick = ()=>{
   if(queCount<questions.length-1)
   {
    queCount++;
    showQuestions(queCount)
   }
//    else if(queCount===questions.length){
//     next_btn.classList.add("finish")
//    }
}


function showQuestions(index){
    let que_text = document.querySelector('.que_text');
    let que_tag = '<span>'+questions[index].numb+". " +questions[index].question +'</span>'
    que_text.innerHTML=que_tag;

    let option_tag= '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[1]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[2]+'<span></span></div>'
                    +'<div class="option">'+questions[index].options[3]+'<span></span></div>';
    option_list.innerHTML=option_tag;

    let bottomQueMarking = document.querySelector('.total_que');
    let bottomQueNum = '<span><p>'+questions[index].numb+'</p>'+'<p>'+" of "+'</p>'+'<p>'+questions.length+'</p>'+'<p>Questons<p/>'+'</span>';
    bottomQueMarking.innerHTML=bottomQueNum;

    const options = document.querySelectorAll('.option')
    for (let i = 0; i< options.length; i++) {
        options[i].setAttribute('onclick','selectedOption(this)')
        // console.log(options[i].textContent);
    }

  
}
const correctTick = '<div class="icon tick"><i class="fas fa-check"></i></div>'
const wrongTick = '<div class="icon cross"><i class="fas fa-times"></i></div>'




function selectedOption(answer){
    // console.log(answer.textContent)
    const userAnswer = answer.textContent;
    const correctAnswer= questions[queCount].answer;
    const allOptions=option_list.children.length;
    if(userAnswer==correctAnswer)
    {
        answer.classList.add('correct')
        console.log("right")
        answer.insertAdjacentHTML('beforeend', correctTick)
    }
    else{
        answer.classList.add('incorrect')
        console.log('wrong')
        answer.insertAdjacentHTML('beforeend', wrongTick)

        //if selected wrong then right answer will appear
        for(let i=0;i<allOptions;i++)
        {
            if(option_list.children[i].textContent===correctAnswer)
            {
                option_list.children[i].setAttribute("class","option correct")
                option_list.children[i].insertAdjacentHTML('beforeend', correctTick)
            }
            
        }
    }

    // console.log(userAnswer)
    // console.log(correctAnswer)

    //disabled all options after clicking
    for(let i=0;i<allOptions;i++)
    {
        option_list.children[i].classList.add("disableOptions")
        
    }
   
}