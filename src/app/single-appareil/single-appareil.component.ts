import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../service/appareil.service';
import {ActivatedRoute} from '@angular/router';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name = 'NA';
  status: string;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const appareil = this.appareilService.getBydId(+id);
    this.name = appareil.name;
    this.status = appareil.status ? 'Allumé' : 'Eteint';
  }

}
