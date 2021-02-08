// inp: arr(of nums)
// out: num

// algo
// 1. itarate array
// 2. if index elem not equal eleme return index
// debugger;
function nextId(ids) {
  const sorted = ids.sort((a, b) => a - b);

  if (sorted[0] !== 0) {
    return 0;
  }
  for (let i = 1; i < sorted.length; i++) {
    const curEl = sorted[i - 1];
    const nextEl = sorted[i];

    if (nextEl - curEl > 1) {
      return curEl + 1;
    }

    curEl = sorted[i]
  }
  
  return sorted[sorted.length - 1] + 1;
}

console.log(nextId([0,1,2,4,5,6]));
