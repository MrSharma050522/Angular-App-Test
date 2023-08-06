import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  templateUrl: './inline-style.component.html',
  styles: [
    `
			.custom {
				color: black;
				background-color: red;
			}
      .custom1{
        color:red;
        background-color:aqua;
      }
		`
  ]
})
export class InlineStyleComponent {

}
