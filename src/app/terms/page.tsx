import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Mulsetu",
  description: "Terms of Service for Mulsetu Agrotech Private Limited. Read the terms that govern your use of our website and services.",
  alternates: { canonical: "https://mulsetu.com/terms" },
};

const lastUpdated = "25 June 2026";

export default function TermsPage() {
  return (
    <main className="bg-deep pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 border-b border-white/[0.06] pb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-teal mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Terms of Service</h1>
          <p className="text-muted text-sm">
            Last updated: {lastUpdated} &nbsp;|&nbsp; Mulsetu Agrotech Private Limited
          </p>
        </div>

        <div className="prose-legal">

          <Section title="1. Acceptance of Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the website{" "}
              <strong>mulsetu.com</strong> and the services provided by{" "}
              <strong>Mulsetu Agrotech Private Limited</strong> (&ldquo;Mulsetu,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;).
            </p>
            <p>
              By accessing the website or engaging our services, you (&ldquo;Client&rdquo; or &ldquo;you&rdquo;) agree to be bound by these Terms. If you
              do not agree, please do not use the website or our services. These Terms apply to all visitors, users, and clients.
            </p>
          </Section>

          <Section title="2. Services">
            <p>Mulsetu provides technology and IT services including but not limited to:</p>
            <ul>
              <li>Website and web application development</li>
              <li>Mobile application development (Android, iOS, Flutter)</li>
              <li>Custom software and ERP development</li>
              <li>SaaS platform development</li>
              <li>AI automation, chatbots, and workflow automation</li>
              <li>Digital growth, SEO, and performance optimisation</li>
              <li>Dedicated IT team and technology consulting</li>
            </ul>
            <p>
              The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate written agreement or Statement of Work
              (&ldquo;SOW&rdquo;) executed between Mulsetu and the Client. These Terms apply alongside any such agreement.
            </p>
          </Section>

          <Section title="3. Use of Website">
            <p>
              You agree to use mulsetu.com only for lawful purposes and in a manner that does not infringe the rights of others. You must not:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable local, national, or international laws or regulations.</li>
              <li>Transmit unsolicited commercial communications (spam).</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems.</li>
              <li>Introduce malware, viruses, or other malicious code.</li>
              <li>Reproduce, duplicate, or resell any part of the website without our express written consent.</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            <SubHeading>4.1 Mulsetu&apos;s Property</SubHeading>
            <p>
              The website, its content, design, code, branding, and all materials created by Mulsetu — including pre-existing tools, frameworks, libraries,
              and methodologies — remain the exclusive intellectual property of Mulsetu Agrotech Private Limited unless expressly transferred in a written
              agreement.
            </p>
            <SubHeading>4.2 Client Deliverables</SubHeading>
            <p>
              Upon full payment of all amounts due under the applicable SOW or service agreement, ownership of the custom deliverables specifically
              developed for the Client (excluding Mulsetu&apos;s pre-existing IP, third-party components, and open-source software) transfers to the Client.
            </p>
            <SubHeading>4.3 Client Content</SubHeading>
            <p>
              You retain all rights to content, data, and materials you provide to us. By sharing such materials, you grant Mulsetu a limited licence to
              use them solely to provide the agreed services.
            </p>
          </Section>

          <Section title="5. Client Responsibilities">
            <p>As a Client, you are responsible for:</p>
            <ul>
              <li>Providing accurate, complete, and timely information necessary for service delivery.</li>
              <li>Reviewing and providing feedback on deliverables within agreed timelines.</li>
              <li>Ensuring that any content or data you provide does not violate third-party rights or applicable laws.</li>
              <li>Paying all agreed fees on time as per the payment schedule in the SOW.</li>
              <li>Obtaining necessary licences for third-party tools or software required for your project.</li>
            </ul>
          </Section>

          <Section title="6. Fees and Payment">
            <p>
              Fees for services are as agreed in the applicable SOW or service proposal. Unless otherwise specified:
            </p>
            <ul>
              <li>Invoices are due within the payment timeline stated in the SOW.</li>
              <li>Payments are non-refundable once work has commenced on the agreed scope, except as otherwise stated in writing.</li>
              <li>Late payments may attract interest at 1.5% per month or the maximum permitted by law.</li>
              <li>Mulsetu reserves the right to pause or terminate services on accounts with outstanding payments.</li>
            </ul>
            <p>Prices are quoted in the currency agreed upon in the applicable SOW or proposal (USD, INR, or otherwise). Applicable taxes (including GST for Indian clients) will be applied as required by local law.</p>
          </Section>

          <Section title="7. Confidentiality">
            <p>
              Both parties agree to keep confidential any non-public information shared during the engagement that is designated as confidential or that a
              reasonable person would understand to be confidential. This obligation does not apply to information that:
            </p>
            <ul>
              <li>Was already publicly known at the time of disclosure.</li>
              <li>Becomes publicly known through no fault of the receiving party.</li>
              <li>Was independently developed by the receiving party.</li>
              <li>Must be disclosed by applicable law or court order.</li>
            </ul>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              The website and its content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without any warranty of any kind, express or implied,
              including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p>
              Mulsetu does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, Mulsetu Agrotech Private Limited shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of the website or our services,
              even if advised of the possibility of such damages.
            </p>
            <p>
              Our total cumulative liability to you for any claims arising from these Terms or your engagement with us shall not exceed the total fees paid
              by you to Mulsetu in the three (3) months preceding the claim.
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Mulsetu Agrotech Private Limited and its directors, employees, and agents from any claims,
              liabilities, damages, losses, and expenses (including legal fees) arising out of your violation of these Terms, your use of our services, or
              any content you provide to us.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              Either party may terminate a service engagement by providing written notice as specified in the applicable SOW. Upon termination:
            </p>
            <ul>
              <li>All fees for work completed up to the date of termination become immediately due.</li>
              <li>Mulsetu will deliver all completed work product to the Client upon receipt of outstanding payment.</li>
              <li>Each party will return or destroy the other&apos;s confidential information as reasonably practicable.</li>
            </ul>
            <p>
              Mulsetu reserves the right to immediately suspend or terminate access to services if you violate these Terms or engage in fraudulent or
              unlawful activity.
            </p>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>
            <p>
              In the event of any dispute arising from or relating to these Terms or the services provided by Mulsetu, the parties shall first attempt to
              resolve the dispute through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in
              accordance with the Arbitration and Conciliation Act, 1996 (India). The seat of arbitration shall be India, and proceedings shall be
              conducted in English.
            </p>
            <p>
              For matters not subject to arbitration, you submit to the exclusive jurisdiction of the competent courts of India.
            </p>
          </Section>

          <Section title="13. Changes to These Terms">
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the
              website or our services after any changes constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="14. Severability">
            <p>
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will
              continue in full force and effect.
            </p>
          </Section>

          <Section title="15. Entire Agreement">
            <p>
              These Terms, together with any applicable SOW or written service agreement, constitute the entire agreement between you and Mulsetu regarding
              the subject matter herein and supersede all prior communications, agreements, or understandings.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>For questions regarding these Terms, please contact us:</p>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 mt-3">
              <p className="text-soft text-sm leading-relaxed">
                <strong className="text-white">Mulsetu Agrotech Private Limited</strong><br />
                Website:{" "}
                <a href="https://mulsetu.com" className="text-teal-bright hover:underline">
                  mulsetu.com
                </a><br />
                Email:{" "}
                <a href="mailto:founder@mulsetu.com" className="text-teal-bright hover:underline">
                  founder@mulsetu.com
                </a>
              </p>
            </div>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] flex gap-6 text-sm text-muted">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display font-bold text-xl text-white mb-4">{title}</h2>
      <div className="space-y-3 text-soft text-sm leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-white [&_a]:text-teal-bright">
        {children}
      </div>
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-white/80 text-sm mt-4 mb-2">{children}</h3>;
}
