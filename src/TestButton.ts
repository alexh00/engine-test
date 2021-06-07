
export class TestButton {

    public root: PIXI.Container;
    public events: PIXI.utils.EventEmitter;
    private shape: PIXI.Graphics;
    private label: PIXI.Text;

    constructor(label: string) {
        this.root = new PIXI.Container();

        this.shape = this._createShape()

        this.label = this._createLabel(label);

        this.events = new PIXI.utils.EventEmitter()

        this._addListeners();
    }

    private _addListeners() {
        this.root.interactive = true;
        this.root.buttonMode = true;
        let pressed = false;
        this.root.on('pointerdown', () => {
            pressed = true
        })
        this.root.on('pointerup', () => {
            if (pressed) {
                this.events.emit('click')
            }
            pressed = false;
        })
        this.root.on('pointerupoutside', () => {
            pressed = false
        })
    }

    private _createLabel(label: string): PIXI.Text {
        const text = new PIXI.Text(label, {
            fontFamily: 'Arial',
            fill: '#ffffff',
            fontSize: 60
        })
        text.anchor.set(0.5);
        this.root.addChild(text)
        return text;
    }

    private _createShape(): PIXI.Graphics {
        const shape = new PIXI.Graphics();
        shape.beginFill(0xff0000)
        shape.drawRect(-100, -50, 200, 100)
        shape.endFill();
        this.root.addChild(shape)
        return shape;
    }
}