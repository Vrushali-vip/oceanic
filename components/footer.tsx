import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Ship,
  Compass,
  Linkedin,
  ChevronRight,
} from "lucide-react"
import WaveCanvas from "@/components/WaveCanvas"

export default function Footer() {
  return (
    <footer className="bg-black-950 text-white relative overflow-hidden">
      {/* Animated wave background */}
      <WaveCanvas />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-5">
        <Ship className="h-40 w-40 text-white" />
      </div>


      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src="/1.png" alt="Oceanic Advisors Logo" className="h-25 w-auto" />
            </div>

            <p className="text-slate-400 mb-6 border-l-2 border-orange-500 pl-4">
              Expert advisors in maritime strategy, risk management, and sustainable solutions for the ocean economy.
              Guiding businesses towards responsible growth.
            </p>
            <div className="flex space-x-4">

              <a
                href="https://www.linkedin.com/company/oceanic-advisors/"
                className="bg-black-800 hover:bg-orange-600 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>

            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center">
              <Ship className="h-5 w-5 mr-2 text-orange-500" />
              <span className="relative">
                Services
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/technical-supervision"
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Technical Supervision
                </Link>
              </li>
              <li>
                <Link
                  href="/maritime-insurance"
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Maritime Insurance
                </Link>
              </li>
              <li>
                <Link href="/maritime-law" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Maritime Law
                </Link>
              </li>
              <li>
                <Link
                  href="/navigation-consulting"
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Navigation Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/safety-management"
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Safety Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center">
              <Compass className="h-5 w-5 mr-2 text-orange-500" />
              <span className="relative">
                Resources
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/circulars&endorsement"
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center"
                >
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Circulars & Endorsements
                </Link>
              </li>
              <li>
                <Link href="/news&updates" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industry-reports" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-orange-500" />
              <span className="relative">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                <span className="text-slate-400">admin@oceanicadvisors.org</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                <span className="text-slate-400">+97 1507502353</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-orange-500 mt-0.5" />
                <div className="text-slate-400">
                  <p>Westbury Tower 1,</p>
                  <p>Businessbay,</p>
                  <p>Dubai, UAE</p>
                </div>
              </li>
            </ul>

            {/* Newsletter signup */}
            {/* <div className="mt-6 bg-black-900 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-black-800 text-white px-3 py-2 rounded-l-lg flex-1 outline-none border border-black-700 focus:border-orange-500"
                />
                <button className="btn-orange-cosmic rounded-l-none rounded-r-lg">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-black-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Oceanic Advisors. All rights reserved.
          </p>
          
        </div>
      </div>

      {/* Quick action buttons for mobile */}
      <div className="md:hidden fixed bottom-4 right-4 flex flex-col space-y-2">
        <a href="tel:+15551234567" className="bg-orange-600 text-white p-3 rounded-full shadow-lg" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/15559876543"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
