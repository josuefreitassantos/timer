var tempo = 0
var buttonStart
var buttonPause
var buttonReset
var divTempo
var timerId

//Incializa
init()

function init(){
  buttonStart = document.getElementById("start")
  buttonStart.onclick = start
  
  buttonPause = document.getElementById("pause")
  buttonPause.onclick = pause
  buttonPause.disabled = true
  
  buttonReset = document.getElementById("reset") 
  buttonReset.onclick = reset
  buttonReset.disabled = true

  divTempo = document.getElementById("tempo")
}

function update(){
  tempo = tempo + 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function start(){
  timerId = setInterval(update, 100)
  buttonStart.disabled = true
  buttonPause.disabled = false
  buttonReset.disabled = false
}
function pause(){
  clearInterval(timerId)
  buttonStart.disabled = false
  buttonPause.disabled = true
}
function reset(){
  clearInterval(timerId)
  tempo = 0
  buttonStart.disabled = false
  buttonPause.disabled = true
  buttonReset.disabled = true
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}