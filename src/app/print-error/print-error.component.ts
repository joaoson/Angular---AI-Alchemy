import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-print-error',
  templateUrl: './print-error.component.html',
  styleUrl: './print-error.component.css'
})
export class PrintErrorComponent {
  @Input() control: any; // Accept the form control

}
