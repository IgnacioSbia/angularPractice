import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button ngClass="squareButton">{{value}}</button>
  `,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | any;

}
