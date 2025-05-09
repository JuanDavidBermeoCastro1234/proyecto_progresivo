import Game  from './game'; // Ruta relativa desde App.tsx
import Link from 'next/link';


function App() {
  return (
    <div>
      <h1>Mi Juego con Phaser</h1>
      <Link href="Page1">
      volver vale 
      </Link>
      <Game />
    </div>
  );
}

export default App;
