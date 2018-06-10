import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-alert-message',
    templateUrl: './app-alert-message.component.html'
})

export class AppAlertMessageComponent {

    @Input() public alertMessage: string;
    @Input() public alertType: string;

}
