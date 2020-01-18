
/**********************************************************     GLOBALE VARIABLEN   **********************************************/

var resultTime, resultPoints;                                   // Ergebnistexte
var time, score;                                                // Daten aus dem Spiel
var btn_home;                                                   // Button um zum Menü zu kommen
var congrats, t1, t2;                                           //Texte
var mike, blase;
var coins;

class End_Time extends Phaser.Scene {

    constructor() {
        super({key: "End_Time"});
    }

    /**
     ***************************************     DATEN AUS DEM SPIEL   ***************************************
    */
    init(data) {
        score = data[0];
        time = data[1];
        coins = data[2];
    }

    /**
     ***************************************    BENÖTIGTE BILDER   ***************************************
    */
    preload() {
        this.load.image('orange', 'assets/orange.png');
        this.load.image('Mike', 'assets/mike.png');
        this.load.image('Blase', 'assets/description.png');
        this.load.image('Home', 'assets/home.png');
    }

    create() {

        /**
         ***********************************    HINTERGRUND     ***********************************************
         Ist die Höhe des Bildes kleiner als die Höhe des Geräts, so wird die Höhe an die des Geräts angepasst
         Ist die Breite kleiner als die des Geräts, so wird die Breite des Bildes dem des Geräts angepasst
         Das Verhältnis des Bildes bleibt gleich, sodass sich das Bild nicht streckt
        **/
        // var background = this.add.image(0, 0, 'orange');
        // background.displayHeight = this.sys.game.config.height/2;
        // background.displayWidth = this.sys.game.config.width/2;
        // background.y = game.config.height / 2;
        // background.x = game.config.width / 2;

        //this.cameras.main.setBackgroundColor('#FFFFFF');

        mike = this.add.image(0, 0, 'Mike');
        mike.y = game.config.height - 200;
        mike.x = game.config.width * 0.2;
        mike.setScale(0.3);
        //mike.displayHeight = game.config.height * 0.2;
        //mike.scaleX = mike.scaleY;

        congrats = this.add.text(0, 0, "GLÜCKWUNSCH", {fontFamily: 'AhkioW05-Light', fontSize: '60px', fill: "#000000"});
        congrats.y = (game.config.height / 2) - (game.config.height * 0.22);
        //congrats.y = (game.config.height * 0.05);
        congrats.x = (game.config.width / 2) - (congrats.width/2);

        // t1 = this.add.text(0, 0, "Du hast in", {fontFamily: 'AhkioW05-Light', fontSize: '50px', fill: "#000000"});
        // //t1.y = (game.config.height / 2) - (game.config.height * 0.13);
        // t1.y = (game.config.height * 0.2);
        // t1.x = (game.config.width / 2) - (t1.width/2);

        resultTime = this.add.text(0, 0, time + " SEKUNDEN" , {fontFamily: 'AhkioW05-Light', fontSize: '60px', fill: "#000000"});
        resultTime.y = (game.config.height / 2) - (game.config.height * 0.05);
        //resultTime.y = (game.config.height * 0.3);
        resultTime.x = (game.config.width / 2) - (resultTime.width/2);

        resultPoints = this.add.text(0, 0, score + "", {fontFamily: 'AhkioW05-Light', fontSize: '60px', fill: "#000000"});
        resultPoints.y = (game.config.height / 2) + (game.config.height * 0.05);
        //resultPoints.y = (game.config.height * 0.5);
        resultPoints.x = (game.config.width / 2) - (resultPoints.width/2);

        // t2 = this.add.text(0, 0, "gespart!", {fontFamily: 'AhkioW05-Light', fontSize: '50px', fill: "#000000"});
        // //t2.y = (game.config.height / 2) + (game.config.height * 0.13);
        // t2.y = (game.config.height * 0.65);
        // t2.x = (game.config.width / 2) - (t2.width/2);

        /**
         ***********************************    HOMEBUTTON     ***********************************************
         Klickt man auf den Button, kommt man zu Hauptmenü
        **/
        //btn_home = this.add.text(0, 0,  "X", {fontFamily: 'AhkioW05-Light', fontSize: '80px', fill: "#000000"}); 
        //btn_home.y = (game.config.height / 2) - (btn_home.height/2) - (game.config.height * 0.3);
        //btn_home.x = (game.config.width / 2) - (btn_home.width/2) - (background.displayWidth * 0.45);
        btn_home = this.add.image(0, 0, 'Home');
        btn_home.y = (game.config.height * 0.7); 
        btn_home.x = (game.config.width / 2);
        btn_home.setScale(0.2);
        btn_home.setInteractive();
        btn_home.on('pointerup', () => {
            this.scene.stop('Game_Easy');
            this.scene.stop('Game_Medium');
            this.scene.stop('Game_Hard');
            this.scene.stop('Game_Expert');
            this.scene.start('Start');
        });
        btn_home.on('pointerover', () => {
            //btn_home.setShadow(3, 3, 'rgba(0,0,0,0.78)', 5);
        })
        btn_home.on('pointerout', () => {
            //btn_home.setShadow(0, 0, 'rgba(0,0,0,0.78)', 0);
        })

        // btn_home = this.add.text(0, 0,  "HOME", {fontFamily: 'AhkioW05-Light', fontSize: '40px', fill: "#000000"}); 
        // btn_home.y = (game.config.height / 2) + (game.config.height * 0.17);
        // btn_home.x = (game.config.width / 2) - (btn_home.width/2);
        // btn_home.setInteractive();
        // btn_home.on('pointerup', () => {
        //     this.scene.stop('Game_Easy');
        //     this.scene.stop('Game_Medium');
        //     this.scene.stop('Game_Hard');
        //     this.scene.stop('Game_Expert');
        //     this.scene.start('Start');
        // });

    }
}