import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy { 

  // literal types - only allow specific string values
  currentStatus = signal<'online'|'offline'|'unknown'>('unknown');

  private interval?: ReturnType<typeof setInterval>;

  constructor() {}


  // ngOnInit runs once the component has initialized all the inputs()
  ngOnInit() {
    console.log('onInit');
    const interval = setInterval(() => {

      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }

    }, 3000);

  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterRender(): void {
    console.log('ngAfterRender');
  }


  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
