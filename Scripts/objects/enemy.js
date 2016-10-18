var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, life) {
            _super.call(this, enemyAtlas, imageString, "robber");
            this._life = life;
            this.position = new objects.Vector2(config.Screen.WIDTH, config.Screen.HEIGHT);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
        };
        Enemy.prototype._dead = function () {
            this._poof = new objects.Poof("poof");
            this._poof.setPosition(new objects.Vector2(this.x, this.y));
            currentScene.addChild(this._poof); //Poof animation should play
            this._poof.removePoof();
            currentScene.removeChild(this);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map