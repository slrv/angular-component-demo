import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  shape: 'square' | 'rounded' | 'oval' = 'square';

  @Input()
  type: 'primary' | 'danger' | 'success' = 'primary';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  text = '';

  @Input()
  disabled = false;

  @Output()
  clicked = new EventEmitter<void>();

  get buttonText() {
    return this.text.length < 30 ? this.text : `${this.text.slice(0, 27)}...`
  }
}
