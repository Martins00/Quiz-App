
let totalScore = 0
let currentChosenOption = ''
let currentQuestionNum = 1
let restartQuiz = false


const optionsTemplate = (questionBank,questionNum,option) =>{
    let li = document.createElement("li");
    li.innerHTML =  `
            <input type='radio' name="options_${questionNum}" id="${option}"/>
            <label for = "${option}">
                ${questionBank[questionNum-1][option]}
            </label>
        `
    li.addEventListener('click',function(){
    currentChosenOption = option
    })
    return li
}


function quesitionTemplate(questionBank,questionNum){
    return`
       <div>
           <h2>${questionBank[questionNum-1].question}</h2>
           <ul id='questionContainer'>
           </ul>
       </div>
    `
}

function loadQuizToPage(questionBank,pageTag,questionNum,options=['a','b','c','d']){
     pageTag.innerHTML = quesitionTemplate(questionBank,questionNum)
     const questionContainer = document.getElementById('questionContainer')
     options.forEach((val)=>{
         questionContainer.appendChild(optionsTemplate(questionBank,questionNum,val))
     })
}


function submitResult(){
   
    try{
        currentChosenOption===quizData[currentQuestionNum-1].correct ? totalScore += 1: totalScore += 0
    }catch(e){
        submit.innerHTML = 'Submit'
        totalScore = 0
    }
    currentChosenOption = ''
    currentQuestionNum += 1
    if (currentQuestionNum === quizData.length+1){
        currentQuestionNum = 0
        questions.innerHTML = `<h2>You answered ${totalScore}/${quizData.length} questions correctly</h2>`
        submit.innerHTML = 'Restart Quiz' 
        restartQuiz = true
        console.log(restartQuiz)
        return
    }
    restartQuiz ? loadQuizToPage(quizData,questions,1):loadQuizToPage(quizData,questions,currentQuestionNum)
    restartQuiz = false
}

let submit = document.getElementById('submit')
let questions = document.getElementById('questions')
loadQuizToPage(quizData,questions,1)