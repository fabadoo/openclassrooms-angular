import {Appareil} from '../model/appareil';
import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    new Appareil(1, 'Tv'),
    new Appareil(2, 'Ordinateur'),
    new Appareil(3, 'Phone')
  ];

  emitEppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAll() {
    return this.appareils;
  }

  getBydId(index: number) {
    return this.appareils.find((obj) => obj.index === index);
  }

  switchOne(index: number) {
    const item = this.appareils.find((obj) => obj.index === index);
    item.status = !item.status;
    this.emitEppareilSubject();
  }

  allumerTout() {
    for (let appareil of this.appareils) {
      appareil.status = true;
    }
    this.emitEppareilSubject();
  }

  eteintTout() {
    for (let appareil of this.appareils) {
      appareil.status = false;
    }
    this.emitEppareilSubject();
  }
}
