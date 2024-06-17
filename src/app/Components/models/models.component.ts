import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {
  @Input() Title = '';
  @Input() Company = '';
  @Input() Date = '';
  @Input() Place = '';
  @Input() calcDate = '';
}
