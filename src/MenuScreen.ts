import { TestButton } from './TestButton'
import { EngineEvents, IScreenConfig, Screen } from "engine";
export class MenuScreen extends Screen {

    constructor(config: IScreenConfig) {
        super(config);

        this._createMenu();
    }
    
    private _createMenu() {
        this._addButton('Tween', -200, 'tween')
        this._addButton('Sound', 20, 'sound')
    }

    private _addButton(label: string, y: number, screenId: string): TestButton {
        const button = new TestButton(label);
        button.root.position.set(-200,y)
        this.addChild(button.root);
        //TODO - disable buttons after click...
        button.events.on('click', () => {
            this.goToScreen(screenId)
        })
        return button;
    }

    private goToScreen(screenId: string) {
        this.screenEvents.emit(EngineEvents.SHOW_SCREEN, screenId)
    }

}