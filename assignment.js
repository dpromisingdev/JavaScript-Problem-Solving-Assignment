/* *Task 1: Converting feet to mile */
function feetToMile(quantity) {
    const mile = quantity / 5280;
    return `${quantity} feet is ${mile} miles`
}

/* *Task 2: Calculationg wood to make chair, table and bed. */
function woodCalculator(chair, table, bed) {
    const chairCount = chair * 12;
    const tableCount = table * 18;
    const bedCount = table * 26;
    return chairCount + tableCount + bedCount;
}

/* *Task 3: Calculationg bricks. */
function brickCalculator(floor) {
    
}

/* *Task 4: Finding the smallest friend. */
function tinyFriend(arr) {
    let name = arr[0].length;
    let shortestName;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length > length) {
            shortestName = arr[i];
        }
    }
    return shortestName;
}