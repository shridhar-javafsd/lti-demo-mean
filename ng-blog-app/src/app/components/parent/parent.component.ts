import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parentDataInParent: string = 'Sonu';

  childDataInParent: string = '';

  getDataFromChild(cdtp: string) {
    console.log(cdtp);
    this.childDataInParent = cdtp;
  };


}

