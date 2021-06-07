import { IScreenConfig, Screen, TweenManager, Sound, Engine, EngineEvents } from "engine";
import { TestButton } from './TestButton'


export class TweenScreen extends Screen {

    private woodstock: PIXI.Sprite;

    constructor(config: IScreenConfig) {
        super(config);

        this._createBackground();

        this.woodstock = this._createWoodstock();

        //back button
        this._createBackButton();
    }

    private _createBackButton() {
        const button = new TestButton('Back');
        button.root.position.set(200,-200)
        this.addChild(button.root);
        button.events.on('click', () => {
            this.screenEvents.emit(EngineEvents.SHOW_SCREEN, 'menu')
        })
    }

    
    private next = (): void => {
        const hx = this.screenWidth * -0.5;
        const hy = this.screenHeight * -0.5;
        const x = hx + (Math.random() * this.screenWidth);
        const y = hy + (Math.random() * this.screenHeight);
        TweenManager.create(this.woodstock.position)
            .to({ x, y }, 700)
            .onComplete(this.next).start();
    }

    private _createWoodstock(): PIXI.Sprite {
        const sprite = new PIXI.Sprite(PIXI.utils.TextureCache['woodstock'])
        sprite.anchor.set(0.5);
        this.addChild(sprite)
        // sprite.buttonMode = true;
        // sprite.interactive = true;
        // sprite.on('click', () => {
        //     console.log('click')
        //     Sound.instance.play('pop')
        // })
        return sprite;
    }

    private _createBackground(): PIXI.Sprite {
        const sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy'])
        sprite.anchor.set(0.5);
        sprite.width = this.screenWidth;
        sprite.height = this.screenHeight;
        this.addChild(sprite)
        return sprite;
    }
}