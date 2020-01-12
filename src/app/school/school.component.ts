import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  slideIndex = 1;

  images = [
    "../../assets/goingout/play1.jpg",
    "../../assets/goingout/play2.jpg",
    "../../assets/goingout/play3.jpg",
    "../../assets/goingout/play4.jpg",
    "../../assets/goingout/play6.jpg",
    "../../assets/goingout/play7.jpg",
    "../../assets/goingout/play8.jpg",
    "../../assets/classroom/assemble.jpg"
  ]

  constructor() { }

  ngOnInit() {
  }

  slide(slideTo) {
    // current slide
    let currentSlide = this.slideIndex;

    currentSlide += slideTo;
    // check if there is a next image
    if (currentSlide < 1 || currentSlide > this.images.length) {
      return false;
    }
    this.slideIndex += slideTo;
  }

}
