function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(visual = "*") {
    return function(sp = "special") {
        return `You are ${visual}${sp}${visual}!`
    }
}