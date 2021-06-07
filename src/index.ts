/// <reference path="../types/pixi.js.d.ts" />
/// <reference path="../types/engine.d.ts" />
import { Engine } from 'engine';
import { TweenScreen } from './TweenScreen';
import { MenuScreen } from './MenuScreen';

document.addEventListener('DOMContentLoaded', (event) => {
    const engine = new Engine();
    engine.start({menu: MenuScreen, tween: TweenScreen});
    engine.events.on('app-ready', () => {
        engine.screenManager.showScreen('menu')
    })
});