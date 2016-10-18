module scenes {
    export class Play extends objects.Scene {
        //Private variables

        private _gameBG : createjs.Bitmap;
        private _scoreLabel : objects.Label;
        private _enemy : objects.Enemy;
        private _poof : objects.Poof;
        private _score : number = 0;

        constructor() {
            super();
            this.start();
        }

        public start() : void {

            this._scoreLabel = new createjs.Text("Score: "+ this._score, "30px Verdana", "#ffffff");
            this._scoreLabel.x = config.Screen.CENTER_X;
            this._scoreLabel.y = 20;
            this._gameBG = new createjs.Bitmap(assets.getResult("GameBG"));
            this.addChild(this._gameBG);
            this.addChild(this._scoreLabel);

            this._enemy = new objects.Enemy("robber", Math.floor((Math.random() * 5) + 1));
            console.log("enemy life: " + this._enemy.life);
            this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
            this.addChild(this._enemy);
            this._enemy.on("click", this._onEnemyClick, this);
            stage.addChild(this);
        }

        public update() : void {

            
           
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
            this._enemy.shot();
            console.log("enemy life: " + this._enemy.life);
            if (this._enemy.life == 0) {
                this._enemy._dead();
                this._poof = new objects.Poof("poof");
                this._poof.setPosition(new objects.Vector2(this._enemy.x, this._enemy.y));
                this.addChild(this._poof);
                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 5) + 1);
                 this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
                 this._enemy.on("click", this._onEnemyClick, this);
                 this.addChild(this._enemy);
                
            }
                
            }
            
        }
    }
}