import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy { 

  // literal types - only allow specific string values
  currentStatus: 'online'|'offline'|'unknown' = 'unknown';

  private interval?: ReturnType<typeof setInterval>;

  constructor() {}


  // ngOnInit runs once the component has initialized all the inputs()
  ngOnInit() {
    console.log('onInit');


    this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';

    this.interval = setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 3000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }


  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
