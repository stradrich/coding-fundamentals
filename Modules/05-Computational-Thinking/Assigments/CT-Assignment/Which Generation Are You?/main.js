const generation = {
    "-3": ["great grandfather","great grandmother"],
    "-2": ["grandfather","grandmother"],
    "-1": ["father","mother"],
    "0": ["me!","me!"],
    "1": ["son","daugther"],
    "2": ["grandson","granddaughter"],
    "3": ["great grandson","great granddaugther"],
}

function ancestorDescendant(x,y) {
    for (let i = 0; i < generation.length; i++) {
        x == "m" ? generation[0][0]: generation[0][1] 
    }      
    }




console.log((2,"f") == "grandfather")
console.log((-3,"m") == "great grandfather")
console.log((1,"f") == "daugther")