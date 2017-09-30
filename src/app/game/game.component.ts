import { Component, OnInit } from '@angular/core';
import {TileComponent} from '../tile/tile.component';

@Component({
  templateUrl: 'game.component.html'
})
export class GameComponent {

  tiles: Array<TileComponent> = new Array(81);
  tile  = new TileComponent();

  constructor() {
    this.tiles.fill(new TileComponent());
  }

  changeValue(index) {
    console.log('Cell index ' + index);
    console.log('Prev cell val ' + this.tiles[index].value);
    this.tile.value = '6';
    this.tiles[index] = this.tile;
    console.log('New cell val ' + this.tiles[index].value);
  }

}

