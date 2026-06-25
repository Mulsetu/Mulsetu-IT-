import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Mulsetu",
  description: "Privacy Policy of Mulsetu Agrotech Private Limited. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://mulsetu.com/privacy" },
};

const lastUpdated = "25 June 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-deep pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 border-b border-white/[0.06] pb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-teal mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">Privacy Policy</h1>
          <p className="text-muted text-sm">
            Last updated: {lastUpdated} &nbsp;|&nbsp; Mulsetu Agrotech Private Limited
          </p>
        </div>

        <div className="prose-legal">

          <Section title="1. Introduction">
            <p>
              Mulsetu Agrotech Private Limited (&ldquo;Mulsetu,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website{" "}
              <strong>mulsetu.com</strong> and provides technology, software development, AI automation, and related IT services. This Privacy Policy
              explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.
            </p>
            <p>
              By accessing mulsetu.com or contacting us, you acknowledge that you have read and understood this policy. This policy is published in
              compliance with the <strong>Information Technology Act, 2000</strong>, the{" "}
              <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>,
              and the <strong>Digital Personal Data Protection Act, 2023</strong> (DPDPA) of India.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect the following categories of information:</p>
            <SubHeading>2.1 Information You Provide Directly</SubHeading>
            <ul>
              <li><strong>Contact details:</strong> Name, email address, phone number, company name.</li>
              <li><strong>Inquiry details:</strong> Messages, project requirements, and any other information submitted via our contact form.</li>
              <li><strong>Business information:</strong> Industry, scale, and operational details shared during consultations.</li>
            </ul>
            <SubHeading>2.2 Automatically Collected Information</SubHeading>
            <ul>
              <li><strong>Usage data:</strong> Pages visited, time on site, referring URL, browser type, device type, and IP address.</li>
              <li><strong>Cookies and similar technologies:</strong> Session cookies to maintain website functionality. We do not use third-party advertising cookies.</li>
            </ul>
            <SubHeading>2.3 Information We Do Not Collect</SubHeading>
            <p>
              We do not knowingly collect sensitive personal data such as financial account numbers, government identification numbers, biometric data,
              health information, or data from children under 18 years of age.
            </p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use collected information for the following purposes:</p>
            <ul>
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To prepare and deliver project proposals, roadmaps, and service agreements.</li>
              <li>To communicate project updates, invoices, and support information.</li>
              <li>To improve our website, services, and user experience.</li>
              <li>To comply with applicable laws and legal obligations.</li>
              <li>To prevent fraud and ensure the security of our systems.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal data on the following lawful bases:</p>
            <ul>
              <li><strong>Consent:</strong> When you submit a contact form or voluntarily share information.</li>
              <li><strong>Contractual necessity:</strong> To fulfil service agreements with clients.</li>
              <li><strong>Legitimate interest:</strong> To operate, improve, and secure our website and services.</li>
              <li><strong>Legal obligation:</strong> Where processing is required by applicable Indian law.</li>
            </ul>
          </Section>

          <Section title="5. Sharing of Information">
            <p>We may share your information with:</p>
            <ul>
              <li>
                <strong>Service providers:</strong> Third-party vendors we use to operate our business (hosting, email delivery, analytics) who are
                contractually bound to process data only on our instructions.
              </li>
              <li>
                <strong>Professional advisors:</strong> Lawyers, accountants, or auditors where required.
              </li>
              <li>
                <strong>Legal authorities:</strong> Government or regulatory bodies when required by law, court order, or legal process.
              </li>
            </ul>
            <p>All third parties are required to maintain appropriate security standards for your data.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal data for as long as necessary to fulfil the purposes described in this policy, or as required by law. Inquiry data
              from non-clients is retained for up to 12 months. Client project data is retained for the duration of the engagement and for a reasonable
              period thereafter for legal and business record-keeping purposes.
            </p>
            <p>
              You may request deletion of your data at any time (see Section 9 — Your Rights).
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement reasonable technical and organisational measures to protect your information against unauthorised access, disclosure, alteration,
              or destruction. These include encrypted communications (HTTPS), access controls, and secure data handling practices.
            </p>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your
              data, we cannot guarantee its absolute security.
            </p>
          </Section>

          <Section title="8. Cookies">
            <p>
              Our website uses essential session cookies required for basic website functionality. We do not use tracking cookies, third-party advertising
              cookies, or behavioural profiling cookies. You may configure your browser to refuse cookies; however, some features of the website may not
              function correctly without them.
            </p>
          </Section>

          <Section title="9. Your Rights">
            <p>Under applicable Indian law and in accordance with the DPDPA 2023, you have the following rights:</p>
            <ul>
              <li><strong>Right to access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to erasure:</strong> Request deletion of your personal data, subject to our legal obligations.</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent for data processing at any time, without affecting prior processing.</li>
              <li><strong>Right to nominate:</strong> Nominate an individual to exercise rights on your behalf in case of death or incapacity (as provided under DPDPA 2023).</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:founder@mulsetu.com" className="text-teal-bright hover:underline">
                founder@mulsetu.com
              </a>.
              We will respond within 30 days.
            </p>
          </Section>

          <Section title="10. Grievance Officer">
            <p>
              In accordance with the Information Technology Act, 2000 and the rules made thereunder, we have appointed a Grievance Officer for addressing
              complaints and concerns regarding the processing of your personal data.
            </p>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 mt-3">
              <p className="text-soft text-sm leading-relaxed">
                <strong className="text-white">Grievance Officer</strong><br />
                Mulsetu Agrotech Private Limited<br />
                Email:{" "}
                <a href="mailto:founder@mulsetu.com" className="text-teal-bright hover:underline">
                  founder@mulsetu.com
                </a><br />
                Response time: Within 30 days of receipt of grievance.
              </p>
            </div>
          </Section>

          <Section title="11. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We
              encourage you to review the privacy policies of any external sites you visit.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. We encourage you to review
              this policy periodically. Continued use of the website after changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="13. Governing Law">
            <p>
              This Privacy Policy is governed by and construed in accordance with the laws of India. Any disputes arising under this policy shall be
              subject to the exclusive jurisdiction of the competent courts of India.
            </p>
          </Section>

          <Section title="14. Contact Us">
            <p>For any questions, requests, or concerns regarding this Privacy Policy, please contact:</p>
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
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
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
