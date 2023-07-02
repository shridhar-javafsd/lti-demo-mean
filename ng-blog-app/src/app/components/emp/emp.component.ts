import { Component } from '@angular/core';

@Component({
    selector: 'app-emp',
    // template: '<p>Emp component works!</p> ',
    templateUrl: './emp.component.html'
})
export class EmpComponent {

    // reference - 
    // https://angular.io/guide/pipes
    // https://angular.io/guide/pipes-overview

    empData = {
        firstName: 'Sonu',
        salary: 95000,
        bonus: 15,
        birthDate: new Date(1947, 7, 15),
        // add other fields 
    };

}

