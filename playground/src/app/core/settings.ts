import { Tile } from 'lp-common';

export interface PlaygroundSettings {
  tiles: Partial<Tile>[];
  config: {
    apiUrl: string;
    refreshInterval: number;
    removeMinusSignFromNumbers?: boolean;
  }
}
