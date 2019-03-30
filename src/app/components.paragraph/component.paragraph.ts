import { Component } from '@angular/core';

@Component({
  selector: 'paragraph',
  templateUrl: './component.paragraph.html',
  //styleUrls: ['./app.component.css']
})
export class ParagraphComponent{
   const i = 0;
   const txt = 'Lorem ipsum dummy text blabla.';
   const speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
  title = 'Project2';
}
     