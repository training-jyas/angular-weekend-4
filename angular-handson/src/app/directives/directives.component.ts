import { Component } from "@angular/core";

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
    public value = '3';
    public students: any[] = [{
        name: 'Tausif',
        age: 20
    }, {
        name: 'Himanshu',
        age: 21
    }, {
        name: 'Shabith',
        age: 22
    }, {
        name: 'Vineet',
        age: 23
    }];
}
