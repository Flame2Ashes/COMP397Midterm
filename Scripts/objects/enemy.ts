module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;
        private _poof : objects.Poof;
        private _life : number;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number) {
            super(enemyAtlas, imageString, "robber");
            this._life = life;
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.HEIGHT);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            super.update();
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
        }

        public _dead() : void {
            this._poof = new objects.Poof("poof");
            this._poof.setPosition(new objects.Vector2(this.x, this.y));
            currentScene.addChild(this._poof); //Poof animation should play
            this._poof.removePoof();
            currentScene.removeChild(this);
        }
    }
}