import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/img/banner.jpg",
      subtitle: "business & consulting",
      title: "Consulting fuels business success through strategic insights and expert advice."
    },
    {
      img: "assets/img/banner/banner.jpg",
      subtitle: "Software Development",
      title: "Software development powers digital innovation."
    },
    {
      img: "assets/img/banner/banner.jpg",
      subtitle: "Transform IT Solutions",
      title: "Empowering businesses through technology."
    }
  ];
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  };

  ngOnInit(): void {
  }

}
