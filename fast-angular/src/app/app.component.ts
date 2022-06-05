import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fast-angular';
  
  exampleTextField: any;

  onClick(event: any) {
    console.log(event)
    console.log(this.exampleTextField);
  }
}