import Link from 'next/link';

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using Mopshy's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services."
    },
    {
      title: "2. Description of Service",
      content: "Mopshy provides AI-powered automation services including lead generation, sales automation, CRM integration, and custom application development. Our services are designed to help businesses automate their operations and improve efficiency."
    },
    {
      title: "3. User Accounts",
      content: "To access certain features of our services, you may be required to create an account. You are responsible for:",
      list: [
        "Maintaining the confidentiality of your account credentials",
        "All activities that occur under your account",
        "Providing accurate and complete information",
        "Promptly updating your account information"
      ]
    },
    {
      title: "4. Acceptable Use",
      content: "You agree to use our services only for lawful purposes and in accordance with these terms. You may not:",
      list: [
        "Use our services for any illegal or unauthorized purpose",
        "Violate any applicable laws or regulations",
        "Interfere with or disrupt our services or servers",
        "Attempt to gain unauthorized access to our systems",
        "Use our services to send spam or unsolicited communications",
        "Reverse engineer or attempt to extract source code"
      ]
    },
    {
      title: "5. Payment Terms",
      content: "For paid services, you agree to pay all fees as described in your service agreement. Payment terms include:",
      list: [
        "Fees are due in advance and non-refundable unless otherwise stated",
        "We may change our fees with 30 days' notice",
        "Late payments may result in service suspension",
        "You are responsible for all taxes related to your use of our services"
      ]
    },
    {
      title: "6. Intellectual Property",
      content: "Our services and all related content, features, and functionality are owned by Mopshy and are protected by copyright, trademark, and other intellectual property laws.",
      subsections: [
        {
          title: "Your Content",
          content: "You retain ownership of any content you provide to us. By using our services, you grant us a license to use, modify, and display your content as necessary to provide our services."
        },
        {
          title: "Our Content",
          content: "We grant you a limited, non-exclusive license to use our services for your business purposes, subject to these terms."
        }
      ]
    },
    {
      title: "7. Privacy and Data Protection",
      content: "Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference."
    },
    {
      title: "8. Service Availability",
      content: "We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may:",
      list: [
        "Perform scheduled maintenance with advance notice",
        "Temporarily suspend services for emergency maintenance",
        "Modify or discontinue features with reasonable notice"
      ]
    },
    {
      title: "9. Limitation of Liability",
      content: "To the maximum extent permitted by law, Mopshy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.",
      additional: "Our total liability for any claims arising from or related to our services shall not exceed the amount you paid us in the 12 months preceding the claim."
    },
    {
      title: "10. Indemnification",
      content: "You agree to indemnify and hold harmless Mopshy from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights."
    },
    {
      title: "11. Termination",
      content: "Either party may terminate the service agreement at any time with appropriate notice as specified in your service agreement. Upon termination:",
      list: [
        "Your access to our services will cease",
        "We will provide you with your data in a standard format",
        "You remain responsible for any outstanding fees",
        "Provisions that should survive termination will remain in effect"
      ]
    },
    {
      title: "12. Dispute Resolution",
      content: "Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except that either party may seek injunctive relief in court."
    },
    {
      title: "13. Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of the State of Pennsylvania, without regard to its conflict of law provisions."
    },
    {
      title: "14. Changes to Terms",
      content: "We may modify these terms at any time by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms."
    },
    {
      title: "15. Severability",
      content: "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect."
    },
    {
      title: "16. Contact Information",
      content: "If you have any questions about these Terms of Service, please contact us:"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1f3a] text-white pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              These terms govern your use of Mopshy's AI automation platform and services.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm backdrop-blur-sm">
              Last updated: January 15, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {sections.map((section, idx) => (
              <div key={idx} className="mb-12 pb-8 border-b border-slate-200 last:border-b-0">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                  {section.title}
                </h2>
                
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="space-y-3 mb-6 pl-6">
                    {section.list.map((item, i) => (
                      <li key={i} className="text-slate-700 text-base sm:text-lg leading-relaxed list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((sub, i) => (
                  <div key={i} className="mt-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{sub.title}</h3>
                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">{sub.content}</p>
                  </div>
                ))}

                {section.additional && (
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {section.additional}
                  </p>
                )}

                {section.title === "16. Contact Information" && (
                  <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="space-y-3">
                      <div className="text-base sm:text-lg">
                        <strong className="text-slate-900">Email:</strong>{' '}
                        <Link href="mailto:mopshyai@gmail.com" className="text-blue-600 hover:underline">
                          mopshyai@gmail.com
                        </Link>
                      </div>
                      <div className="text-base sm:text-lg">
                        <strong className="text-slate-900">Phone:</strong>{' '}
                        <Link href="tel:+14122143460" className="text-blue-600 hover:underline">
                          (412) 214-3460
                        </Link>
                      </div>
                      <div className="text-base sm:text-lg">
                        <strong className="text-slate-900">Address:</strong>{' '}
                        <span className="text-slate-700">Pittsburgh, PA, United States</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}