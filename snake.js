export class Snake {

    constructor() {
        this.body = [
            { x: 10, y: 10 },
            { x: 10, y: 9 },
            { x: 10, y: 8 },
        ];
    }
    getBody() {

        return this.body;
    }
    getHead() {
        return this.body[0];
    }
    move(newHead) {
        return this.body.unshift(newHead);
    }
    removeTail() {
        return this.body.pop();
    }

    grow(newHead) {
        this.body.unshift(newHead);
    }

}