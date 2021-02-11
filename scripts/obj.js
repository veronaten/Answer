function runFunction() {

  const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
    
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      alert(menu[key] * 2);
    } else {
      alert(menu[key]);
    }
  }
}






