import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-data-sharing-parent-child',
  templateUrl: './data-sharing-parent-child.component.html',
  styleUrls: ['./data-sharing-parent-child.component.css']
})
export class DataSharingParentChildComponent {
  @ Input() item : any = {}; 

}
