function calculate() {
    var number = document.getElementById('number').value;
    var base = document.getElementById('base').value;
     
    if (number <= 0 || base <= 0) {
       alert('Bilangan harus positif!');
       return;
    }
     
    var result = Math.log(number) / Math.log(base);
    document.getElementById('result').textContent = 'logaritma basis ' + base + ' dari ' + number + ' adalah ' + result.toFixed(5);
   }