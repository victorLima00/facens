import { Component } from '@angular/core';
import { faHeartPulse, faChartLine, faBoxesStacked, faCity, faArrowsRotate, faEarthAmericas, faComments, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faHeartPulse = faHeartPulse;
  faChartLine = faChartLine;
  faBoxesStacked =faBoxesStacked;
  faCity = faCity;
  faArrowsRotate = faArrowsRotate;
  faEarthAmericas = faEarthAmericas;
  faComments = faComments;
  faComment = faComment;
  imagemSrc = '../../assets/imagem1.jpg';

  
  bloco1() {
    this.imagemSrc = '../../assets/imagem1.jpg';


    const blocoex1 = document.getElementById('card-ex1');
    const blocoint1 = document.getElementById('card-inter1');
    const blocoex2 = document.getElementById('card-ex2');
    const blocoint2 = document.getElementById('card-inter2');
    const blocoex3 = document.getElementById('card-ex3');
    const blocoint3 = document.getElementById('card-inter3');

    if(blocoex1 && blocoint1 && blocoex2 && blocoint2 && blocoex3 && blocoint3 ){
      blocoex1.classList.add('card-ex-ativo');
      blocoint1.classList.add('card-inter-ativo');
      blocoex2.classList.remove('card-ex-ativo');
      blocoint2.classList.remove('card-inter-ativo');
      blocoex3.classList.remove('card-ex-ativo');
      blocoint3.classList.remove('card-inter-ativo');
      }

  }

  bloco2() {
    this.imagemSrc = '../../assets/imagem2.jpg';


    const blocoex1 = document.getElementById('card-ex1');
    const blocoint1 = document.getElementById('card-inter1');
    const blocoex2 = document.getElementById('card-ex2');
    const blocoint2 = document.getElementById('card-inter2');
    const blocoex3 = document.getElementById('card-ex3');
    const blocoint3 = document.getElementById('card-inter3');

    if(blocoex1 && blocoint1 && blocoex2 && blocoint2 && blocoex3 && blocoint3 ){
      blocoex1.classList.remove('card-ex-ativo');
      blocoint1.classList.remove('card-inter-ativo');
      blocoex2.classList.add('card-ex-ativo');
      blocoint2.classList.add('card-inter-ativo');
      blocoex3.classList.remove('card-ex-ativo');
      blocoint3.classList.remove('card-inter-ativo');
      }

  }

  bloco3() {
    this.imagemSrc = '../../assets/imagem3.jpg';

      const blocoex1 = document.getElementById('card-ex1');
      const blocoint1 = document.getElementById('card-inter1');
      const blocoex2 = document.getElementById('card-ex2');
      const blocoint2 = document.getElementById('card-inter2');
      const blocoex3 = document.getElementById('card-ex3');
      const blocoint3 = document.getElementById('card-inter3');
  
      if(blocoex1 && blocoint1 && blocoex2 && blocoint2 && blocoex3 && blocoint3 ){
        blocoex1.classList.remove('card-ex-ativo');
        blocoint1.classList.remove('card-inter-ativo');
        blocoex2.classList.remove('card-ex-ativo');
        blocoint2.classList.remove('card-inter-ativo');
        blocoex3.classList.add('card-ex-ativo');
        blocoint3.classList.add('card-inter-ativo');
        }
  }
}

