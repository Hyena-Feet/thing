controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(randint(0, 160), randint(0, 120))
    mySprite2.setPosition(randint(0, 160), randint(0, 120))
    mySprite3.setPosition(randint(0, 160), randint(0, 120))
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Rex`, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`Pencil`, SpriteKind.Player)
mySprite3 = sprites.create(assets.image`Dav`, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
