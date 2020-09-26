import { Component, Input } from "@angular/core";
import { Error} from "src/app/core/components/errors/error";

@Component({
    selector: 'bs-errors',
    templateUrl: './errors.component.html'
})
export class ErrorsComponent {

    @Input() private errors: Error[] = [];

}