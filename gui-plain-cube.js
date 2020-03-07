class GUIPlainCube extends GUIBase {
    
    /** Face side in px */
    faceSide = 90;
    brickSide = 30;
    _$plainCube;
    _$faces;

    constructor(cube, $container) {
        super(cube, $container, 'plain-cube');
        this._showPlainCube();
    }
    
    _showPlainCube() {
        this._$G.style.position = 'relative';
        this._$faces = Array(6);
        this._$faces[0] = this._newFace(1, 0);
        this._$faces[1] = this._newFace(0, 1);
        this._$faces[2] = this._newFace(1, 1);
        this._$faces[3] = this._newFace(2, 1);
        this._$faces[4] = this._newFace(1, 2);
        this._$faces[5] = this._newFace(1, 3);
        this._cube.faces.map((f, i) => {
            for (let x = 0; x < this._cube.size; x++) {
                for (let y = 0; y < this._cube.size; y++) {
                    this._newBrick(i, x, y, f.bricks[x][y].color);
                }
            }
        });
    }

    _updateCube() {
        console.log('PlainCube.updateCube');
    }

    _newFace(timesMarginLeft, timesMarginTop) {
        let $f = this._addFace();
        $f.style.position = 'absolute';
        $f.style.width = this._px(this.faceSide);
        $f.style.height = this._px(this.faceSide);
        $f.style.left = this._px(timesMarginLeft * this.faceSide);
        $f.style.top = this._px(timesMarginTop * this.faceSide);
        $f.style.margin = '2px';
        return $f;
    }

    _newBrick(f, x, y, color) {
        let $b = this._addBrick(this._$faces[f]);
        $b.style.position = 'absolute';
        $b.style.width = this._px(this.brickSide);
        $b.style.height = this._px(this.brickSide);
        $b.style.left = this._px(y * this.brickSide);
        $b.style.top = this._px(x * this.brickSide);

        $b.dataset.f = f;
        $b.dataset.x = x;
        $b.dataset.y = y;

        if (color) {
            $b.style.backgroundColor = color;
        } else {
            $b.innerHTML = '?';
            $b.style.backgroundColor = 'white';
            $b.style.fontSize = this._px(24);
            $b.style.textAlign = 'center';
            $b.style.cursor = 'pointer';
            new ColorPicker($b, color => {
                console.log(color);
                $b.style.backgroundColor = color;
                $b.innerHTML = '';
            });
        }
    }
    
}