'use client';

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HEADER SIMPLE */}
      <nav className="p-6 flex justify-between items-center border-b">
        <span className="font-bold text-xl text-blue-600 uppercase tracking-tighter">Vab's Clean</span>
        <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium text-sm">Devis Gratuit</a>
      </nav>

      {/* HERO SECTION */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
          Nettoyage de Vitres & <span className="text-blue-600">Panneaux Solaires</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Services professionnels pour particuliers et entreprises à Mirambeau et ses alentours. Optimisez votre énergie et votre clarté.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-200">Prendre rendez-vous</a>
          <a href="#services" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold">Nos services</a>
        </div>
      </header>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-3xl hover:border-blue-500 transition-colors group">
            <div className="text-3xl mb-4">☀️</div>
            <h3 className="text-xl font-bold mb-2">Panneaux Solaires</h3>
            <p className="text-slate-500 text-sm">Nettoyage à l'eau pure pour maximiser votre production d'électricité (jusqu'à +20% de rendement).</p>
          </div>
          <div className="p-8 border rounded-3xl hover:border-blue-500 transition-colors group">
            <div className="text-3xl mb-4">🪟</div>
            <h3 className="text-xl font-bold mb-2">Vitrerie</h3>
            <p className="text-slate-500 text-sm">Baies vitrées, vérandas, vitrines. Un résultat sans traces pour une luminosité totale.</p>
          </div>
          <div className="p-8 border rounded-3xl hover:border-blue-500 transition-colors group">
            <div className="text-3xl mb-4">🧹</div>
            <h3 className="text-xl font-bold mb-2">Entretien Pro</h3>
            <p className="text-slate-500 text-sm">Nettoyage de bureaux, commerces et remise en état après travaux ou fin de chantier.</p>
          </div>
        </div>
      </section>

      {/* FORMULAIRE DE CONTACT (Via Formspree pour la simplicité) */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Une question ? Un devis ?</h2>
          <form action="https://formspree.io/f/VOTRE_ID" method="POST" className="grid gap-4">
            <input type="text" name="name" placeholder="Votre nom" required className="p-4 rounded-xl bg-slate-800 border-none text-white outline-blue-500" />
            <input type="tel" name="phone" placeholder="Votre téléphone" required className="p-4 rounded-xl bg-slate-800 border-none text-white outline-blue-500" />
            <select name="service" className="p-4 rounded-xl bg-slate-800 border-none text-white outline-blue-500">
              <option>Nettoyage Panneaux Solaires</option>
              <option>Nettoyage de Vitres</option>
              <option>Entretien Bureaux / Locaux</option>
            </select>
            <textarea name="message" placeholder="Votre message..." rows={4} className="p-4 rounded-xl bg-slate-800 border-none text-white outline-blue-500"></textarea>
            <button type="submit" className="bg-blue-600 p-4 rounded-xl font-bold hover:bg-blue-500 transition">Envoyer ma demande</button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 text-xs">
        © {new Date().getFullYear()} Vab's Clean - Mirambeau & Alentours
      </footer>
    </main>
  );
}
