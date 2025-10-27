export default function Home() {
  return (
    <div className="main-container">
      <h1>Bienvenue sur mon site de packs de modules !</h1>
      <p>
        Déployé avec Next.js App Router, GitHub & Vercel <span role="img" aria-label="rocket">🚀</span>
      </p>
      <ul>
        <li>Module 1</li>
        <li>Module 2</li>
        <li>Module 3</li>
      </ul>
      <button onClick={() => alert('Merci pour ton intérêt !')}>
        Voir tous les packs
      </button>
    </div>
  );
}

