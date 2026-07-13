import Image from "next/image";
import Link from "next/link";

export default function FounderPage() {
  return (
    <main className="founder-page">
      {/* Ferrari hero image */}
      <section className="founder-hero">
        <Image
          src="/images/daytona-hero.jpeg"
          alt="Ferrari Daytona parked on a quiet European street"
          fill
          priority
          sizes="100vw"
          className="founder-hero-image"
        />

        <div className="founder-hero-overlay" />

        <div className="founder-hero-label">
          <p>A Letter From the Founder</p>
        </div>
      </section>

      {/* Page introduction */}
      <section className="founder-introduction">
        <p className="founder-introduction-eyebrow">
          Georgetown Heritage Advisors
        </p>

        <h1>A Letter From the Founder</h1>

        <div className="founder-gold-line" />
      </section>

      {/* Founder information and letter */}
      <section className="founder-letter-section">
        <div className="founder-letter-grid">
          <aside className="founder-sidebar">
            <Image
              src="/images/gha-crest.png"
              alt="Georgetown Heritage Advisors crest"
              width={170}
              height={170}
              className="founder-crest"
            />

            <div className="founder-details">
              <p className="founder-name">Alan Rubino</p>
              <p className="founder-title">Founder</p>
              <p className="founder-company">
                Georgetown Heritage
                <br />
                Advisors
              </p>
            </div>
          </aside>

          <article className="founder-copy">
            <p className="founder-opening">
              I’ve had a lifelong passion for cars that corresponds with my
              earliest memories.
            </p>

            <p>
              I like to think this started with my father and his car. Seeing
              his grey BMW in the driveway as a little boy, taking rides in it
              to the beach and around town—as a Tears for Fears greatest-hits
              cassette provided the background soundtrack—still hovers clearly
              in my mind.
            </p>

            <p>
              Over the years, I’ve come to appreciate that acquiring an
              exceptional automobile is about far more than purchasing
              transportation or a utilitarian item. It is about preserving
              history, honoring engineering, becoming the next steward of
              something that deserves to be cared for, and finding a tangible
              embodiment of dreams, memories, and emotions.
            </p>

            <p>
              The best automobiles are not simply owned. They are entrusted.
              This philosophy became the foundation of Georgetown Heritage
              Advisors.
            </p>

            <blockquote className="founder-pullquote">
              <p>
                Extraordinary automobiles deserve more than transactions.
              </p>
              <span>They deserve thoughtful representation.</span>
            </blockquote>

            <p>
              Today’s collector-car market offers extraordinary opportunities,
              but it also demands extraordinary discipline. While information
              is abundant, true insight is rare.
            </p>

            <p>
              A beautiful photograph cannot reveal deferred maintenance, and
              an enthusiastic seller cannot replace objective due diligence.
              Excitement alone should never substitute for careful judgment.
            </p>

            <blockquote className="founder-pullquote founder-pullquote-short">
              <p>We do not sell inventory.</p>
              <span>We serve clients.</span>
            </blockquote>

            <p>
              Our responsibility is to protect judgment, preserve confidence,
              and guide meaningful automotive decisions with the care expected
              of a boutique professional advisory firm.
            </p>

            <p>
              The name Georgetown Heritage Advisors was chosen intentionally.
            </p>

            <p>
              Georgetown reflects the education that helped shape how I think
              about business, relationships, and responsibility.
            </p>

            <p>Heritage reflects something even more important.</p>

            <p>
              Great automobiles connect generations. They carry stories,
              craftsmanship, and design philosophies that deserve to endure
              long after their original production ends. They remind us that
              excellence is rarely accidental and that lasting value is built
              through patience, integrity, and uncompromising standards.
            </p>

            <p>Those same principles guide every recommendation we make.</p>

            <p>
              Whether assisting a client in acquiring a first enthusiast
              automobile or helping locate a once-in-a-lifetime collector car,
              my approach remains the same.
            </p>

            <blockquote className="founder-principles">
              <p>Listen first.</p>
              <p>Research thoroughly.</p>
              <p>Question assumptions.</p>
              <p>Verify everything.</p>
            </blockquote>

            <p>
              Never allow emotion to replace discipline—but ensure that passion
              drives the journey.
            </p>

            <blockquote className="founder-pullquote">
              <p>The objective is not simply to buy a car.</p>
              <span>It is to buy the right car.</span>
            </blockquote>

            <p>
              I believe trust is earned through preparation, honesty, and an
              unwavering commitment to acting in the client’s best interest.
              That commitment extends beyond the day an automobile is
              purchased.
            </p>

            <p>
              The relationships we hope to build are measured in years, not
              transactions.
            </p>

            <p>
              It is my hope that clients become more than business contacts—that
              they become friends.
            </p>

            <p>
              Thank you for visiting Georgetown Heritage Advisors. It would be
              a privilege to represent you in the acquisition of an
              extraordinary automobile.
            </p>

            <div className="founder-signature">
              <p className="founder-closing">With gratitude,</p>

              <p className="founder-signature-name">Alan Rubino</p>

              <p className="founder-signature-title">
                Founder
                <br />
                Georgetown Heritage Advisors
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Final call to action */}
      <section className="founder-cta">
        <div className="founder-cta-inner">
          <p className="founder-cta-eyebrow">Private Automotive Counsel</p>

          <h2>Begin the Conversation</h2>

          <p>
            Whether you are considering your first enthusiast automobile or
            adding to an established collection, every engagement begins with a
            conversation.
          </p>

          <Link href="/#contact" className="founder-cta-button">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}