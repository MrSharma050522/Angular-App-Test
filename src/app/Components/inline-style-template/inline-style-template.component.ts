import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-style-template',
  template: `
    <h2 class="custom">
      Custom Inline Style & Template Component
    </h2>
    <h2 class="custom1">
      Custom Inline Style & Template Component
    </h2>
  `,
  styles: [
    `.custom{
      color : blue;
      background-color : yellow;
    }
    .custom1{
      color : red;
      background-color : blue ;
    }
    `
  ]
})
export class InlineStyleTemplateComponent {

}
