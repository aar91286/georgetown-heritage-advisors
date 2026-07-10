export default function Home() {
 return (
   <main>
     <section className="hero">
       <nav className="nav">
         <div className="brand">
           <img 
  className="crest-image" 
  src="/images/gha-crest.png" 
  alt="Georgetown Heritage Advisors crest"
/>
           <div>
             <p className="brand-name">Georgetown Heritage Advisors</p>
             <p className="brand-sub">Independent Automobile Advisory</p>
           </div>
         </div>

         <div className="nav-links">
           <a>Our Heritage</a>
           <a>Advisory Services</a>
           <a>The Method</a>
           <a>Insights</a>
         </div>
       </nav>

<div className="hero-content">
  <p className="eyebrow">
    Independent Counsel for Exceptional Automobile Acquisitions
  </p>

<h1>
  Representing Extraordinary Automobiles.
  <br />
  Advising Extraordinary People.
</h1>

<p className="hero-subtext">
  Georgetown Heritage Advisors represents discerning clients in the acquisition
  of enthusiast, luxury, and collector automobiles through thoughtful research,
  disciplined due diligence, and trusted counsel.
</p>
</div>

<div className="hero-buttons">
  <a className="primary-button" href="/consultation">
    Schedule a Consultation
  </a>

  <a className="secondary-button">
    Read the Founder’s Letter
  </a>
</div>
     </section>

<section className="section philosophy">
  <div className="philosophy-text">
    <p className="section-label">
      OUR HERITAGE
    </p>

    <h2>
      Extraordinary automobiles deserve more than transactions.
    </h2>

    <p>
      They deserve thoughtful representation. We do not sell inventory.
      We serve clients. Our role is to protect judgment, preserve confidence,
      and guide meaningful automotive decisions with the care expected of a
      professional advisory firm.
    </p>
  </div>

  <img
    className="philosophy-crest"
    src="/images/gha-crest.png"
    alt="Georgetown Heritage Advisors crest"
  />
</section>

<section className="section cards">

  <div className="card">
    <img src="/images/research-interior.jpg" />
    <span>01</span>
    <h3>Research & Due Diligence</h3>
    <p>
      Market intelligence, ownership history, documentation review,
      inspection coordination, and expert analysis before acquisition.
    </p>
  </div>

  <div className="card">
    <img src="/images/negotiation-interior.jpg" />
    <span>02</span>
    <h3>Negotiation & Representation</h3>
    <p>
      Professional representation designed to protect your interests,
      preserve discretion, and secure exceptional automobiles.
    </p>
  </div>

  <div className="card">
    <img src="/images/delivery-trailer.jpg" />
    <span>03</span>
    <h3>Delivery & Stewardship</h3>
    <p>
      Guidance through purchase completion, transport coordination,
      delivery, and the beginning of ownership.
    </p>
  </div>

</section>

     <section className="quote">
       <p>Trust is our only inventory.</p>
     </section>

     <footer>
       <p>Georgetown Heritage Advisors</p>
       <span>Representing Extraordinary Automobiles. Advising Extraordinary People.</span>
     </footer>
   </main>
 );
}