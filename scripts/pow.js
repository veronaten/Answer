function pow(x,n) {
  let mult = x;

  for (let i = 1; i < n; i++ ) {
    mult *= x;
  }

  return mult;
}
    
function runPow() {
  const x = Number(prompt (`Введите число х`, '1'));
  const n = Number(prompt (`Введите число n`, '1'));
  const result = pow(x,n);
    
  if (n >= 1) {
      alert (result);
  } else {
      alert (`n должно быть целым и больше 1`);
  }
}