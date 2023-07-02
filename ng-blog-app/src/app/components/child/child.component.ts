import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentDataInChild: string = '';

  childDataInChild: string = 'Monu';

  @Output()
  sendDataToParent = new EventEmitter<string>();

  cickToSend(cdtp: string) {
    console.log(cdtp);
    this.sendDataToParent.emit(cdtp);
  };

}

