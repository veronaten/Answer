// Мое решение:
function pow(x,n) {
    return x**n;
    }
    
    let x = +prompt (`Введите число х`, '1');
    let n = +prompt (`Введите число n`, '1');
    let result = pow(x,n);
    
    if (n >= 1) {
      alert (result);
    } else {
      alert (`n должно быть целым и больше 1`);
    }
    