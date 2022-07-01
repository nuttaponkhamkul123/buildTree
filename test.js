const data = [
  { id: 1, value: "something 1", parent: null },
  { id: 2, value: "something 2", parent: 1 },
  { id: 3, value: "something 2", parent: 2 },
  { id: 4, value: "something 2", parent: null },
  { id: 5, value: "something 2", parent: 1 },
  { id: 6, value: "something 2", parent: 5 },
  { id: 7, value: "something 2", parent: 4 },
  { id: 8, value: "something 2", parent: 7 },
  { id: 9, value: "something 2", parent: 8 }

];
console.log(data);
let globalData = [];

function buildTreeV2(data) {
  for (let index = 0 ; index < data.length ; index++) {
    if (data[index].child === undefined) {    
      data[index]['child'] = [];
    }
    const parent = data[data.findIndex(item=> item.id === data[index].parent)];
    if (data[index].parent) {
      parent.child.push(data[index]);
    }
  }
  return data.filter(item => item.parent === null);
}
const result = buildTreeV2(data);
console.log("result", result);
