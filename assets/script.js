const timerEl = document.getElementById("timer")
const buttonEl = document.getElementById("start-button")
const qblockEl = document.getElementById("qblock")
const questionsEl = document.getElementById("questions")
const answersEl = document.getElementById("answers")
const ablockEl = document.getElementById("ablock")
const abuttonEl = document.getElementById("buttonA");
const bbuttonEl = document.getElementById("buttonB");
const cbuttonEl = document.getElementById("buttonC");
const dbuttonEl = document.getElementById("buttonD");
const answerButtonsEl = document.getElementsByClassName("answer-button")
const sblockEl = document.getElementById("sblock")
const submitButtonEl = document.getElementById("submit")
var currentQuestion=1; //initializes current question to question 1
var correctAnswer="A"; //initializes correct answer to A
var timeremaining = 30; //initializes time remaining to 30 seconds

//countdown function, displays remaining time timer element
function countdown() {
    
    timerEl.style.visibility = "visible";
    timerEl.textContent = timeremaining + " seconds remaining";
    let timeInterval = setInterval(function () {
        //when timeremaining is greater than 0
        //decrements the timeremaining variable
        //sets the text contents of the timer element to display the remining time
        if (timeremaining > 0) {
            timeremaining -= 1;
            timerEl.textContent = timeremaining + " seconds remaining";
        }
        //when timeremaining is equal to 0
        //reinitializes the timer element and hides it
        //hides the qblock element
        //cancels the interval from repeating any further
        //makes the start button visible again so the user can try again
        else {
            timerEl.textContent = "t";
            timerEl.style.visibility = "hidden"
            qblockEl.style.visibility = "hidden";
            clearInterval(timeInterval);
            buttonEl.style.visibility = "visible";
        }
        if (timeremaining<1 || currentQuestion>4){
            qblockEl.style.visibility="hidden"
            ablockEl.style.visibility="hidden"
            sblockEl.style.visibility="visible"
        }
    }, 1000);//interval 1000 to run once every second
}
function nextQuestion() {
    qblockEl.style.visibility = "visible";
    if (currentQuestion==1){
        questionsEl.textContent = "Question 1: Variables in JS are _________";
        answersEl.textContent = "A:Dynamic B:Difficult C:Fluid D:Efficient";
        correctAnswer="A";
    }
    if (currentQuestion==2){
        questionsEl.textContent = "Question 2: function(){} is an example of a _________";
        answersEl.textContent = "A:function call B:function declaration C:function expression D:function definition";
        correctAnswer="B";
    }
    if (currentQuestion==3){
        questionsEl.textContent = "Question 3: Variables declared by let are restricted to the scope in which they are declared";
        answersEl.textContent = "A:True B:False";
        correctAnswer="A";
    }
    if (currentQuestion==4){
        questionsEl.textContent = "Question 4: a script element can be included in the html head without any special attributes";
        answersEl.textContent = "A:True B:False";
    }
    correctAnswer="B";
}

//removes time for wrong answers
function penalty(){
    timeremaining-=5;
    timerEl.textContent = timeremaining + " seconds remaining"
}

buttonEl.addEventListener("click", function (event) {
    //prevents user from clicking button again while countdown is running by hiding it
    buttonEl.style.visibility = "hidden";
    currentQuestion=1; //initializes current question to question 1
    correctAnswer="A"; //initializes correct answer to A
    timeremaining = 30; //initializes time remaining to 30 seconds
    countdown();
    nextQuestion();
})

abuttonEl.addEventListener("click",function(event){
    if(correctAnswer=="A"){
        currentQuestion++;
        nextQuestion();
    }
    else{
        penalty();
        currentQuestion++;
        nextQuestion();
    }
})
bbuttonEl.addEventListener("click",function(event){
    if(correctAnswer=="B"){
        currentQuestion++;
        nextQuestion();
    }
    else{
        penalty();
        currentQuestion++;
        nextQuestion();
    }
})
cbuttonEl.addEventListener("click",function(event){
    if(correctAnswer=="C"){
        currentQuestion++;
        nextQuestion();
    }
    else{
        penalty();
        currentQuestion++;
        nextQuestion();
    }
})
dbuttonEl.addEventListener("click",function(event){
    if(correctAnswer=="D"){
        currentQuestion++;
        nextQuestion();
    }
    else{
        penalty();
        currentQuestion++;
        nextQuestion();
    }
})

submitButtonEl.addEventListener("click",function(event){
    event.preventDefault(); //stops page reload on submit
    let initials=document.querySelector("#initials").value;
    let score=timeremaining;
    localStorage.setItem("initials",initials)
    localStorage.setItem("score",score)

})

