const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function testFunc() {
  return "hi"
}
function superbowlWin(record){
  let row = record.find(item => {
  let result = item.result === "W";
  return result;
  });
 return row;
}

superbowlWin(record);