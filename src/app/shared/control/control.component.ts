import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, HostListener, ViewEncapsulation, afterNextRender, afterRender, contentChild, inject, input} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // <--- This line disables the style encapsulation, control.component.css will become global.
  host: {
    class: 'control',
    '(click)': 'onClick($event)'
  }
})
export class ControlComponent implements AfterContentInit{

  @HostBinding('class') className = 'control';

  // @HostListener('click') onClick2(event: Event) {
  //   console.log('Clicked', this.el);
  // }

  label = input.required<string>();

  // ElementRef gives you access to the element host
  private el = inject(ElementRef);


  // ContentChild allows us to access the PROYECTED CONTENT(ng-content) in the component
  // for that reason, the selector name, must be declared in the template that uses the ng-content,
  // in this case, the selector is 'input' in new-ticket.component.html
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  // control SIGNAL
  private control = contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    afterRender(() => {
      //afterRender runs after ANY component has rendered in the entire aplication
      console.log('afterRender');
    });


    // afterNextRender runs after the next render cycle in the entire aplication, JUST ONCE
    afterNextRender(() => {
      console.log('AfterNextRender');
    });
  }
  
  ngAfterContentInit(): void {
    console.log('ControlComponent.ngAfterContentInit', this.control);
  }

  onClick(event: Event) {
    console.log('ControlComponent.onClick', this.control);
  }


}
