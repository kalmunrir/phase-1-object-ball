function gameObject() {
    return {
        home: {
            teamName: `Brooklyn Nets`,
            colors: [`Black`, `White`],
            players:{
                'Alan Anderson':{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans':{
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez':{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee':{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry':{
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },
        away: {
            teamName: `Charlotte Hornets`,
            colors: [`Turquoise`, `Purple`],
            players:{
                'Jeff Adrien':{
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo':{
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop':{
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon':{
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood':{
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    };
}

const game = gameObject();

function numPointsScored(name){
    for (const key in game){
        for (const key2 in game[key][`players`]){
            if (key2 === name){
                return game[key][`players`][key2][`points`];
            }
        }
    }
}

function shoeSize(playerName){
    for (const key in game){
        for (const key2 in game[key][`players`]){
            if (key2 === playerName){
                return game[key][`players`][key2][`shoe`];
            }
        }
    }
}

function teamColors(nameOfTeam) {
    for (const key in game) {
        if(game[key][`teamName`] === nameOfTeam){
            return game[key][`colors`];
        }
    }
}

function teamNames() {
    let teamNameList = [];

    for (const key in game) {
        teamNameList[teamNameList.length] = game[key][`teamName`];
    }

    return teamNameList;
}

function playerNumbers(nameOfTeam) {
    let listOfPlayerNumbers = [];

    for (const key in game){
        if (game[key][`teamName`] === nameOfTeam){
            for (const key2 in game[key][`players`]){
                listOfPlayerNumbers[listOfPlayerNumbers.length] = game[key][`players`][key2][`number`];
            }
        }
    }

    return listOfPlayerNumbers;
}

function playerStats(playerName){
    for (const key in game){
        for (const key2 in game[key][`players`]){
            if (key2 === playerName){
                return game[key][`players`][key2];
            }
        }
    }
}

function bigShoeRebounds(){
    let playerWithBiggestShoe = [``, 0, `key`];

    for (const key in game){
        for (const key2 in game[key][`players`]){
            if(game[key][`players`][key2][`shoe`] > playerWithBiggestShoe[1]){
                playerWithBiggestShoe[0] = key2;
                playerWithBiggestShoe[1] = game[key][`players`][key2][`shoe`];
                playerWithBiggestShoe[2] = key;
            }
        }
    }

    return game[playerWithBiggestShoe[2]][`players`][playerWithBiggestShoe[0]][`rebounds`];
}

function mostPointsScored() {
    let playerWithMostPoints = [``, 0];

    for (const key in game){
        for (const key2 in game[key][`players`]){
            if(game[key][`players`][key2][`points`] > playerWithMostPoints[1]){
                playerWithMostPoints[0] = key2;
                playerWithMostPoints[1] = game[key][`players`][key2][`points`]
            }
        }
    }
    
    return playerWithMostPoints[0];
}

function winningTeam() {
    let teamPoints = [0, 0];
    let teamPointCounter = 0;

    for(const key in game){
        for (const key2 in game[key][`players`]){
             teamPoints[teamPointCounter] += game[key][`players`][key2][`points`];
        }
        teamPointCounter++;
    }

    if(teamPoints[0] > teamPoints[1]){
        return Object.keys(game)[0];
    } else if (teamPoints[0] < teamPoints[1]){
        return Object.keys(game)[1];
    }else {
        return `Tie`;
    }
}

function playerWithLongestName () {
    let playerList = [];

    for (const key in game){
        for (const key2 in game[key][`players`])
        playerList[playerList.length] = key2;
    }

    for (const element in playerList){
        if(playerList[element].length > playerList[0].length){
            playerList[0] = playerList[element];
        }
    }

    return playerList[0];
}

function playerWithMostSteals() {
    let mostStealsPlayer = [``, 0];

    for (const key in game){
        for (const key2 in game[key][`players`]){
            if(game[key][`players`][key2][`steals`] > mostStealsPlayer[1]){
                mostStealsPlayer[0] = key2;
                mostStealsPlayer[1] = game[key][`players`][key2][`steals`]
            }
        }
    }

    return mostStealsPlayer[0];
}

function doesLongNameStealATon() {

    if(playerWithLongestName() === playerWithMostSteals()){
        return true;
    } else {
        return false
    }
}

// console.log(`NumPointsScored--------------------------------`)
// console.log(numPointsScored('Mason Plumlee'));
// console.log(numPointsScored('Brendan Haywood'));
// console.log(`Shoe Size--------------------------------------`)
// console.log(shoeSize('Mason Plumlee'));
// console.log(shoeSize('Brendan Haywood'));
// console.log(`Team Colors--------------------------------------`)
// console.log(teamColors('Brooklyn Nets'));
// console.log(teamColors('Charlotte Hornets'));
// console.log(`Team Names---------------------------------------`)
// console.log(teamNames());
// console.log(`Player Numbers-----------------------------------`)
// console.log(playerNumbers('Brooklyn Nets'));
// console.log(playerNumbers('Charlotte Hornets'));
// console.log(`playerStats--------------------------------------`)
// console.log(playerStats('Mason Plumlee'));
// console.log(playerStats('Brendan Haywood'));
// console.log(`bigShoeRebounds----------------------------------`)
// console.log(bigShoeRebounds());
// console.log(`mostPointsScored---------------------------------`)
// console.log(mostPointsScored());
// console.log(`winningTeam--------------------------------------`)
// console.log(winningTeam());
// console.log(`playerWithLongestName----------------------------`)
// console.log(playerWithLongestName());
// console.log(`doesLongNameStealATon----------------------------`)
// console.log(doesLongNameStealATon());