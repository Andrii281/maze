const checkNeighbors = (grid, i = 0, j = 0, stack = []) => {
  let neighbors = [];
  let top = grid[i]?.[j - 1];
  let right = grid[i + 1]?.[j];
  let bottom = grid[i]?.[j + 1];
  let left = grid[i - 1]?.[j];
  
  if(top && !top.visited) {
    neighbors.push({i: i, j: j - 1, direction: 0});
  }
  if(right && !right.visited) {
    neighbors.push({i: i + 1, j: j, direction: 1});
  }
  if(bottom && !bottom.visited) {
    neighbors.push({i: i, j: j + 1, direction: 2});
  }
  if(left && !left.visited) {
    neighbors.push({i: i - 1, j: j, direction: 3});
  }
  grid[i][j].visited = true;
  if(neighbors.length > 0) {
    let r = Math.floor(Math.random() * neighbors.length);
    if(neighbors[r].direction === 0 || neighbors[r].direction === 3) {
      grid[neighbors[r].i][neighbors[r].j].walls[(neighbors[r].direction + 2) % 4] = false;
    } else {
      grid[i][j].walls[neighbors[r].direction] = false;
    }
    return (checkNeighbors(grid, Number(neighbors[r].i), Number(neighbors[r].j), [...stack, grid[i][j]]))
  }
  const lastElement = stack.pop();
  if(lastElement !== undefined) {
    return checkNeighbors(grid, lastElement.row, lastElement.pos, stack)
  }
  return undefined;
}

export const createMazeMap = (width, heigth) => {
  const arr = [];

  for(let i = 0; i < heigth; i++) {
    arr[i] = [];
    for(let y = 0; y < width; y++) {
      arr[i][y] = {
        id: i * width + y,
        walls: [true, true, true, true], 
        visited: false, 
        row: i, 
        pos: y,
      }
    }
  }

  checkNeighbors(arr);

  return [].concat(...arr);
}