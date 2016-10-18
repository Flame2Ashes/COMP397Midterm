module scenes {
    export class Play extends objects.Scene {
        //Private variables

        private _gameBG : createjs.Bitmap;
        private _scoreLabel : objects.Label;

        constructor() {
            super();
            this.start();
        }

        public start() : void {

            stage.addChild(this);
        }

        public update() : void {
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}