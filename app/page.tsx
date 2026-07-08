export default function Home() {
 return (
   <main>
     <section className="hero">
       <nav className="nav">
         <div className="brand">
           <div className="crest">GHA</div>
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
         <p className="eyebrow">Independent Counsel for Exceptional Automobile Acquisitions</p>
         <h1>
           Representing Extraordinary Automobiles.
           <br />
           Advising Extraordinary People.
         </h1>
         <p className="hero-text">
           Georgetown Heritage Advisors represents discerning clients in the acquisition
           of enthusiast, luxury, and collector automobiles through thoughtful research,
           disciplined due diligence, and trusted counsel.
         </p>
         <div className="hero-buttons">
           <a className="primary-button">Schedule a Consultation</a>
           <a className="secondary-button">Read the Founder’s Letter</a>
         </div>
       </div>
     </section>

     <section className="section philosophy">
       <p className="section-label">Our Philosophy</p>
       <h2>Extraordinary automobiles deserve more than transactions.</h2>
       <p>
         They deserve thoughtful representation. We do not sell inventory. We serve
         clients. Our role is to protect judgment, preserve confidence, and guide
         meaningful automotive decisions with the care expected of a professional
         advisory firm.
       </p>
     </section>

     <section className="section cards">
       <div className="card">
         <h3>Representation</h3>
         <p>Independent counsel with no dealer inventory, no sales pressure, and no divided loyalty.</p>
       </div>
       <div className="card">
         <h3>Due Diligence</h3>
         <p>Market research, history review, seller conversations, inspection coordination, and analysis.</p>
       </div>
       <div className="card">
         <h3>Acquisition</h3>
         <p>Professional guidance through negotiation, documentation, transport, delivery, and stewardship.</p>
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