import { Component, Input,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-section-separator',
  templateUrl: './section-separator.component.html',
  styleUrl: './section-separator.component.css'
})
export class SectionSeparatorComponent {

 @Input() desc = "";
 @Input() id = "";
 @Input() iconType: string = 'zero'; // Default to YouTube icon type

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.setCurrentIcon();
  }

  ngOnChanges() {
    // Update the icon whenever the iconType input changes
    this.setCurrentIcon();
  }


  // Method to set the current icon based on the icon type
  setCurrentIcon() {
    if (isPlatformBrowser(this.platformId)) {
      let idTemp = this.id;
      let element = document.getElementById(this.id)?.firstElementChild
      switch(this.iconType) {
        case 'zero':
          element?.classList.add("zero");
          break;
        case 'one':
          element?.classList.add("one");
          break;
        case 'two':
          element?.classList.add("two");
          break;
        case 'three':
          element?.classList.add("three");
          break;
        case 'four':
          element?.classList.add("four");
          break;
        // Add more cases for other icons as needed
        default:
          // Set a default icon if the iconType doesn't match any case
          break;
      }}
    }
}
