module objects {
    export class Poof extends objects.GameObject {

        private _time : number = 0;

        constructor(imageString:string) {
            super(enemyAtlas, imageString, "poof");
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.HEIGHT);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;

            
        }

         public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }
        //Update ticker
        public update() : void {
            this._time += createjs.Ticker.interval;
            this.removePoof();
        }
        //Remove object after a time
        public removePoof() : void {
            if (this._time >= 400) {
                console.log("Poof!");
                currentScene.removeChild(this);
                this._time = 0;
            }
             
        }
    }
}