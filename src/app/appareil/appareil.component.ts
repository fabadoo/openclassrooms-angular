import { Component, Input, OnInit } from '@angular/core';
import {AppareilModel} from '../model/appareil.model';
import {AppareilService} from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil: AppareilModel;

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit() {
  }

  switch() {
    this.appareilService.switchOne(this.appareil.index);
  }

}
