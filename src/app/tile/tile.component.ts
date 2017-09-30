import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: 'tile.component.html'
})

export class TileComponent {

  @Input() value = '';

  constructor() {
  }


}

