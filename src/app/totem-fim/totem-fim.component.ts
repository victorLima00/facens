import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-totem-fim',
  templateUrl: './totem-fim.component.html',
  styleUrls: ['./totem-fim.component.css']
})
export class TotemFimComponent {
  constructor(private router: Router) {}

  ngOnInit(): void{
    setTimeout(() => {
      this.router.navigate(['/totem-pages']);
    }, 3000);
};

}
