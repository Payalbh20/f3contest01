function SchoolsSportsDay() {
    let score = {red:0,blue:0,green:0,yellow:0};
  
    function OpeningCeremony(sports, callbackFnc) {
      console.log("Let the games begin");
      setTimeout(() => {
        Race100M(sports, callbackFnc);
      }, 1000);
    }
  
    function Race100M(sports, callbackFnc) {
      console.log("Race 100M has started!");
      let times = {red: Math.floor(Math.random() * 6) + 10,
                   blue: Math.floor(Math.random() * 6) + 10,
                   green: Math.floor(Math.random() * 6) + 10,
                   yellow: Math.floor(Math.random() * 6) + 10};
      console.log("Race 100M results:", times);
      let sortedTimes = Object.entries(times).sort((a,b) => a[1] - b[1]);
      score[sortedTimes[0][0]] += 50;
      score[sortedTimes[1][0]] += 25;
      console.log("Race 100M scores:", score);
      setTimeout(() => {
        LongJump(sports, callbackFnc);
      }, 3000);
    }
  
    function LongJump(sports, callbackFnc) {
      console.log("Long Jump has started!");
      let winner = Object.keys(score)[Math.floor(Math.random() * 4)];
      score[winner] += 150;
      console.log(`${winner} has won the Long Jump!`);
      console.log("Long Jump scores:", score);
      setTimeout(() => {
        HighJump(sports, callbackFnc);
      }, 2000);
    }
  
    function HighJump(sports, callbackFnc) {
      console.log("High Jump has started!");
      let winner = prompt("What colour secured the highest jump?");
      if (winner === null || winner === "") {
        console.log("Event was cancelled");
      } else if (Object.keys(score).includes(winner)) {
        score[winner] += 100;
        console.log(`${winner} has won the High Jump!`);
      } else {
        console.log("Invalid input");
      }
      console.log("High Jump scores:", score);
      AwardCeremony(score);
    }
  
    function AwardCeremony(score) {
      console.log("Award Ceremony has started!");
      let sortedScores = Object.entries(score).sort((a,b) => b[1] - a[1]);
      console.log(`${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`);
      console.log(`${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`);
      console.log(`${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`);
    }
  
    OpeningCeremony(score, function(sports) {
      Race100M(sports, function(sports) {
        LongJump(sports, function(sports) {
          HighJump(sports, function(sports) {
            AwardCeremony(sports);
          });
        });
      });
    });
  }
  
  SchoolsSportsDay();