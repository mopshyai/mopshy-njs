import Link from 'next/link';

export default function DisclaimerPage() {
  const sections = [
    {
      title: "General Information Disclaimer",
      content: "The information on this website is provided on an \"as is\" basis. To the fullest extent permitted by law, Mopshy excludes all representations, warranties, obligations, and liabilities arising out of or in connection with the information provided on this website.",
      additional: "The information provided on this website is for general informational purposes only and should not be considered as professional advice. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website."
    },
    {
      title: "Professional Advice Disclaimer",
      content: "The content on this website is for informational purposes only and should not be considered as professional business, marketing, or financial advice. Always consult with qualified professionals before making business decisions.",
      subsections: [
        {
          title: "Business and Marketing Advice",
          list: [
            "Marketing strategies and automation techniques may not work for all businesses",
            "Results may vary based on industry, market conditions, competition, and implementation quality",
            "We recommend consulting with marketing and business professionals for advice specific to your situation",
            "Past performance and case studies do not guarantee future results"
          ]
        },
        {
          title: "Financial and Investment Disclaimer",
          list: [
            "Any financial figures, ROI calculations, or revenue projections are estimates based on historical data",
            "Actual results may vary significantly from projections",
            "Business investments carry inherent risks",
            "Consult with financial advisors before making significant business investments"
          ]
        }
      ]
    },
    {
      title: "Advertising Disclaimer",
      content: "This website displays advertisements served by Google AdSense and other advertising networks. We want to be transparent about our advertising relationships and how they may affect the content you see.",
      subsections: [
        {
          title: "Advertising Relationships",
          list: [
            "We participate in Google AdSense and may earn revenue from advertisements displayed on our website",
            "Advertisements are selected by automated systems based on website content and visitor interests",
            "We do not personally endorse all products or services advertised on our website",
            "Advertising revenue helps support the free content and resources we provide"
          ]
        }
      ]
    },
    {
      title: "Affiliate Marketing Disclosure",
      content: "Some links on this website may be affiliate links, meaning we may earn a commission if you click on the link and make a purchase. This does not affect the price you pay, and we only recommend products and services we believe provide value."
    },
    {
      title: "External Links Disclaimer",
      content: "This website may contain links to external websites that are not provided or maintained by Mopshy. We have no control over the content, privacy policies, or practices of these external sites and cannot be held responsible for their content or availability.",
      list: [
        "External links are provided for convenience and informational purposes only",
        "We do not endorse or guarantee the accuracy of information on external websites",
        "Visiting external links is at your own risk",
        "We recommend reviewing the privacy policies of external websites before providing personal information"
      ]
    },
    {
      title: "Results and Testimonials Disclaimer",
      content: "Any case studies, testimonials, examples, or results mentioned on this website are not intended to represent or guarantee that anyone will achieve the same or similar results.",
      list: [
        "Results shown are specific to individual circumstances and may not be typical",
        "Success depends on various factors including effort, market conditions, and implementation quality",
        "We cannot guarantee specific outcomes or results",
        "Individual results may vary significantly"
      ]
    },
    {
      title: "Technical Disclaimer",
      content: "While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties about the technical performance, availability, or security of our website.",
      list: [
        "Website availability may be affected by maintenance, updates, or technical issues",
        "We are not responsible for any technical problems or data loss",
        "Users are responsible for maintaining appropriate security measures",
        "We recommend regular backups of any important data"
      ]
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, Mopshy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.",
      additional: "Our total liability for any claims arising from or related to our services or website content shall not exceed the amount you paid us in the 12 months preceding the claim."
    },
    {
      title: "Contact Information",
      content: "If you have any questions about this disclaimer, please contact us:"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8">
              Important disclaimers and limitations regarding our content, services, and advertising partnerships.
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

                {section.additional && (
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
                    {section.additional}
                  </p>
                )}

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
                          <li key={j} className="text-slate-700 text-base sm:text-lg leading-relaxed list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.title === "Contact Information" && (
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
                      <div className="text-base sm:text-lg">
                        <strong className="text-slate-900">Business Hours:</strong>{' '}
                        <span className="text-slate-700">Monday-Friday, 9:00 AM - 6:00 PM EST</span>
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