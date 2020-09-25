import { Component, Input } from "@angular/core";

@Component({
    selector: 'bs-errors',
    templateUrl: './errors.component.html'
})
export class ErrorsComponent {

    @Input() private errors: Error[] = [];

}