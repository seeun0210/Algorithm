function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridgeWeight = 0;
  const trucksOnBridge = [];

  while (truck_weights.length > 0 || trucksOnBridge.length > 0) {
    answer++;

    if (trucksOnBridge.length > 0) {
      const passedTruck = trucksOnBridge[0];
      if (answer - passedTruck[1] === bridge_length) {
        bridgeWeight -= passedTruck[0];
        trucksOnBridge.shift();
      }
    }

    if (truck_weights.length > 0 && bridgeWeight + truck_weights[0] <= weight) {
      const truckWeight = truck_weights.shift();
      bridgeWeight += truckWeight;
      trucksOnBridge.push([truckWeight, answer]);
    }
  }

  return answer;
}

// Test cases
console.log(solution(2, 10, [7, 4, 5, 6])); // Output: 8
console.log(solution(100, 100, [10])); // Output: 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // Output: 110
