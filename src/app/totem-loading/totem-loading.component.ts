import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-totem-loading',
  templateUrl: './totem-loading.component.html',
  styleUrls: ['./totem-loading.component.css']
})
export class TotemLoadingComponent implements OnInit {
  constructor(private router: Router) {}

  // Iniciando a função ao iniciar a página
  ngOnInit(): void{
      this.contador();  
  };

  // Função para simular a inserção das garrafas no totem
  contador() {
    // manipulando a div com o ID contador
    const div = document.getElementById('contador');
    const numTexto = '0';
    const texto = document.createTextNode(numTexto);
    div?.appendChild(texto);
    let numcontador = 1;
    let erroOcorreu = false;

    // Setando um intervalo de tempo para que os números sejam alterados na tela
    const intervalId = setInterval(() => {
      // delimitando em 4 garrafas
      if (numcontador <= 4) {
        if (div) {
          div.textContent = numcontador.toString();

          // simulando um erro de inserção, ao atingir a quantidade de 3 garrafas, apresento o erro e retorno para 2 garrafas
          // junto com um contador do erro, para identificar se o erro já ocorreu
          if (numcontador == 3 && !erroOcorreu) {
            const divload = document.getElementById('load');
            const diverror = document.getElementById('error');

            if (divload && diverror) {
              divload.classList.add('desativar');
              diverror.classList.remove('desativar');
              numcontador = 2;
              erroOcorreu = true;
              div.textContent = numcontador.toString();
              const divTexto = document.getElementById('textoerror');
              if (divTexto) {
                divTexto.textContent = 'Insira novamente a garrafa!';
              }
            }
          } else {
            const divload = document.getElementById('load');
            const diverror = document.getElementById('error');

            if (divload && diverror) {
              divload.classList.remove('desativar');
              diverror.classList.add('desativar');
            }
          }
          numcontador++;
        }
      } else {
        clearInterval(intervalId);
        const btn = document.getElementById('finalizar');
        btn?.classList.remove('disabled');
      }
    }, 2000);
  }

  // utilizando a biblioteca do sweetalert2
  qrCode(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-4',
        cancelButton: 'btn btn-danger ms-4'
      },
      buttonsStyling: false
    })
    // Validando a inserção das garrafas e questionando o usuário sobre qual decisão ele quer tomar
    swalWithBootstrapButtons.fire({
      title: 'Garrafas inseridas com sucesso!',
      text: "Deseja imprimir ou escanear o qrCode?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Escanear',
      cancelButtonText: 'Imprimir',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'QrCode',
          text: 'Após escanear, os seus pontos estarão disponíveis em nosso App!',
          imageUrl: 'https://i.ibb.co/RQj4qZ4/qrcode.png',
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: 'Custom image',
        }).then((resultado) => {
          if(resultado.isConfirmed){
            this.router.navigate(['/totem-fim']);
          }
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Obrigado!',
          'Imprimindo o Qr Code!',
          'warning'
        ).then((resultado) => {
          if(resultado.isConfirmed){
            this.router.navigate(['/totem-fim']);
          }
        })
      }
    })
  }

}
