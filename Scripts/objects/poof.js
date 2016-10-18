var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Poof = (function (_super) {
        __extends(Poof, _super);
        function Poof(imageString) {
            _super.call(this, enemyAtlas, imageString, "poof");
            this._time = 0;
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.HEIGHT);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        Poof.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Poof.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        //Update ticker
        Poof.prototype.update = function () {
            this._time += createjs.Ticker.interval;
            this.removePoof();
        };
        //Remove object after a time
        Poof.prototype.removePoof = function () {
            if (this._time >= 400) {
                console.log("Poof!");
                currentScene.removeChild(this);
                this._time = 0;
            }
        };
        return Poof;
    })(objects.GameObject);
    objects.Poof = Poof;
})(objects || (objects = {}));
//# sourceMappingURL=poof.js.map