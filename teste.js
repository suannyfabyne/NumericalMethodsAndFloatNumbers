convert();


    function convert() {
      base = 10;
      ndigitos = 3;
      limInf = -1;
      limSup = 1;

      var cardinalidade = parseInt(2*(base-1)*(Math.pow(base,ndigitos-1))*(limSup - limInf + 1) +1);

      var resultado = cardinalidade.toString();

      var numValores = new Array(cardinalidade);
      var aux = 0;

      var istr;
      var jstr;
      var kstr;
      var zstr;

      if(ndigitos == 3){
        for(i = limInf; i < limSup; i++){           
            istr = i.toString();

            for(j= 1; j < base; j++)
            {
                jstr = j.toString();

                for(k=0 ; k < base; k++)
                {
                    kstr = k.toString();

                    for(z=0; z < base; z++)
                    {
                        zstr = z.toString();
                        numValores[aux]= jstr + kstr + zstr + " x 10^" + istr;
                        aux++;
                    }
                }
            }
        }
      }
    }
