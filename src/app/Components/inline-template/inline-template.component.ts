import { Component } from '@angular/core';

@Component({
  selector: 'app-inline-template',
  template: `
    <h2 class="custom">
      Custom Inline Template Component1
    </h2>
    <h2 class="custom1">
      Custom Inline Template Component2
    </h2>
  `,
  styleUrls: ['./inline-template.component.css']
})
export class InlineTemplateComponent {

}
