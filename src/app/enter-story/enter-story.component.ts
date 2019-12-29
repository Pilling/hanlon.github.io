import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-enter-story',
  templateUrl: './enter-story.component.html',
  styleUrls: ['./enter-story.component.css']
})
export class EnterStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    document.body.scrollTo(0,350); // For Safari
    document.documentElement.scrollTo(0,350); // For Chrome, Firefox, IE and Opera

    var lineDrawing = anime({
      targets: '#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 5000,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: false
    });



  }

}
