import { Component, Input, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  // @Input() ticket: Ticket | undefined;

  data = input.required<Ticket>();
  close = output();

  detailsVisible = signal(false);

  constructor() { }

  onToggleDetails(){

    // this.detailsVisible.set(!this.detailsVisible());

    // the update method is a function that receives the previous value (wasVisible) 
    //and returns the new value
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkCompleted(){
    this.close.emit();
  }

}
