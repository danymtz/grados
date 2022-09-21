import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tercera';

  public flag: boolean = true;
  
  constructor(){}

  ngOnInit(): void {
    this.ocultar();
  }

  ocultar(){
    let boton = document.getElementById('btn');
    boton?.addEventListener("click",() => {
      this.flag = !this.flag;
    })
  }
}
