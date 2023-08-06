import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-sharing-child-parent',
  templateUrl: './data-sharing-child-parent.component.html',
  styleUrls: ['./data-sharing-child-parent.component.css']
})
export class DataSharingChildParentComponent {
  // @Input() sendDataHandler =  function (value:any) {
    
  // }
  @Output() sendDataHandler = new EventEmitter<string>();
  @Input() data = "";
}
