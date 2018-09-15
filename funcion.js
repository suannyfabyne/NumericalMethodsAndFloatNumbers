function funcion(func, x) {
    return nerdamer(func).buildFunction().call(undefined, x);
}
  

function derivada(x){
  var func = document.getElementsByName("func")[0].value.trim();
  return nerdamer('diff(' + func + ')').buildFunction().call(undefined, x);
}
  

function procesar(formulario){
  var i = 0;
  var func = document.getElementsByName("func")[0].value;
  
  var err, x_1, x = parseFloat(formulario.x.value);

  var table = document.getElementById('tabela-numValores');
  var row;
  table.innerHTML="<tr></tr><tr></tr>";
  do {
      //x_1 = x;
      var x_1 = x - funcion(func, x) / derivada(x);
      var e = Math.abs(x-x_1);
      x = x_1;
      err = Math.abs((x - x_1) / x);
      
      row = table.insertRow(i+1);
      row.innerHTML = '<td class="col-md-6">x<sub>' + i + '</sub></td><td class="col-md-6">' + x_1 + '</td>'; 

    i++;
      //I imagine that this is your safety so I would implement it like this
      if(i > 100) break;
  } while (e > 0.01);
  return false;
}
