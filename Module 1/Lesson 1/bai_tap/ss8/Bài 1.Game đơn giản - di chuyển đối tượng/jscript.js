class Hero {
    constructor(image, left, right, top, bot, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.right = right;
        this.bot = bot;
        this.size = size;
    }

    getHeroElement() {
        return `<img width="${this.size}" height="${this.size}" src="${this.image}" style="position: relative;left: ${this.left}px; right: ${this.right}px; top: ${this.top}px; bottom: ${this.bot}px; " alt="img"/>`;
    }

    moveRight() {
        this.left += 20;
        console.log(`ok: ${this.left}`);
    }

    moveLeft() {
        this.left -= 20;
        console.log(`ok: ${this.right}`);
    }

    moveTop() {
        this.top += 20;
        console.log(`ok: ${this.bot}`);
    }

    moveBot() {
        this.top -= 20;
        console.log(`ok: ${this.top}`);
    }
}

const hero = new Hero('pikachu.png', 20, 20, 20, 20, 80);

document.addEventListener("keydown", (event) => {
    const {key} = event;
    console.log(key)
    if (key === "ArrowUp") {
        hero.moveBot();
    }
    if (key === "ArrowDown") {
        hero.moveTop();
    }
    if (key === "ArrowRight") {
        hero.moveRight();
    }
    if (key === "ArrowLeft") {
        hero.moveLeft();
    }
    console.log(hero)
    document.getElementById('game').innerHTML = hero.getHeroElement();
});
// if (hero.left < window.innerWidth - hero.size) {
//     hero.moveRight();
// } else {
//     hero.moveLeft();
// }
// if (hero.top < window.innerHeight - hero.size) {
//     hero.moveBot();
// } else {
//     hero.moveTop();
// }

document.getElementById('game').innerHTML = hero.getHeroElement();

// setTimeout(start, 500);

