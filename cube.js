class Cube {
    faces;
    nFaces = 6;
    size = 3;

    constructor() {
        this._initCube();
        console.log(this.faces);
    }

    _initCube() {
        console.log('Cube._initCube')
        this.faces = [];
        for (let i = 0; i < this.nFaces; i++) {
            this.faces.push(new Face(this.size));
        }
    }
}