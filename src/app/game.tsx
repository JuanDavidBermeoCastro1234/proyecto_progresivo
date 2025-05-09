"use client";


import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser'; // 🔧 Importar correctamente

const Game = () => {
  const gameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current!,
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    function preload(this: Phaser.Scene) {
      this.load.image('sky', 'https://labs.phaser.io/assets/skies/space3.png');
    }

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, 'sky');
    }

    function update(this: Phaser.Scene) {
      // game loop
    }

    return () => {
      game.destroy(true);
    };
  }, []);
  

  return <div ref={gameRef} />;
  
};

export default Game;
