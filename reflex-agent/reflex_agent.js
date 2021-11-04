// MIT License
// Copyright (c) 2020 Luis Espino
let state1 = 0;
let state2 = 0;
let state3 = 0;
let state4 = 0;
let state5 = 0;
let state6 = 0;
let state7 = 0;
let state8 = 0;
let states = ["A", "DIRTY", "DIRTY"];  

function reflex_agent(location, state) {
    if (state == "DIRTY") return "CLEAN";
    else if (location == "A") return "RIGHT";
    else if (location == "B") return "LEFT";
}

function test(states) {
    var location = states[0];
    if (location == "A" && states[1] == "DIRTY" && states[2] == "DIRTY") {
        state1 = state1 + 1;
        document.getElementById("e1").innerHTML ="";
        document.getElementById("e1").innerHTML += "State1: ".concat(state1);
    } else if (location == "A" && states[1] == "CLEAN" && states[2] == "DIRTY") {
        state5 = state5 + 1;
        document.getElementById("e5").innerHTML ="";
        document.getElementById("e5").innerHTML += "State5: ".concat(state5);
    } else if (location == "A" && states[1] == "DIRTY" && states[2] == "CLEAN") {
        state3 = state3 + 1;
        document.getElementById("e3").innerHTML ="";
        document.getElementById("e3").innerHTML += "State3: ".concat(state3);
    } else if (location == "A" && states[1] == "CLEAN" && states[2] == "CLEAN") {
        state7 = state7 + 1;
        document.getElementById("e7").innerHTML ="";
        document.getElementById("e7").innerHTML += "State7: ".concat(state7);
    } else if (location == "B" && states[1] == "DIRTY" && states[2] == "DIRTY") {
        state2 = state2 + 1;
        document.getElementById("e2").innerHTML ="";
        document.getElementById("e2").innerHTML += "State2: ".concat(state2);
    } else if (location == "B" && states[1] == "CLEAN" && states[2] == "DIRTY") {
        state4 = state4 + 1;
        document.getElementById("e4").innerHTML ="";
        document.getElementById("e4").innerHTML += "State4: ".concat(state4);
    } else if (location == "B" && states[1] == "DIRTY" && states[2] == "CLEAN") {
        state6 = state6 + 1;
        document.getElementById("e6").innerHTML ="";
        document.getElementById("e6").innerHTML += "State6: ".concat(state6);
    } else if (location == "B" && states[1] == "CLEAN" && states[2] == "CLEAN") {
        state8 = state8 + 1;
        document.getElementById("e8").innerHTML ="";
        document.getElementById("e8").innerHTML += "State8: ".concat(state8);
    }

    var state = states[0] == "A" ? states[1] : states[2];
    var action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
    if (action_result == "CLEAN") {
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
    }
    else if (action_result == "RIGHT") states[0] = "B";
    else if (action_result == "LEFT") states[0] = "A";

    if(state1>=2 && state2>=2 && state3>=2 && state4>=2 && state5>=2 && state6>=2 && state7>=2 && state8>=2 ) {
        document.getElementById("fin").innerHTML ="****FIN DE LA SIMULACIÓN ****";
    }
    if(state1<2 || state2<2 || state3<2 || state4<2 || state5<2 || state6<2 || state7<2 || state8<2 ) {
        setTimeout(function () { test(states); }, 2000);
    }
    
}

test(states);
setInterval(function () {
    let random = Math.random();
    if (random <= 0.30) {
        states[1] = "DIRTY"
    } else if(random <0.60) {
        states[2] = "DIRTY"
    } else{
        states[1] = "DIRTY";
        states[2] = "DIRTY"
    }
}, 6000);