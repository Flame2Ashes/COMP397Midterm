var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this._score = 0;
            this._time = 0;
            this.start();
        }
        Play.prototype.start = function () {
            //Create score and time labels and background
            this._scoreLabel = new createjs.Text("Score: " + this._score, "30px Verdana", "#ffffff");
            this._scoreLabel.x = config.Screen.CENTER_X;
            this._scoreLabel.y = 20;
            this._timeLabel = new createjs.Text("Time: " + (Math.floor(this._time) / 100), "30px Verdana", "#ffffff");
            this._timeLabel.x = 200;
            this._timeLabel.y = 20;
            this._gameBG = new createjs.Bitmap(assets.getResult("GameBG"));
            this.addChild(this._gameBG);
            this.addChild(this._scoreLabel);
            this.addChild(this._timeLabel);
            //Create initial enemy object
            this._enemy = new objects.Enemy("robber", Math.floor((Math.random() * 5) + 1));
            console.log("enemy life: " + this._enemy.life);
            this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
            this.addChild(this._enemy);
            this._enemy.on("click", this._onEnemyClick, this);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._time += createjs.Ticker.interval;
            this._timeLabel.text = "Time: " + (Math.floor(this._time) / 100);
            if (this._poof != null) {
                this._poof.update(); //Will remove poof object after a time
            }
        };
        Play.prototype._onEnemyClick = function (event) {
            this._enemy.shot(); //Decrements life by 1
            console.log("enemy life: " + this._enemy.life);
            if (this._enemy.life <= 0) {
                this._score += 5; //Adds 5 points to score
                this._scoreLabel.text = "Score: " + this._score; //Updates score
                this._enemy._dead(); //Removes enemy object
                this._poof = new objects.Poof("poof");
                this._poof.setPosition(new objects.Vector2(this._enemy.x, this._enemy.y));
                currentScene.addChild(this._poof); //Poof animation should play
                //Spawn new enemy object at different location
                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 5) + 1);
                this._enemy.setPosition(new objects.Vector2(Math.random() * config.Screen.WIDTH, Math.random() * config.Screen.HEIGHT));
                this._enemy.on("click", this._onEnemyClick, this);
                this.addChild(this._enemy);
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map