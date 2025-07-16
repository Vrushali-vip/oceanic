import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Services from "@/components/services"
import Team from "@/components/team"
import Footer from "@/components/footer"
import ContactCTA from "@/components/contact-cta"
import WhyUs from "@/components/whyus"

export const metadata = {
  title: "Home | Oceanic Advisors",
  description: "Welcome to Oceanic Advisors. Your partner in maritime logistics and compliance.",
  keywords: ["maritime", "logistics", "shipping", "compliance", "home"],
  openGraph: {
    title: "Home | Oceanic Advisors",
    description: "Welcome to Oceanic Advisors. Your partner in maritime logistics and compliance.",
    url: "https://oceanicadvisors.org",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Oceanic Advisors",
    description: "Welcome to Oceanic Advisors. Your partner in maritime logistics and compliance.",
    images: ["/meta.png"],
  },
}
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
