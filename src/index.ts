/// <reference path="../types/pixi.js.d.ts" />
/// <reference path="../types/engine.d.ts" />
import { Engine } from 'engine';

document.addEventListener('DOMContentLoaded', (event) => {
    const engine = new Engine();
    engine.start();
    engine.events.on('app-ready', () => {
        engine.screenManager.test()
    })
});