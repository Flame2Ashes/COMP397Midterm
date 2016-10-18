module scenes {
    export class Play extends objects.Scene {
        //Private variables

        private _gameBG : createjs.Bitmap;
        private _scoreLabel : objects.Label;
        private _enemy : objects.Enemy;

        constructor() {
            super();
            this.start();
        }

        public start() : void {
            this._gameBG = new createjs.Bitmap(assets.getResult("GameBG"));
            this.addChild(this._gameBG);

            this._enemy = new objects.Enemy("robber", (Math.random() * 5) + 1)
            this.addChild(this._enemy);
            stage.addChild(this);
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
            
            
        }
    }
}