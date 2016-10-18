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
        }
        return Poof;
    })(objects.GameObject);
    objects.Poof = Poof;
})(objects || (objects = {}));
//# sourceMappingURL=poof.js.map