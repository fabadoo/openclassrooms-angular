import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilService} from '../service/appareil.service';
import {Router} from '@angular/router';
import {s, st} from '@angular/core/src/render3';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = false;

  constructor(private appareilService: AppareilService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.add(name, status);
    this.router.navigate(['/appareils']);
  }
}
