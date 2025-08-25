import { FAQList } from "@/features/faq/components/FAQ"
import { Pricing } from "@/features/pricing/components/Pricing"
import { HiMiniQuestionMarkCircle } from "react-icons/hi2"
import "./PricingPage.style.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TurnBnB Pricing",
  description:
    "Discover TurnBnB pricing plans designed for property owners, cleaning coordinators, and teams. Choose the right plan to simplify your short-term rental cleaning operations.",
  openGraph: {
    title: "TurnBnB Pricing",
    description:
      "Explore flexible TurnBnB pricing plans tailored to cleaning businesses, coordinators, and property owners. Streamline your operations with the right plan.",
    url: "https://turnbnb.com/pricing",
    siteName: "TurnBnB",
    images: [
      {
        url: "https://turnbnb.com/og-image.jpg", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "TurnBnB Pricing Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TurnBnB Pricing",
    description:
      "Simplify your cleaning operations with TurnBnB’s flexible pricing plans built for cleaning businesses and property owners.",
    images: ["https://turnbnb.com/og-image.jpg"], // replace with actual image
  },
}

export default function PricingPage() {
  return (
    <div className="section-stacks">
      <div className="section">
        <div className="section-content">
          <Pricing />
        </div>
      </div>

      <div className="section section-column">
        <div className="section-header">
          <div className="section-badge">
            <HiMiniQuestionMarkCircle className="icon" />
            <span>FAQ&apos;s</span>
          </div>
          <h2 className="section-title">
            Everything You Need to Know About TurnBnB
          </h2>
        </div>
        
        <div className="section-content">
          <FAQList />
        </div>
      </div>
    </div>
  )
}