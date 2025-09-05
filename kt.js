function boardRules(arr) {
    if(arr[0] > 7 || arr[0] < 0) {
        return false;
    }
    return true;
}

function knightMoves(start, end) {
    let movementCoords = [];

    movementCoords.push([start[0] + 1, start[1]], [start[0], start[1] + 1], [start[0] - 1, start[1]], [start[0], start[1] - 1]);
    
    for(let i = 0; i < movementCoords.length; i++) {
        if(movementCoords[i][0] > 7 ||  movementCoords[i][0] < 0){
            movementCoords.splice(i, 1)
        }
        if(movementCoords[i][1] > 7 || movementCoords[i][1] < 0){
            movementCoords.splice(i, 1);
        }
    }
    let q = [];
    let visited = [];

    q.push(start);
    while(q.length > 0) {
        for(const i of movementCoords) {
            let path = q.shift();
            let [x,y] = path;
            visited.push(path);

            let newX = x + i[0];
            let newY = y + i[1];

            if(!boardRules([newX, newY])) return visited.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse);

            if(newX === end[0] && newY === end[1]) {
                visited.push(end);
                return visited.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse)
            }

            q.push([...path]);
            q.push([newX, newY]);
        }
    }
}

console.log(knightMoves([0,0],[3,3]));