import { Component } from '@angular/core';
import {Post} from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
    'et dolore magna aliqua. Ut enim ad minim veniam, quis';

  posts = [
    new Post('Mon premier post', this.text),
    new Post('Mon 2eme post', this.text),
    new Post('Encore un post', this.text)
  ];

  constructor() {
  }

}
