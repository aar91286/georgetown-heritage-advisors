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


<form
  className="consultation-form"
  action="https://formspree.io/f/mykqqeyp"
  method="POST"
>

<input 
  name="name" 
  placeholder="Full Name" 
/>

<input 
  name="email" 
  type="email"
  placeholder="Email Address" 
/>

<input 
  name="phone" 
  placeholder="Phone Number" 
/>

<input 
  name="automobile" 
  placeholder="Automobile(s) of Interest" 
/>

<input 
  name="timeline" 
  placeholder="Desired Timeline" 
/>

<input 
  name="budget" 
  placeholder="Approximate Budget Range" 
/>

<textarea 
  name="message"
  placeholder="Tell us about the automobile you are pursuing."
/>


        <button>
          Request Advisory Review
        </button>

      </form>

    </main>
  );
}