import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sessionId: any;
  showIdContainer: boolean = false;
  showLoader: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  generateNewSession() {
    this.showLoader = true;
    this.showIdContainer = false;
    setTimeout(() => {
      this.sessionId = 'w32o9Y6QQ45lPtr';
      this.showLoader = false;
      this.showIdContainer = true;
    }, 5000);
  }

  showSessionInputField() {
    this.showIdContainer = true;
  }
}
