import { Component } from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './component.paragraph.html',
  //styleUrls: ['./app.component.css']




})
export class ParagraphComponent{


  i = 0;
  txt = 'Lorem ipsum dummy text blabla.';
  speed = 100;
  typeWriter() {
    console.log("Button click working");
    if (this.i < this.txt.length) {
      document.getElementById("demo").innerHTML += this.txt.charAt(this.i);
      this.i++;
      setTimeout(this.typeWriter, this.speed);
    }
  }
   
  title = 'Project2';
}