import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth: false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils = [
    {name: 'Tv', status: false},
    {name: 'Ordi', status: false},
    {name: 'Phone', status: true}
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  onToutAllumer() {
    this.appareils.forEach(app => app.status = true );
  }

}
