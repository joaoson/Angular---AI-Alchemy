import { Component, OnInit, Inject, PLATFORM_ID,AfterViewInit  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-client-interface',
  templateUrl: './client-interface.component.html',
  styleUrl: './client-interface.component.css'
})
export class ClientInterfaceComponent {

  trending="This is trending on AAR"
  models = "Check out a collection of our machine learning models below"
  constructor() { }
  mousePos = { x: 1, y: 1 };
  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      window.addEventListener('mousemove', (event) => {
        const mousePos = { x: event.clientX, y: event.clientY };
        const width: number | undefined = document.getElementById("light")?.getBoundingClientRect().width;
        if (width !== undefined) {
          document.getElementById("light")?.animate({
            left: `${mousePos.x - width/2}px`,
            top: `${mousePos.y - width/2}px`
          },{duration:500, fill:"forwards"});
        }
      });
    });
  }
}
