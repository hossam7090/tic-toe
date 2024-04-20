import { Component, input } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() value: 'X'|'O';
  constructor() {
    this.value = 'X'; 
  }
}
