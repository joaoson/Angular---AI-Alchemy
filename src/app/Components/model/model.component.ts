import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent {
  @Input() Title = '';
  @Input() Company = '';
  @Input() Date = '';
  @Input() Url = '';
  @Input() Likes = '';
  @Input() User: string | undefined = '';
}
