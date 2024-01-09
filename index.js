function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}

console.log(saturdayFun());

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}


function wrapAdjective(parameter = "*"){
    return function(adjective = "special"){
        return `You are ${parameter}${adjective}${parameter}!`
    };
}

const encouragingPromptFunction = wrapAdjective("||")("a dedicated programmer");
console.log(encouragingPromptFunction);