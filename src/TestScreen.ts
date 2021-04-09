import { IScreenConfig, Screen } from "engine";

export class TestScreen extends Screen {

    constructor(config: IScreenConfig) {
        super(config);

        this._createSprite();
    }

    private _createSprite(): PIXI.Sprite {
        const sprite = new PIXI.Sprite(PIXI.utils.TextureCache['snoopy'])
        sprite.anchor.set(0.5);
        sprite.width = this.screenWidth;
        sprite.height = this.screenHeight;
        this.addChild(sprite)
        return sprite;
    }
}