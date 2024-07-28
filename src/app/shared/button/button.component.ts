import { Component, input } from '@angular/core';

@Component({
  // any button with this atribute selector [appButton] will have 
  // the styles and template of this component
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {}
