let score = {};

function OpeningCeremony(score, Race100M){
    score = {red:0, blue:0, green:0, yellow:0};
    setTimeout(() => {
        console.log("Let's the game begin!");
        Race100M(score, LongJump);
    }, 1000);
}

function Race100M(score, LongJump){
    setTimeout(() => {
        console.log("Score");
        console.log(score);
        const obj = {
             red: Math.floor(Math.random() * 6) + 10,
             blue:  Math.floor(Math.random() * 6) + 10,
             green:  Math.floor(Math.random() * 6) + 10,
             yellow:  Math.floor(Math.random() * 6) + 10
        };
        const sortedArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
        
        console.log("Winner of 100M race is " + sortedArr[0]);

        score[sortedArr[0]] += 50;
        score[sortedArr[1]] += 25;

        console.log("Updated Score");
        console.log(score);
        LongJump(score, HighJump);

    }, 3000);

    
}

function LongJump(score, HighJump){
    setTimeout(() => {
        console.log("Previous Score");
        console.log(score);

        const i = Math.floor(Math.random() * 4);
        if(i == 0){
            let points = score.red;
            points += 150;
            score.red = points;
            console.log("Winner of LongJump is " + "red");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 1){
            let points = score.blue;
            points += 150;
            score.blue = points;
            console.log("Winner of LongJump is " + "blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 2){
            let points = score.green;
            points += 150;
            score.green = points;
            console.log("Winner of LongJump is " + "green");
            console.log("Updated Score");
            console.log(score);
        }
        if(i == 3){
            let points = score.yellow;
            points += 150;
            score.yellow = points;
            console.log("Winner of LongJump is " + "yellow");
            console.log("Updated Score");
            console.log(score);
        }
        HighJump(score, AwardCeremony);
        
    }, 2000);
}

function HighJump(score, AwardCeremony){

    console.log("Previous Score");
    console.log(score);

    let colour = prompt("Please enter the Colour");

    if (colour == null || colour == "") {
        console.log("Event Was cancelled");
        AwardCeremony(score);
    } else {
        if(colour == "red"){
            let points = score.red;
            points += 100;
            score.red = points;
            console.log("Winner of HighJump is red");
            console.log("Updated Score");
            console.log(score);
        }
        if(colour == "blue"){
            let points = score.blue;
            points += 100;
            score.blue = points;
            console.log("Winner of HighJump is blue");
            console.log("Updated Score");
            console.log(score);
        }
        if(colour == "green"){
            let points = score.green;
            points += 100;
            score.green = points;
            console.log("Winner of HighJump is green");
            console.log("Updated Score");
            console.log(score);
        }
        if(colour == "yellow"){
            let points = score.yellow;
            points += 100;
            score.yellow = points;
            console.log("Winner of HighJump is yellow");
            console.log("Updated Score");
            console.log(score);
        }
        AwardCeremony(score);
    }
}

function AwardCeremony(score){
    
    let sortedArr = Object.keys(score).sort((a, b) => score[b] - score[a]);
    let n = sortedArr.length;
    
    console.log(`${sortedArr[0]} Came First with ${score[sortedArr[0]]} points`);
    console.log(`${sortedArr[1]} Came Second with ${score[sortedArr[1]]} points`);
    console.log(`${sortedArr[2]} Came Third with ${score[sortedArr[2]]} points`);
    console.log(`${sortedArr[3]} Came Fourth with ${score[sortedArr[3]]} points`);
}

OpeningCeremony(score, Race100M);