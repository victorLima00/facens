import { Component } from '@angular/core';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-colaborador',
  templateUrl: './login-colaborador.component.html',
  styleUrls: ['./login-colaborador.component.css']
})
export class LoginColaboradorComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  faEnvelope = faEnvelope;
  faKey = faKey;

}
