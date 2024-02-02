
  //homework week 4
  function randomNumbers() {
    return Math.floor (Math.random() * 50 ) + 1;
  }

  let randomArray = [];
  for (let i = 0 ; i < 100 ; i++) {
    randomArray.push(randomNumbers());
  }

  let even = [];
  let odd = [];

  for (let i = 0; i < randomArray.length ; i++ ){
    if (randomArray[i] % 2 === 0) {
        even.push(randomArray[i]);
    } else {
        odd.push(randomArray[i]);
    }
  }

  console.log("random numbers", randomArray)
  console.log("even numbers", even)
  console.log("odd numbers", odd)
  

  let minEven = even[0]
  let maxEven = even[0]
  let totalEven = 0
  
  for (let i = 0 ; i <= even.length - 1 ; i++) {
      if (even[i] < minEven ) {
          minEven = even[i]
        }
        if (even[i] > maxEven ) {
            maxEven = even[i]
        }
        totalEven = totalEven + even[i]
    }
    let averageEven = totalEven / even.length


let minOdd = odd[0]
let maxOdd = odd[0]
let totalOdd = 0

for (let i = 0 ; i <= odd.length - 1 ; i++) {
    if (odd[i] < minOdd) {
        minOdd = odd[i]
        
    }
    if (odd[i] > maxOdd) {
        maxOdd = odd[i]
    }
    totalOdd = totalOdd + odd[i]
}
let averageOdd = totalOdd / odd.length


console.log("min even numbers", minEven)
console.log("min odd numbers", minOdd)
console.log("total even", totalEven)
console.log("average even", totalEven / even.length)

console.log("max even number", maxEven)
console.log("max odd numbers", maxOdd)
console.log("total odd", totalOdd)
console.log("average odd", totalOdd / odd.length)

if (minEven < minOdd) {
    console.log("min odd is larger than min even")
} else if (minEven > minOdd) {
    console.log("min even is larger than min odd")
} else {
    console.log("min even is equal to min odd")
}

if (maxEven < maxOdd) {
    console.log("max odd is larger than max even")
}  else if (maxEven > maxOdd) {
    console.log("max even is larger than max odd")
}  else {
    console.log("max even is equal to max odd")
}

if (totalEven < totalOdd) {
    console.log("total odd is larger than total even")
}  else if (totalEven > totalOdd) {
    console.log("total even is larger than total odd")
}  else {
    console.log("total even is equal to total odd")
}

if (averageEven < averageOdd) {
    console.log("average odd is larger than average even")
}  else if (averageEven > averageOdd) {
    console.log("average even is larger than average odd")
}  else {
    console.log("average even is equal to average odd")
}







