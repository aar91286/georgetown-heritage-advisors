export default function Consultation() {
  return (
    <main className="consultation-page">

      <section className="consultation-header">

        <p className="eyebrow">
          PRIVATE CLIENT CONSULTATION
        </p>

        <h1>
          Begin Your Acquisition Journey.
        </h1>

        <p>
          Exceptional automobiles deserve exceptional diligence.
          Please share details regarding your desired acquisition
          and Georgetown Heritage Advisors will respond personally.
        </p>

      </section>


      <form className="consultation-form">

        <input placeholder="Full Name" />

        <input placeholder="Email Address" />

        <input placeholder="Phone Number" />

        <input placeholder="Automobile(s) of Interest" />

        <input placeholder="Desired Timeline" />

        <input placeholder="Approximate Budget Range" />


        <textarea 
          placeholder="Tell us about the automobile you are pursuing."
        />


        <button>
          Request Advisory Review
        </button>

      </form>

    </main>
  );
}