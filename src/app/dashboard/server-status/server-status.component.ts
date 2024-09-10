import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {

  // literal types - only allow specific string values
  currentStatus: 'online'|'offline'|'unknown' = 'unknown';


  constructor() {
    
  }


  // ngOnInit runs once the component has initialized all the inputs()
  ngOnInit() {
    this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';

    setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 3000);
  }
}
