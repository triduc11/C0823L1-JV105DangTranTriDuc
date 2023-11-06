class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return `<img  width="${this.size}" height="${this.size}" src="${this.image}" style="position: relative; top: ${this.top}px; left: ${this.left}px"  alt="img"/>`;
    }

    moveRight() {
        this.left += 20;
        console.log(`ok: ${this.left}`);
    }
}

const hero = new Hero('pikachu.png', 200, 300, 50);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);
}

start();