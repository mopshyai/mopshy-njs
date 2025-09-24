import Link from 'next/link';

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.",
      subsections: [
        {
          title: "Personal Information",
          list: [
            "Name and contact information (email, phone number)",
            "Company information and job title",
            "Account credentials and preferences",
            "Payment and billing information"
          ]
        },
        {
          title: "Usage Information",
          list: [
            "How you interact with our services",
            "Features you use and actions you take",
            "Device and browser information",
            "IP address and location data"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services.",
      list: [
        "Provide and operate our AI automation services",
        "Process transactions and send related information",
        "Send technical notices and support messages",
        "Respond to your comments and questions",
        "Improve our services and develop new features",
        "Protect against fraud and abuse"
      ]
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties except as described below.",
      subsections: [
        {
          title: "Service Providers",
          content: "We may share your information with third-party service providers who assist us in operating our services, such as:",
          list: [
            "Cloud hosting providers",
            "Payment processors",
            "Analytics services",
            "Customer support tools"
          ]
        },
        {
          title: "Legal Requirements",
          content: "We may disclose your information if required by law or in response to valid legal requests."
        }
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      list: [
        "Encryption of data in transit and at rest",
        "Regular security assessments and updates",
        "Access controls and authentication",
        "Employee training on data protection"
      ]
    },
    {
      title: "Your Rights",
      content: "You have certain rights regarding your personal information, including:",
      list: [
        "<strong>Access:</strong> Request a copy of your personal information",
        "<strong>Correction:</strong> Update or correct inaccurate information",
        "<strong>Deletion:</strong> Request deletion of your personal information",
        "<strong>Portability:</strong> Receive your data in a portable format",
        "<strong>Objection:</strong> Object to certain processing of your information"
      ],
      additional: "To exercise these rights, please contact us at"
    },
    {
      title: "Cookies and Tracking",
      content: "We use cookies and similar technologies to enhance your experience and analyze usage patterns.",
      subsections: [
        {
          title: "Types of Cookies",
          list: [
            "<strong>Essential Cookies:</strong> Required for basic functionality",
            "<strong>Analytics Cookies:</strong> Help us understand how you use our services",
            "<strong>Preference Cookies:</strong> Remember your settings and preferences"
          ]
        }
      ],
      additional: "You can control cookies through your browser settings, but disabling certain cookies may affect functionality."
    },
    {
      title: "International Transfers",
      content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the \"Last updated\" date."
    },
    {
      title: "Contact Us",
      content: "If you have any questions about this privacy policy or our data practices, please contact us:"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1f3a] text-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                
                {section.content && (
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 mb-6 pl-6">
                    {section.list.map((item, i) => (
                      <li 
                        key={i} 
                        className="text-slate-700 text-base sm:text-lg leading-relaxed list-disc"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.map((sub, i) => (
                  <div key={i} className="mt-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
                      {sub.title}
                    </h3>
                    {sub.content && (
                      <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                        {sub.content}
                      </p>
                    )}
                    {sub.list && (
                      <ul className="space-y-3 mb-4 pl-6">
                        {sub.list.map((item, j) => (
                          <li 
                            key={j} 
                            className="text-slate-700 text-base sm:text-lg leading-relaxed list-disc"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.additional && (
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {section.additional}{' '}
                    {section.title === "Your Rights" && (
                      <Link href="mailto:mopshyai@gmail.com" className="text-blue-600 hover:underline">
                        mopshyai@gmail.com
                      </Link>
                    )}
                    .
                  </p>
                )}

                {section.title === "Contact Us" && (
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