import { EngineEvents, Screen, IScreenConfig, Sound } from "engine";
import { TestButton } from "./TestButton";

export class SoundScreen extends Screen{

    constructor(config: IScreenConfig) {
        super(config);

        this._createButtons();

        this._createBackButton();
    }

    private _createButtons(): void {
        const b1 = this._createButton('pop', -100, -100);
        b1.events.on('click', () => {
            Sound.instance.play('pop')
        })
        const b2 = this._createButton('star', -100, 120);
        b2.events.on('click', () => {
            Sound.instance.play('star')
        })
    }

    private _createButton(label: string, x: number, y: number): TestButton {
        const button = new TestButton(label);
        button.root.position.set(x,y)
        this.addChild(button.root);
        return button
    }

    protected _createBackButton() {
        const button = this._createButton('Back', 200,-200);
        button.events.on('click', () => {
            this.screenEvents.emit(EngineEvents.SHOW_SCREEN, 'menu')
        })
    }
}