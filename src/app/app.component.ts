import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-heros',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  // class functions
  message(msg) {
    console.log('Hello '+msg);
  }


  // life cycle hooks
  ngOnInit() {
    this.message(this.title);
  }
}
