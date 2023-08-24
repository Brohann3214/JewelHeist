let tileSize = 30
namespace SpriteKind {
    export const Decor = SpriteKind.create()
    export const Decor2 = SpriteKind.create()
    export const Overlay = SpriteKind.create()
}
let cutscene = false
if(cutscene) {
let myTextSprite = fancyText.create("once upon a time")
myTextSprite.setPosition(65, 20)
fancyText.setMaxWidth(myTextSprite, 130)
fancyText.setColor(myTextSprite, 3)
fancyText.setFont(myTextSprite, fancyText.serif_small)
scene.setBackgroundColor(7)
fancyText.setFrame(myTextSprite, img`
    aaaaa.a.aaaaa..aaaaaaaa...aaaaaaa
    aaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaa
    aaaccccccccaaaaaaccccaaaaaaaacaaa
    aaaccccccccaaccacccccccaaaaaccca.
    aacccccccccaaccacccccccccaacccaa.
    aacccccccccaaccaccccccccccccccaa.
    aaacccccccccccccccccccccccccccaa.
    .aacccccccccccccccccccccccccccaa.
    .aacccccccccccccccccccccccccccaaa
    .aaaccccccccccccccccccccccccccaaa
    .aaaccccccccccccccccccccaaaaacaaa
    .aaaaaaccccccccccccccccccccaaaaaa
    .aaaaacccccccccccccccccccccccccaa
    .aacccccccccccccccccccccccccccca.
    .aaccccccccccccccccccccccccccaaa.
    .aacccccccccccccccccccccccccccca.
    .aaccccccccccccccccccccccccccaaa.
    .aaaaccccccccccccccccccccccccaa..
    .aacaccccccccccccccccccccccccaaa.
    .aacccccccccccccccccccccccccccaaa
    .aaacccccccccccccccccccccccccccaa
    .aaaaccccccccccccccccccccccccccaa
    ...aaccccccccccccccccccccccccccaa
    ...aacccccccccccccccccccccccaaaaa
    ...aaccccccccccccccccccccccccaaaa
    ...aaccccccccccccccccccccccccccca
    ..aacccccccccccccccccccccccccccaa
    ..aacccccccaaccacccccccccccccccaa
    ..aacccccccaaccacccccccccaaccccaa
    .aaccccccccaaccacccccccaaaaaccca.
    .aaccccccccaaaaaaccccaaaaaaaaccaa
    aaaaaaaaaacaaaaaaaaaaaaaaaaaaaaaa
    aaaaa.a.aaaaa..aaaaaaaa...aaaaaaa
`)
fancyText.setText(myTextSprite, "It was very cloudy, and the wealthy poet Rosham Boe was away at a convention...")
fancyText.setAnimationSound(myTextSprite, music.createSoundEffect(WaveShape.Noise, 1843, 556, 116, 49, 100, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve))
fancyText.animateAtSpeed(myTextSprite, 8, fancyText.AnimationPlayMode.UntilDone)
pause(1000)
   fancyText.setText(myTextSprite, "Allowing master theif Pete A. Kake ready to steal Rosham's most prized possession:")
    fancyText.animateAtSpeed(myTextSprite, 8, fancyText.AnimationPlayMode.UntilDone)
pause(1000)
fancyText.setText(myTextSprite, "The Long-Lost jewel of Captain Thumby Wark")
fancyText.animateAtSpeed(myTextSprite, 8, fancyText.AnimationPlayMode.UntilDone)
pause(1000)
sprites.destroy(myTextSprite)
}

    let fps = 0
    let start = true
    let lastUpdateTime = 0
    let deltaTime = 0
    let triangle = 0
    let triangles: number[] = []
    let vertices: number[] = []
    let cloud2: Sprite = null
    let cloud1: Sprite = null
    let camz = 0
    let camy = 0
    let angleZ = 0
    let size = 0
    let centerX = 0
    // let vertices: number[] = [];
    let centerY = 0
    let angleY = -0.3
    let angleX = 0.15
    let bg = scene.backgroundImage()
    let tileSize2 = 30
    let trianglecount = 0
    let camx = -100
    let doorVertice1 = 0
    let doorVertice2 = 0
    let animCheck = 0
    let doorChangeZ = 0
    let doorChangeX = 0
    let level = 3;
    let dooropen = false
    let isopeneing = false
    let dooropnumimg = 0
    let jumping = false
    let sign = sprites.create(assets.image`sign`, SpriteKind.Decor)
    let canmove = true
    let cloud5 = sprites.create(assets.image`medium cloud`, SpriteKind.Decor)
    let cloud4 = sprites.create(assets.image`small cloud`, SpriteKind.Decor)
    let cloud3 = sprites.create(assets.image`bigger cloud`, SpriteKind.Decor)
    let mona5 = sprites.create(assets.image`walkright`, SpriteKind.Decor2)
    let mona6 = sprites.create(assets.image`walkright`, SpriteKind.Decor2)
    let next = false
    music.setVolume(50)
    music.play(music.createSong(hex`00780004080a0301001c000f05001202c102c20100040500280000006400280003140006020004a8000000040001050c00100001861c002000010528002c00014448004c00010554005800018664006800010570007400014480008400010584008800010588008c0001448c0090000105a000a4000105a400a8000105a800ac000186ac00b0000105c000c4000105cc00d0000186dc00e0000105e800ec000144f800fc000105fc000001010500010401014404010801010514011801010518011c0101051c012001018620012401010507001c00020a006400f401640000040000000000000000000000000000000003e50000000c00020c0f0c001000028d901c002800020c0f28002c00024b4e38003a00020a0d3a003c00020a0d3c003e00020a0d3e004000020a0d40004200020c0f42004400020c0f44004600020c0f48005400020c0f54005800028d9064007000020c0f70007400024b4e80008400010c84008800010c88008c00014b8c009400010ca000a400010ca400a800010ca800ac00018dac00b400010cc000cc00020c0fcc00d000028d90dc00e800020c0fe800ec00024b4ef800fc00010cfc000001010c00010401014b04010801010c14011801010c18011c01010c1c012001018d20012401010c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800d0010000010001080c000d0001081000110001051400150001051800190001051c001d0001082800290001082c002d0001053000310001053400350001053800390001043a003b0001043c003d0001043e003f0001044000410001034200430001034400450001034800490001085400550001085800590001075c005d0001076000610001076400650001087000710001087400750001077800790001077c007d0001078000810001098400850001098800890001098c008d0001089400950001079800990001079c009d000107a000a1000109a400a5000109a800a9000109ac00ad000108b400b5000108b600b7000108b800b9000107ba00bb000107bc00bd000106be00bf000105c000c1000108cc00cd000108d000d100020709d400d500020709d800d900020709dc00dd000108e800e9000108ec00ed00020709f000f100020709f400f500020709f800f90003120508fc00fd000312050800010101031205080401050103120508080109010207090c010d0102070910011101020709140115010312050818011901031205081c011d0103120508200121010312050824012501020609280129010212062c012d010206093001310102120634013501020609380139010212063c013d01020609`), music.PlaybackMode.LoopingInBackground)


    let up_arrow = sprites.create(assets.image`sdfdfs`, SpriteKind.Player)
    if (level === 2) {

        mona5.setImage(assets.image`Mona`)
        mona6.setImage(assets.image`myImage2`)
        camx = -65
    }

    up_arrow.setPosition(120, 100)
    up_arrow.setFlag(SpriteFlag.Invisible, true)
    let robber = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    robber.setPosition(60, 98)
    cloud1 = sprites.create(assets.image`small cloud`, SpriteKind.Decor)
    cloud2 = sprites.create(assets.image`medium cloud`, SpriteKind.Decor)
    let overlay = sprites.create(assets.image`myImage1`, SpriteKind.Overlay)
    overlay.setPosition(80, -60)

    overlay.setFlag(SpriteFlag.RelativeToCamera, true)
    if (!(level === 1)) {

        sprites.destroyAllSpritesOfKind(SpriteKind.Decor)
    }

    if (level === 2) {
        //let mona5 = sprites.create(assets.image`Mona`, SpriteKind.Player)
    }
    if (level === 3) {
        robber.ay = 100
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.cameraFollowSprite(robber)
        tiles.placeOnTile(robber, tiles.getTileLocation(0, 14))
    }
    overlay.z = 10000
    // Update function
    game.onUpdate(function () {
        let currentTime = control.millis();
        // Convert to seconds
        deltaTime = (currentTime - lastUpdateTime) / 1000
        // Calculate FPS
        fps = 1 / deltaTime
        // Store the current time for the next update
        lastUpdateTime = currentTime
        // Display the FPS
        //console.log("FPS: " + fps);
        //console.log(vertices.length)
        if (camx < -130) {
            robber.setVelocity(robber.vx, robber.vy + 5)
        }
        if (level < 3) {
            if (robber.y > 160) {
                game.gameOver(false)
            }
        }
    })
    game.onUpdate(function () {
        if (start) {
            console.logValue("x", camx)
            console.logValue("y", robber.y)
            if (level === 3) {
                //console.log('notlevel=1')
                sprites.destroyAllSpritesOfKind(SpriteKind.Decor)
            }
            if (controller.left.isPressed()) {
                // angleY += 0 - 0.05
                if (level < 3) {
                    if (canmove) {
                        if (!((level === 2) && (camx < -70)))
                            camx += 0 - 1
                    }
                } else {
                    robber.x -= 1
                }

                if (animCheck < 2) {
                    animCheck = 2
                    animation.runImageAnimation(
                        robber,
                        assets.animation`walkleft`,
                        150,
                        true
                    )
                    console.log('yes')

                }
            }
            // animation.runImageAnimation(robber, [assets.animation`walkright`], 150, false);
            if (controller.right.isPressed()) {
                // angleY += 0.05
                if (level < 3) {
                    if (canmove) {
                        if (!((level === 2) && (camx > 20))) {
                            if (!(level === 1 && camx > 175)) {
                                if (!(level === 1 && robber.y < 90 && camx > 105)) {
                                    camx += 1
                                }
                            }
                        }
                    }
                } else {
                    robber.x++
                }
                if (animCheck < 1 || animCheck > 1) {
                    animCheck = 1
                    animation.runImageAnimation(
                        robber,
                        assets.animation`walkright`,
                        150,
                        true
                    )
                    console.log('yes')
                    animCheck = 1
                }


            }
            if (level === 1) {
                if (camx > 115 && camx < 150 && level === 1) {
                    if (dooropen) {
                        up_arrow.setFlag(SpriteFlag.Invisible, true)
                    } else {
                        up_arrow.setFlag(SpriteFlag.Invisible, false)
                    }
                } else {
                    up_arrow.setFlag(SpriteFlag.Invisible, true)

                }
            }
            if (controller.up.isPressed()) {
                //angleX += 0 - 0.05
                if (level < 3) {
                    if (robber.y > 85) {
                        if (!(level === 1 && camx > 115 && camx < 180 && robber.y < 93)) {
                            robber.y -= 0.5
                            camx -= 0.2
                        }
                    }
                } else {
                    if ((robber.isHittingTile(CollisionDirection.Bottom) || robber.isHittingTile(CollisionDirection.Left) || robber.isHittingTile(CollisionDirection.Right)) && !(jumping)) {
                        robber.vy = -75
                        jumping = true
                        if (robber.isHittingTile(CollisionDirection.Left)) {

                        }
                        if (robber.isHittingTile(CollisionDirection.Right)) {

                        }
                        timer.after(500, function () {
                            jumping = false
                        })

                    }
                }




            }
            if (controller.down.isPressed()) {
                //angleX += 0.05
                if (level < 3) {
                    if (robber.y < 105) {
                        robber.y += 0.5
                        camx += 0.2
                    }
                }
            }
            if (controller.A.isPressed()) {

                if (camx > 115 && camx < 150) {
                    if (!dooropen) {
                        open()
                        dooropen = true
                    }
                } else {

                }

            }

            updateCube()
            if (overlay.y > 60) {
                overlay.setPosition(80, 60)
                overlay.setVelocity(0, 0)
            }
            if (animCheck > 0 && !controller.left.isPressed() && !controller.right.isPressed()) {
                animCheck = 0

                animation.stopAnimation(animation.AnimationTypes.All, robber)
                console.log('yes')

            }
            if (isopeneing) {
                doorChangeX -= 0.60
                doorChangeZ -= 0.32
                dooropnumimg++
                if (dooropnumimg > 25) {
                    isopeneing = false
                    canmove = false
                    timer.after(500, function () {
                        overlay.setVelocity(0, 70)

                        timer.after(2000, function () {

                            overlay.setVelocity(0, -70)
                            level += 1
                            camx = -65
                            mona5.setImage(assets.image`Mona`)
                            mona6.setImage(assets.image`myImage2`)
                            camx = -65
                            sprites.destroyAllSpritesOfKind(SpriteKind.Decor)
                            timer.after(500, function () {
                                canmove = true
                                // camx = -65
                            })
                        })
                    })

                }
            }
            if (level === 2) {
                if (level === 2 && camx > 10 && camx < 25) {
                    up_arrow.setFlag(SpriteFlag.Invisible, false)
                    if (controller.A.isPressed() && (!(next))) {
                        next = true

                        overlay.setPosition(80, -60)
                        overlay.setVelocity(0, 70)

                        timer.after(2000, function () {

                            overlay.setVelocity(0, -70)
                            sprites.destroyAllSpritesOfKind(SpriteKind.Decor2)
                            up_arrow.setFlag(SpriteFlag.Invisible, true)
                            level = 3
                            robber.ay = 100
                            tiles.setCurrentTilemap(tilemap`level2`)
                            scene.cameraFollowSprite(robber)
                            tiles.placeOnTile(robber, tiles.getTileLocation(0, 14))
                        })

                    }
                } else {
                    up_arrow.setFlag(SpriteFlag.Invisible, true)
                }
            }
        }
        function open() {
            isopeneing = true

        }
    })

//let player2 = ArcadeMIDIBlocks.create_wrapper()
//player2.set_images([assets.image`myimage2`])
//player2.play()


