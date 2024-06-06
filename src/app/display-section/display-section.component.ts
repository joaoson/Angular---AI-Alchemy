import { Component } from '@angular/core';
import { faAtom } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-display-section',
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.css'
})
export class DisplaySectionComponent {
  First = {
    "name":"Neural Networks",
    "src":"../../assets/images/atom-solid.svg",
    "icon":"atom",
    "description":"Use Neural networks in your projects and elevate your prospects"
  }
  Second = {
    "name":"Databases",
    "src":"../../assets/images/database-solid.svg",
    "icon":"database",
    "description":"Access databases from all around the internet and gather access to milions of data"
  }
  Third = {
    "name":"Webservers",
    "src":"../../assets/images/server-solid.svg",
    "icon":"server",
    "description":"Deploy your applications into our budget friendly servers and give a users a good experience"
  }

  Fourth = {
    "name":"Code Repository",
    "src":"../../assets/images/file-code-solid.svg",
    "icon":"file",
    "description":"Access coding files from multiple developers through out the world and improve your skills"
  }
}
