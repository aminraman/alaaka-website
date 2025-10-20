import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import Link from 'next/link';
import HeaderClient from './HeaderClient';

export const metadata = {
  title: {
    default: "Newark Central Masjid | Alaaka Association of New Jersey",
    template: "%s | Newark Central Masjid",
  },
  description:
    "Official website of Newark Central Masjid, operated by the Alaaka Association of New Jersey — serving the Muslim community through prayer, education, and unity.",
  keywords: [
    "Newark Central Masjid",
    "Alaaka Association of New Jersey",
    "Mosque Newark",
    "Islamic Center Newark",
    "Masjid Newark NJ",
    "Community Events",
    "Prayer Times",
  ],
  openGraph: {
    title: "Newark Central Masjid | Alaaka Association of New Jersey",
    description:
      "Join the Newark Central Masjid community — daily prayers, events, and programs led by the Alaaka Association of New Jersey.",
    url: "https://alaaka.org",
    siteName: "Newark Central Masjid",
    images: [
      {
        url: "/images/og-masjid.jpg",
        width: 1200,
        height: 630,
        alt: "Newark Central Masjid exterior view",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newark Central Masjid | Alaaka Association of New Jersey",
    description:
      "Serving the Newark Muslim community through prayer, education, and unity.",
    images: ["/images/og-masjid.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://alaaka.org"),
};

export default function RootLayout({ children }) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Mosque",
      name: "Newark Central Masjid",
      alternateName: "Alaaka Association of New Jersey",
      url: "https://alaakaa.org",
      logo: "https://alaaka.org/images/og-masjid.jpg",
      image: "https://alaaka.org/images/og-masjid.jpg",
      description:
        "Newark Central Masjid, operated by Alaaka Association of New Jersey, serves the local Muslim community through prayer, education, and outreach.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "151 12th Avenue",
        addressLocality: "Newark",
        addressRegion: "NJ",
        postalCode: "07107",
        addressCountry: "US",
      },
      telephone: "+1-973-555-1234",
      sameAs: [
        "https://facebook.com",
        "https://x.com",
        "https://instagram.com",
      ],
      openingHours: "Mo-Su 05:00-22:00",
      parentOrganization: {
        "@type": "Organization",
        name: "Alaaka Association of New Jersey",
        url: "https://alaaka.org",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Newark Central Masjid",
      image: "https://alaaka.org/images/og-masjid.jpg",
      priceRange: "$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "151 12th Avenue",
        addressLocality: "Newark",
        addressRegion: "NJ",
        postalCode: "07107",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.743825746155245,
        longitude: -74.19441343751139,
      },
      url: "https://alaaka.org",
      telephone: "+1-973-555-1234",
      sameAs: [
        "https://facebook.com",
        "https://x.com",
        "https://instagram.com",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "05:00",
          closes: "22:00",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Alaaka Association of New Jersey",
      url: "https://alaakaassociation.org",
      logo: "https://alaaka.org/images/og-masjid.jpg",
      description:
        "Alaaka Association of New Jersey is a nonprofit organization dedicated to supporting the Muslim community through education, outreach, and religious programs. It operates Newark Central Masjid.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-973-555-1234",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
      sameAs: [
        "https://facebook.com",
        "https://x.com",
        "https://instagram.com",
      ],
    },
  ];

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </head>
      <body className="bg-[#F9FAF9] text-gray-800 flex flex-col min-h-screen">
        {/* Header */}
        <HeaderClient />

        {/* Main content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-green-700 text-gray-200 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {/* About */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-lg">About</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Newark Central Masjid, part of Alaaka Association of New Jersey,
                is dedicated to serving the Muslim community through prayer,
                education, and service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="hover:text-green-400 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-green-400 transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-green-400 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-green-400 transition">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-3 text-lg">Connect</h3>
              <div className="flex gap-5 text-xl">
                <Link
                  href="https://facebook.com/groups/1740587122890273/"
                  aria-label="Facebook"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  href="https://x.com"
                  aria-label="X (Twitter)"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  <i className="fab fa-x-twitter"></i>
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
              <p className="text-xs mt-4 text-gray-400">
                © {new Date().getFullYear()} Alaaka Association of New Jersey. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
