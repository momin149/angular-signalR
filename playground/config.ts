import { PlaygroundSettings } from './src/app/core/settings';

export const PLAYGROUND_SETTINGS: PlaygroundSettings = {
  tiles: [
    {
      name: 'barchart-signalR',
      module: 'barchart-signalR'
    }
  ],
  config: {
    refreshInterval: 30_000,
    apiUrl: 'http://localhost:4040/api/'
  }
};
