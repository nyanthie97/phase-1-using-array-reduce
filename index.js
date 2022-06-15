const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = (firstBatches, secondBatches) => firstBatches + secondBatches
let totalBatteries = batteryBatches.reduce(reducer)
