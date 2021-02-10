function runFunction() {

  const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        alert(obj[key] * 2);
      } else {
        alert(obj[key]);
      }
    }
  }

  const result = multiplyNumeric(menu);

  return;
}



