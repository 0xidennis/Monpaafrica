export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="section-tag">Testimonials</div>
      <h2 className="section-title">What our users are saying.</h2>
      <p className="section-sub">Don&apos;t take our word for it — hear it directly from the people Monpa has helped.</p>
      <div className="testimonials-grid">
        <div className="testimonial-card reveal">
          <div className="stars">★★★★★</div>
          <div className="testimonial-text">&quot;I was deceived twice buying phones online before Monpa. Now I don&apos;t release a kobo until I confirm the item is genuine. No more wahala, no more regret.&quot;</div>
          <div className="testimonial-author">
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face" alt="Adaeze Okonkwo" />
            <div>
              <div className="author-name">Adaeze Okonkwo</div>
              <div className="author-role">Buyer · Port Harcourt</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card reveal reveal-delay-1">
          <div className="stars">★★★★★</div>
          <div className="testimonial-text">&quot;Clients used to ghost me after delivery. With Monpa, I know the money is locked in before I open Figma. I&apos;ve tripled my freelance income this year.&quot;</div>
          <div className="testimonial-author">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face" alt="Taiwo Ibidapo" />
            <div>
              <div className="author-name">Taiwo Ibidapo</div>
              <div className="author-role">Freelancer · Lagos</div>
            </div>
          </div>
        </div>
        <div className="testimonial-card reveal reveal-delay-2">
          <div className="stars">★★★★★</div>
          <div className="testimonial-text">&quot;The milestone feature is a game-changer for our import business. We pay suppliers in stages, goods arrive safely, and everyone sleeps well at night.&quot;</div>
          <div className="testimonial-author">
            <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop&crop=face" alt="Bello Musa" />
            <div>
              <div className="author-name">Bello Musa</div>
              <div className="author-role">Importer · Kano</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
