import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  Llama = {
    month:"February",
    date:"12",
    name: "Llama",
    year: "2024",
    calcDate : getDateDifference(new Date(`02/12/2024`))
  }
  Mistral = {
    month:"December",
    date:"4",
    name: "Mistral",
    year: "2023",
    calcDate : getDateDifference(new Date(`12/04/2023`))
  }
  Phi2 = {
    month:"October",
    date:"5",
    name: "Phi2",
    year: "2022",
    calcDate : getDateDifference(new Date(`10/05/2022`))
  }
  Falcon = {
    month:"November",
    date:"25",
    name: "Falcon",
    year: "2023",
    calcDate : getDateDifference(new Date(`11/25/2023`))
  }
  StarCoder = {
    month:"May",
    date:"2",
    name: "StarCoder",
    year: "2022",
    calcDate : getDateDifference(new Date(`05/02/2022`))
  }
  StableLM = {
    month:"May",
    date:"20",
    name: "StableLM",
    year: "2023",
    calcDate : getDateDifference(new Date(`05/20/2023`))
  }
  GPTNeox = {
    month:"March",
    date:"30",
    name: "GPTNeox",
    year: "2024",
    calcDate : getDateDifference(new Date(`03/30/2024`))
  }
}

function getDateDifference(dia:Date) {
  let Difference_In_Time = Date.now() - dia.getTime();
  let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24));
  return Difference_In_Days.toString()
};
