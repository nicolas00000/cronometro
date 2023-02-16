let m = 1
let s = 1
let ms = 0

let miliSegundos = document.getElementById("ms")
let segundos = document.getElementById("s")
let minutos = document.getElementById("m")

function run(){
    ms === 100 ?  maisSegundo()   : ms < 10 ? miliSegundos.innerHTML = "0" + ms++ : miliSegundos.innerHTML = ms++
}

function maisSegundo(){
    ms=0
    //mais um minuto
    if(s == 60){
        s = 0
        //se for menor de 10, colocar 0 a esquerda
        if(m < 10){
            minutos.innerHTML = "0" + m++
        }else{
            minutos.innerHTML = m++
        }
    }
    s >= 10 ? segundos.innerHTML =  s++ : segundos.innerHTML = "0" + s++ 

}
//bloquear duplos cliques e causar bug no contador
let block = true
function play(){
    block ?  control = setInterval(run, 10) : false
    block = false
}

function stop(){
    block = true
    clearInterval(control)
}

function reset(){
    stop()
    m = 1
    s = 1
    ms = 0
    segundos.innerHTML = "00"
    minutos.innerHTML = "00"
    miliSegundos.innerHTML = "00"
}