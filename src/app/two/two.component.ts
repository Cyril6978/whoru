import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  constructor (public router: Router) {}

}
