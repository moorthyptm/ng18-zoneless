import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-zoneless-with-signals',
  standalone: true,
  imports: [],
  templateUrl: './zoneless-with-signals.component.html',
  styleUrl: './zoneless-with-signals.component.scss',
})
export default class ZonelessWithSignalsComponent {
  protected name = signal('Angular');

  handleClick() {
    this.name.set('Zoneless Angular');
  }
}
