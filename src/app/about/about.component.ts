import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  slideIndex = 1;

  images = [
    "../../assets/classroom/aboutUs.jpg",
    "../../assets/classroom/learn1.jpg",
    "../../assets/classroom/learn2.jpg",
    "../../assets/classroom/read.jpg",
    "../../assets/goingout/play1.jpg",
    "../../assets/goingout/play2.jpg",
    "../../assets/goingout/play3.jpg",
    "../../assets/goingout/play8.jpg",
    "../../assets/goingout/play7.jpg",
    "../../assets/uniform/uniform.jpg",
    "../../assets/uniform/uniform4.jpg",
    "../../assets/uniform/uniform7.jpg"
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
