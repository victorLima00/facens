import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-totem-id',
  templateUrl: './totem-id.component.html',
  styleUrls: ['./totem-id.component.css']
})

export class TotemIdComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.telaTermos();
  }

  telaTermos(){
    Swal.fire({
      title: '<strong>Termos de uso</strong>',
      icon: 'info',
      html:
      '<div class="form-floating">' +
      '<textarea class="form-control" placeholder="" id="floatingTextarea2" style="height: 200px" readonly>'+
      'Bem-vindo ao nosso serviço de totem de garrafas de vidro.'+ 
      '&#10;&#10;Antes de utilizar este serviço, solicitamos que leia atentamente os seguintes termos de uso.'+ 
      '&#10;&#10;Ao usar nosso totem de garrafas de vidro, você concorda com as condições a seguir:'+
      '&#10;&#10;Cadastro no Aplicativo:'+
      '&#10;&#10;Para utilizar o totem de garrafas de vidro, é necessário ter um cadastro ativo em nosso aplicativo. Seu cadastro é pessoal e intransferível.'+
      '&#10;&#10;Integridade das Garrafas:'+
      '&#10;&#10;Você só pode depositar garrafas de vidro que não estejam quebradas ou danificadas. Garrafas quebradas não serão aceitas.'+
      '&#10;&#10;Remoção de Rótulos:'+
      '&#10;&#10;Antes de depositar uma garrafa de vidro no totem, certifique-se de que ela não possua rótulos ou adesivos. Garrafas com rótulos não serão aceitas.'+
      '&#10;&#10;Material Aceito:'+
      '&#10;&#10;O totem aceitará apenas garrafas de vidro. Outros tipos de materiais, como plástico ou metal, não serão aceitos.'+
      '&#10;&#10;Somente garrafas vazias podem ser depositadas no totem. Garrafas com líquido ou qualquer conteúdo em seu interior não serão aceitas.'+
      '&#10;&#10;Monitoramento por Vídeo:'+
      '&#10;&#10;Todo o movimento relacionado ao totem de garrafas de vidro será filmado e monitorado. Qualquer dano causado à máquina será vinculado ao usuário responsável.'+
      '&#10;&#10;Validação da Garrafa:'+
      '&#10;&#10;A garrafa só será validada quando você a soltar completamente dentro do totem. Certifique-se de soltar a garrafa adequadamente para que a validação seja concluída.'+
      '&#10;&#10;Respeito às Normas Locais:'+
      '&#10;&#10;Ao utilizar o totem, você concorda em seguir todas as leis e regulamentações locais relacionadas à reciclagem de garrafas de vidro.'+
      '&#10;&#10;Uso Responsável:'+
      '&#10;&#10;Utilize o totem de forma responsável e respeitosa. Não deposite garrafas indevidas, lixo ou materiais que não se encaixem nos critérios estabelecidos.'+
      '&#10;&#10;Rescisão do Acesso:'+
      '&#10;&#10;Reservamo-nos o direito de rescindir o acesso ao totem a qualquer usuário que viole os termos de uso ou não cumpra as condições estabelecidas.'+
      '&#10;&#10;Agradecemos por utilizar nosso serviço de totem de garrafas de vidro e por contribuir para a preservação do meio ambiente. Ao utilizar o totem, você concorda em respeitar os termos e condições acima. Se tiver alguma dúvida ou preocupação, entre em contato conosco.'+
      '&#10;&#10;Estes termos de uso estão sujeitos a alterações, e é responsabilidade do usuário verificar periodicamente as atualizações.</textarea>' +
      '</div>',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      showConfirmButton: false
    })
  }

  validaLogin() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'ID confirmado!',
      showConfirmButton: false,
      timer: 1500
    })
    setTimeout(() => {
      this.router.navigate(['/totem-loading']);
    }, 1600);
  }
    
}
