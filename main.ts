info.onCountdownEnd(function () {
    if (info.score() >= 15) {
        game.over(true)
    } else {
        game.over(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (p, burger) {
    burger.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (p, rottenFood) {
    info.changeLifeBy(-1)
    rottenFood.destroy()
    scene.cameraShake(4, 2000)
})
let rottenPizza: Sprite = null
scene.setBackgroundColor(10)
game.splash("CHEESEBURGER!!!")
game.splash("Score at least 15 to win!")
let hero = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
let cheeseburger = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Food)
cheeseburger.setPosition(randint(0, 160), randint(0, 120))
cheeseburger.setStayInScreen(true)
info.setLife(randint(0, 10))
info.setScore(0)
info.startCountdown(30)
game.onUpdateInterval(randint(1000, 5000), function () {
    rottenPizza = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 7 7 7 7 b 4 4 b . . 
        . . . . b 3 2 3 7 7 7 e 4 4 b . 
        . . . b d 2 2 2 7 7 7 7 e 4 4 e 
        . . . b 7 3 7 3 7 7 7 7 7 e e e 
        . . b d 7 7 7 7 3 2 3 7 7 e e e 
        . . b 7 7 7 7 7 7 2 2 7 7 d e e 
        . b 3 2 3 7 7 7 3 2 3 7 d d e 4 
        . b 2 7 7 7 7 7 7 7 7 d d e 4 . 
        b d 3 2 d 7 7 7 d d d 4 4 . . . 
        b 7 7 7 7 d d 4 4 4 4 . . . . . 
        4 d d 7 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    rottenPizza.setPosition(randint(0, 160), randint(0, 120))
})
game.onUpdateInterval(randint(1000, 5000), function () {
    rottenPizza.setPosition(randint(0, 160), randint(0, 120))
})
forever(function () {
    music.playMelody("B A G A G F A C5 ", 120)
})
