x=0
y=0
draw_circ=""
draw_rect=""

function setup(){
    canvas= createCanvas(900 , 600)
}
var SpeechRecognition= window.webkitSpeechRecognition
var recognition= new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML="System is listening, please speak"
    recognition.start()
}
recognition.onresult= function(event){
    console.log(event)

    var content= event.results[0][0].transcript
    document.getElementById("status").innerHTML="The speech has been recognized as: "+content

    if(content=="rectangle"){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        draw_rect="set"
    }
    
    if(content=="circle"){
        x=Math.floor(Math.random() * 900)
        y=Math.floor(Math.random() * 600)
        draw_circ="set"
    }
}
function draw(){
    if(draw_rect=="set"){
        rect(x , y , 60 , 70)
        document.getElementById("status").innerHTML="Rectangle has been drawn"
        draw_rect=""
    }
    if(draw_circ=="set"){
       radius=Math.floor(Math.random() * 100)
        circle(x , y , radius)
        document.getElementById("status").innerHTML="Circle has been drawn"
        draw_circ=""
    }
}