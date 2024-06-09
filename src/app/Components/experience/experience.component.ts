import { Component, Input } from '@angular/core';
import { Experience } from '../../Shared/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
@Input() Title = '';
  @Input() Company = '';
  @Input() Date = '';
  @Input() Place = '';
  @Input() calcDate = '';
  @Input() editFunction!: (experience: Experience, key: string) => void;
  @Input() deleteFuncion!: (key: string) => void;

}
