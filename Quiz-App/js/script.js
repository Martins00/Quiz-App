const quizData = [
    {
        question: "What does Bonasera want Don Corleone to do for him?",
        a: "KILL THE BOYS WHO ROUGHED UP HIS DAUGHTER",
        b: "LEND HIM MONEY",
        c: "FIND HIS DAUGHTER A SUITABLE ITALIAN HUSBAND",
        d: "FIND HIS DAUGHTER, WHO WAS MISSING",
        correct: "a"
    },

    {
        question: " Why does Don Corleone delay the family photograph at Connie's wedding?",
        a: "SONNY WAS NOT THERE",
        b: "THE PHOTO WOULD BE BACKLIT",
        c: "THE DON HAD A MEETING TO GET TO",
        d: "MICHAEL HAD NOT YET ARRIVED",
        correct:"d",
    },

    
    {
        question: "Who are the men writing down license plate numbers outside Connie's wedding?",
        a: "DON CORLEONE'S BODYGUARDS",
        b: "NEIGHBORHOOD WATCH",
        c: "FBI AGENTS",
        d: "THE LOCAL POLICE",
        correct:"c",
    },
    
    {
        question: "Who was Vincent Corleone?",
        a: "The only member of the Corleone family that was not of their blood",
        b: "Fredo's bastard",
        c: "The Don",
        d: "Connie's adopted child",
        correct:"c",
    },
    
    {
        question: "Which of the following characters was NOT a guest at Connie and Carlo's wedding?",
        a: "WOLTZ",
        b: "FREDO",
        c: "JOHNNY FONTANE",
        d: "TOM HAGEN",
        correct:"a",        
    },
    
    {
        question: "How much money did Woltz pay for Khartoum, his prized horse?",
        a: "$6,000",
        b: "$600,000",
        c: "$6,000,000",
        d: "$60,000",
        correct:"b",
    },
    
    {
        question: "What does Woltz find in his bed the morning after his dinner with Tom Hagen?",
        a: "THE SEVERED HOOFS OF HIS HORSE, KHARTOUM",
        b: "A TICKING BOMB",
        c: "HIS BIGGEST STAR'S EYEBALLS",
        d: "THE SEVERED HEAD OF HIS HORSE, KHARTOUM",
        correct:"d",
    },
    
    {
        question: " Who directed 'The Godfather' movies?",
        a: "Francis Ford Coppola",
        b: "Steven Spielberg",
        c: " Mario Puzo",
        d: "George Lucas",
        correct:"c",
    },

    {
        question: "When Paulie sees Connie collecting gifts for the bridal purse, he estimates aloud how much money is in it. Which of the following amounts would fall into the range of his estimate?",
        a: "$45,000",
        b: "$25,000",
        c: "$15,000",
        d: "$35,000",
        correct:"b",
        
    },

    {
        question: "What was the name of the baker that made Connie and Carlo's wedding cake?",
        a: "Enzo",
        b: "Nazorine",
        c: "Bonasera",
        d: "Johhny",
        correct:"b",        
    },

    {
        question: "How many times was Vito shot by the Turk's men?",
        a: "2",
        b: "4",
        c: "5",
        d: "3",
        correct:"c",
    },

    {
        question: " What is the name of the baker that comes to the hospital to see Don Corleone?",
        a: "Enzo",
        b: "Sollozzo",
        c: "Vincent",
        d: "Johhny",
        correct:"a",        
    },
   
    {
        question: "Tom Hagen, Don Corleone's lawyer and adopted son, tells him that Luca Brasi wants to see him. The Don asks if this is necessary. What is Tom's explanation for Luca's request to see him?",
        a: "To offer friendship to the Don ",
        b: "He had important business with the Don",
        c: "Luca did not expect to be invited, and is grateful.",
        d: "He just needed to see the Don",
        correct:"c",
 
    },

    {
        question: "Who made the statement- 'And I hope that their first child be a masculine child.'",
        a: "Enzo",
        b: "Johnny Fontane",
        c: "Sollazo",
        d: "Luca Brasi",
        correct:"d",
        
    },

    {
        question: "What does Mike drop whilst running to the phone box after his dad has been shot?",
        a: "the flowers",
        b: "kay's hands",
        c: "his newspaper",
        d: "his popcorn",
        correct:"c",
    },

    {
        question: "What room number was Vito Corleone in at the hospital?",
        a: "4",
        b: "2",
        c: "5",
        d: "7",
        correct:"b", 
    },


]

const quiz = document.getElementById("quiz")
const answerE1s = document.querySelectorAll("answer")
const question = document.getElementById("question")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const submit = document.getElementById("submit")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    question.innerText = currentQuizData.question
    a_answer.innerText = currentQuizData.a
    b_answer.innerText = currentQuizData.b
    c_answer.innerText = currentQuizData.c
    d_answer.innerText = currentQuizData.d
}

function deselectAnswers () {
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}

function getSelected() {
    let answerE1
    answerE1s.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}

submit.addEventListener("click", () => {
    const answer= getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick>"location.reload()"Reload</button>`
            
            
        }
    }
})