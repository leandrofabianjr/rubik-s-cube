class Face {
    bricks;
    nBricks;

    constructor(nBricks) {
        this.nBricks = nBricks;
        this._initFace();
    }
    
    _initFace() {
        console.log('Face._initFace');
        this.bricks = Array(this.nBricks);
        for (let i = 0; i < this.nBricks; i++) {
            this.bricks[i] = Array(this.nBricks);
            for (let j = 0; j < this.nBricks; j++) {
                this.bricks[i][j] = new Brick();
            }
        }
        
    }
}
