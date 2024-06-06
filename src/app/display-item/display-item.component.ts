import { Component, Input } from '@angular/core';
import { faYoutube,faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAtom,faDatabase,faServer,faFile } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrl: './display-item.component.css',
})
export class DisplayItemComponent {
  @Input() src = "";
  @Input() desc ="";
  @Input() name = "";
  @Input() iconType: string = 'youtube'; // Default to YouTube icon type

  // Define properties for different icons
  faYoutube = faYoutube;
  faAtom= faAtom;
  faDatabase = faDatabase;
  faTwitter = faTwitter;
  faServer = faServer;
  faFile = faFile

  // Property to hold the currently selected icon
  currentIcon: any;

  constructor() {
    this.setCurrentIcon();
  }

  ngOnChanges() {
    // Update the icon whenever the iconType input changes
    this.setCurrentIcon();
  }

  // Method to set the current icon based on the icon type
  setCurrentIcon() {
    switch(this.iconType) {
      case 'database':
        this.currentIcon = this.faDatabase;
        break;
      case 'atom':
        this.currentIcon = this.faAtom;
        break;
      case 'twitter':
        this.currentIcon = this.faTwitter;
        break;
        case 'file':
          this.currentIcon = this.faFile;
          break;
      case 'server':
          this.currentIcon = this.faServer;
          break;
      // Add more cases for other icons as needed
      default:
        // Set a default icon if the iconType doesn't match any case
        this.currentIcon = this.faAtom;
        break;
    }
  }
}
