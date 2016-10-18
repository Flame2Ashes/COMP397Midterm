module objects {
    export class Poof extends objects.GameObject {
        constructor(imageString:string) {
            super(enemyAtlas, imageString, "poof");
        }
    }
}