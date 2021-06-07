/// <reference path="../types/pixi.js.d.ts" />
/// <reference path="../types/engine.d.ts" />
import { Engine } from 'engine';
import {MenuScreen, TweenScreen, SoundScreen} from './screens';

document.addEventListener('DOMContentLoaded', (event) => {
    const engine = new Engine().start({
        menu: MenuScreen,
        tween: TweenScreen,
        sound: SoundScreen
    });
    engine.events.on('app-ready', () => {
        engine.screenManager.showScreen('menu')
    })
});