import packs from "./packs";

export default function Home() {
  return (
    <div className="main-shop-container">
      <header>
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>👑 Packs de modules – Boostez votre business</h1>
        <p className="subtitle">
          Solutions clé en main, paiement simple, livraison rapide.
        </p>
      </header>

      <section>
        <table className="packs-table">
          <thead>
            <tr>
              <th>Pack</th>
              <th>Description</th>
              <th>Inclus</th>
              <th>Prix</th>
            </tr>
          </thead>
          <tbody>
            {packs.map(pack => (
              <tr key={pack.id}>
                <td>
                  <strong>{pack.nom}</strong>
                </td>
                <td>{pack.description}</td>
                <td>
                  <ul>
                    {pack.inclus.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <span className="prix">{pack.prix}</span>
                  <button className="cta-btn" onClick={() => alert(`Contacte-nous pour le ${pack.nom}`)}>
                    Choisir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer>
        <p>
          <b>Comment ajouter un pack ?</b> Ouvre <code>/app/packs.js</code> et ajoute une ligne dans le tableau, c’est tout.<br />
          Ce site Next.js peut évoluer : paiement, inscription, backoffice sur demande.
        </p>
      </footer>
    </div>
  );
}
