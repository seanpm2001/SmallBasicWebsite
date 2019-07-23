import { Component } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  public topics = [
    {
      subject: "Featured Programs",
      programs: [
        {
          name: "Collision Physics",
          description: "Demonstrates object collisions using real world physics properties. Tweak properties like elasticity, gravity, etc. to see the effects.",
          importID: "PMT149",
          src: "../../assets/program1.png",
          alt: "Screenshot of Collision Physics",
          title: "Screenshot of Collision Physics",
          link: "http://smallbasic.com/program/?PMT149"
        },
        {
          name: "SokoCute",
          description: "A Small Basic port of the famous SokoBan puzzle game.  Quite possibly the most visually striking game built on Small Basic.",
          importID: "SOKO",
          src: "../../assets/program2.png",
          alt: "Screenshot of SokoCute",
          title: "Screenshot of SokoCute",
          link: "http://smallbasic.com/program/?Soko"
        },
        {
          name: "Tetris",
          description: "A faithful port of the famous Tetris game, this is the most popular and the most downloaded program on Small Basic.",
          importID: "TETRIS",
          src: "../../assets/program3.png",
          alt: "Screenshot of Tetris",
          title: "Screenshot of Tetris",
          link: "http://smallbasic.com/program/?Tetris"
        },
      ]
    },
  ];

  constructor() { }

}