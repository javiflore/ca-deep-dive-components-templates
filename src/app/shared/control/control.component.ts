import { Component, HostBinding, HostListener, ViewEncapsulation, input} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // <--- This line disables the style encapsulation, control.component.css will become global.
  // host: {
  //   class: 'control',
  //   '(click)': 'onClick($event)'
  // }
})
export class ControlComponent {

  @HostBinding('class') className = 'control';

  @HostListener('click') onClick2(event: Event) {
    console.log('Clicked');
  }

  label = input.required<string>();

  onClick(event: Event) {
    console.log('ControlComponent.onClick', event);
  }


}
