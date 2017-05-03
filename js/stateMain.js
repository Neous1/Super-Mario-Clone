var StateMain={    
    
   preload:function(){
        if (screen.width < 1500) {
            game.scale.forceOrientation(true, false);
        }
        game.load.image("map1", "images/SuperMarioBrosMap1-1BG.png");
        game.load.spritesheet("mario", "images/mario.png", 20, 32, 32)
    },
    
    create:function(){

        game.physics.startSystem(Phaser.Physics.Arcade);
        //background
        this.map1 = game.add.image(0,0,"map1");
        this.mario = game.add.sprite(0, 175,"mario");
        this.mario.animations.add("walk", [22,23,24,25,26], 12, true);

        game.physics.enable(this.mario, Phaser.Physics.ARCADE);

        this.mario.body.velocity.x = direction * SPEED;
    },
    
    update:function(){       
        
    }    
    
}