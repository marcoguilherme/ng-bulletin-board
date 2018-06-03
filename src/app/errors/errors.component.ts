import { Component, Input } from "@angular/core";

@Component({
    selector: "errors",
    templateUrl: "./errors.component.html"
})

export class ErrorsComponent {

    @Input() public errors: string;
}