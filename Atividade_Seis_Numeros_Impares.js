// cls para limpar o terminal

function Num_Impar(n) {
    let i = 0;
    let n_Novo = n;
  
    while (i < 6) {
      if (n_Novo % 2 !== 0) {
        console.log(n_Novo);
        i++;
      }
  
      n_Novo++;
    }
  }
  
  Num_Impar(5);
  