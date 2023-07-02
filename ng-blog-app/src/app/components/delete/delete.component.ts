import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-delete',
    templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {

    someData = 'Sonu';
    shouldBeDisabled = true;
    userName = '';
    shouldShow: boolean = false;

    myFriends = ['Sonu', 'Monu', 'Tonu'];


    // enterUserName = (evt: any) => {
    //     this.userName = evt.target.value;
    //     console.log(evt.target.value);
    // };

    actOnClick = () => {
        console.log('clicked!');
    };

    ngOnInit(): void {
        setTimeout(() => {
            this.shouldBeDisabled = false;
            this.shouldShow = true;
        }, 3000);
    }
}


// lifecycle hooks

// data binding -

// interpolation {{}} - component to template
// property binding []=""  - component to template

// event binding ()="" - template to component
// two-way binding [()]="" - two way

// connect to backend service

// directives in angular

// decorators in angular
// lifecycle hooks

// services in angular
// routing in angular


// testing

// directives == instruction to DOM

// types of directives  - 3
// components
// strctural directives - ngIf, ngFor
// attribute directives - ngModel, ngClass

// create new component BlogList
// create new service BlogService
// display 100 blog titles in the bloglist template 


