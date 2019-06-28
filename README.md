# Angular SignalR

This project is a boilerplate for developing pluggable tiles.

## Prerequisite
  Node 10.16.0

## Installation

After cloning this repository run

```
npm install
```

**Important note:** this repository contains dependencies which will be cloned through SSH protocol, so you need to configure your access to the GitHub by SSH key.

## Tiles sandbox
The `tiles` repository is where we can develop our tiles.

Basically, it's an Angular CLI project with predefined configuration which lets us ability to create, test and build bundle from Angular module which we can use as a plugin in our main application.

It has the following structure:
- `playground` folder is the place where we test our tiles
- `plugin` folder is where we develop new tiles

In plugin folder we have PluginModule:

```
const tiles = [ProfitAndLossTileComponent, OrderBookTileComponent];

@NgModule({
  imports: [
    LightPointCommonModule
  ],
  declarations: [...tiles],
  exports: [...tiles],
  entryComponents: [...tiles]
})
export class PluginModule {
  static tiles = {
    'profit-and-loss': ProfitAndLossTileComponent,
    'order-book': OrderBookTileComponent
  }
}
```
In the code above we can see that one module can contain one and more tiles.

We can create a new tile using command:

```
npm run create:tile aNewTileName
```

Please take a look at the following part:

```
static tiles = {
  'profit-and-loss': ProfitAndLossTileComponent,
  'order-book': OrderBookTileComponent
}
```
It is a place where we configure mappings for our future tiles. It implies that our tiles.json should look like:

```
{
   "name": "Plugin 1",
   "pluginUrl": "http://localhost:4040/static/plugins/ag-tiles.js", // path to plugin
   "module": "profit-and-loss" // key for specific component(ProfitAndLossTileComponent will be rendered in our case)
 },
```
In order to test our tiles we need to configure `playground/config.ts` file
```
export const PLAYGROUND_SETTINGS: PlaygroundSettings = {
  tiles: [
    {
      name: 'Profit and loss',
      module: 'profit-and-loss' // take ProfitAndLossTileComponent
    },
    {
      name: 'Order book',
      module: 'order-book' // take OrderBookTileComponent
    }
  ],
  ...
};
```
 
and run:
```
npm start
```

Once we've finished we can build plugin through:

```
npm run build
```
This command includes the name of the plugin bundle

```
"build": "ng build --project plugin --prod --pluginName=chart-tiles",
                                           ^^^^^^^^^^^^^^^^^^^^^
```
will result in `dist/plugin/ag-tiles.js` file.

## Plug in tiles to the portal

It's time to Use plugin in `portal`

We take the `ag-tiles.js` file we built in the previous step, come back to the `portal` project
and put this file to the `server/static/plugins` folder.

Finally, we can test our plugin by changing `tiles.json` config

```
{
   "name": "Plugin 1",
   "pluginUrl": "http://localhost:4040/static/plugins/ag-tiles.js", // path to plugin
   "module": "profit-and-loss"
 },
```
