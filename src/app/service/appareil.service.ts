import {AppareilModel} from '../model/appareil.model';
import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    new AppareilModel(1, 'Tv'),
    new AppareilModel(2, 'Ordinateur'),
    new AppareilModel(3, 'Phone')
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

  add(name: string, status: boolean){
    const newId = this.appareils[(this.appareils.length - 1)].index + 1;
    this.appareils.push(new AppareilModel(newId, name, status));
    this.emitEppareilSubject();
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
