import { Component, ViewEncapsulation, input} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // <--- This line disables the style encapsulation, control.component.css will become global.
})
export class ControlComponent {

  label = input.required<string>();


}
