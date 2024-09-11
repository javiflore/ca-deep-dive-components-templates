import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren, viewChild } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit{

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  // you can also use ViewChild as a function
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');



  // to store many elements
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[];

  constructor() { }
  ngOnInit(): void {
    console.log('OnInit', this.form?.nativeElement);
  }


  ngAfterViewInit(): void {
    console.log('AfterViewInit', this.form?.nativeElement);
  }

  onSubmit(input: any, text: string) {
    console.log('submit: ', input.value);
    console.log('text: ', text);

    this.form?.nativeElement.reset();

  }

}
