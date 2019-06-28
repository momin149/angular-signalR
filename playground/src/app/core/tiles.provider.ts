import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { Tile, TileSettings, TilesProvider } from 'lp-common';
import { Observable, of } from 'rxjs';
import { PluginModule } from '@plugin';
import { PLAYGROUND_SETTINGS } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class CustomTilesProvider implements TilesProvider {
  constructor(private resolver: ComponentFactoryResolver) {}

  getTiles(): Observable<Tile[]> {
    return of(PLAYGROUND_SETTINGS.tiles.map((tile, index) => {
      return {...tile, id: index } as Tile
    }));
  }

  load<T>(tile: Tile<TileSettings>): Promise<ComponentFactory<T>> {
    const componentType = PluginModule.tiles[tile.module];
    return Promise.resolve(this.resolver.resolveComponentFactory(componentType));
  }
}
