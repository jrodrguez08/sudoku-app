import { Component, OnInit } from '@angular/core';
import {TileComponent} from '../tile/tile.component';

@Component({
  templateUrl: 'game.component.html'
})
export class GameComponent {

  tiles: Array<TileComponent> = new Array(81);

  constructor() {
    this.tiles.fill(new TileComponent());
  }

}

