class GUIBase {
    _$G;
    _cube = cube;

    static get faceSide() {
        return this.brickSide * Face.nBricks;
    }

    constructor(cube, $container, className) {
        this._cube = cube;
        this._$G = document.createElement('div');
        this._$G.classList.add(className);
        $container.innerHTML = '';
        $container.appendChild(this._$G);
    }

    _addFace() {
        let $face = document.createElement('div');
        $face.classList.add('face');
        this._$G.appendChild($face);
        return $face;
    }

    _addBrick($face) {
        let $brick = document.createElement('span');
        $brick.classList.add('brick');
        $face.appendChild($brick);
        return $brick;
    }

    _px(n) {
        return n + "px";
    }
}