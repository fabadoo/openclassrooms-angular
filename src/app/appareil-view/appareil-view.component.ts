import { Component, OnInit } from '@angular/core';
import {AppareilModel} from '../model/appareil.model';
import {AppareilService} from '../service/appareil.service';
import {Subscription} from 'rxjs';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: AppareilModel[];
  appareilsSubscription: Subscription;

  isAuth: Boolean = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  ngOnInit() {
    this.appareilsSubscription = this.appareilService.appareilSubject
      .subscribe((appareils) => {
          this.appareils = appareils;
      });
    this.appareilService.emitEppareilSubject();
  }

  onAllumerTout() {
    if (confirm('Etes-vous sûr de vouloir allumer tous vos appareils ?')) {
      this.appareilService.allumerTout();
    } else {
      return null;
    }
  }

  onEteintTout() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.eteintTout();
    } else {
      return null;
    }
  }
}
