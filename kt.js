function boardRules(x, y) {
    if(x > 7 || x < 0) return false;
    if(y > 7 || y < 0) return false;
    return true;
}

function knightMoves(start, end) {
    let movementCoord = [
        [1,2],
        [2,1],
        [-1,2],
        [2,-1],
        [-2,1],
        [1,-2],
        [-1,-2],
        [-2,-1]
    ]

    let q = [];
    let visited = [];

    q.push([start]);

    while(q.length > 0) {
        let path = q.shift();
        let [x,y] = path[path.length - 1];

        for(let [dx, dy] of movementCoord) {

            let newX = x + dx;
            let newY = y + dy;

            // Check if newX, newY doesn't violate board rules
            if(!boardRules(newX, newY)) continue;
            
            // Check if newX, newY already been visited
            if(visited.some(([dx, dy]) => dx === newX && dy === newY)) continue;

            let newPath = [...path, [newX, newY]];

            if(newX === end[0] && newY === end[1]) {
                return newPath;
            }

            q.push(newPath);
            visited.push([newX, newY]);
        }
    }
}

console.log(knightMoves([0,0],[7,7]));