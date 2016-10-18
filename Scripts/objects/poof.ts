module objects {
    export class Poof extends objects.GameObject {
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
    }
}