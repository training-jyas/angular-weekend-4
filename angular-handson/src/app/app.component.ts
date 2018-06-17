import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTST ';
  page = 'pipes';

  selectPage(page: string) {
    this.page = page;
  }
}
