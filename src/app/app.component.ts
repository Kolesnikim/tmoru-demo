import { Component } from '@angular/core';

@Component({
  selector: 'tomoru-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tomoru-demo';
  active = false

    toggleActiveMode() {
        this.active = !this.active;
    }
}
