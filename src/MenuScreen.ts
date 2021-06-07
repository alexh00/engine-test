import { TestButton } from './TestButton'
import { EngineEvents, IScreenConfig, Screen } from "engine";
export class MenuScreen extends Screen {

    constructor(config: IScreenConfig) {
        super(config);

        this._createMenu();
    }
    
    private _createMenu() {
        this._addButton('Tween', -200, 'tween')
    }

    private _addButton(label: string, y: number, screenId: string) {
        const button = new TestButton(label);
        button.root.position.set(-200,y)
        this.addChild(button.root);
        button.events.on('click', () => {
            this.goToScreen(screenId)
        })
    }

    private goToScreen(screenId: string) {
        this.screenEvents.emit(EngineEvents.SHOW_SCREEN, screenId)
    }

}