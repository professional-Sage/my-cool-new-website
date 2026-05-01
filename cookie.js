var score = 0;
var toggle = false;
var threshold = 20; 





function increase_score(){
score = score+1;
var storage = document.getElementById("score");
storage.textContent = "score = " + score;

if (score >= threshold){
    let p = document.getElementById("upgrades-message")
    p.textContent = "upgrade available"
}
}


function increasing(){
        console.log(score);
        toggle = true;
        increase_score();
        setTimeout(increasing, 1000);
}


function upgrades(){
    console.log(score)
    if (score >= threshold){
        score = score - threshold;

        let p = document.getElementById("upgrades-message");
        p.textContent = ""
        threshold = 0.5*threshold + threshold;
        increasing();

    }
}

// function when_available(){
//     while (true){
//     if (score >= threshold){
//         let p = document.getElementById("upgrades-message")
//         p.textContent = "upgrade available"
//     }
//     }
// }























