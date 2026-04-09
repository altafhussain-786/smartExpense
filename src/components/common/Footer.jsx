import {
  Wallet,
  Globe,
  Megaphone,
  Mail,
  MapPin,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="text-orange-600" size={28} />
              <h2 className="text-xl font-bold text-gray-900">
                SmartExpense
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Making personal finance management smarter, faster,
              and more intuitive with the power of artificial intelligence.
            </p>

            <div className="flex gap-4 mt-6">
              <Globe className="hover:text-orange-500 cursor-pointer transition" />
              <Megaphone className="hover:text-orange-500 cursor-pointer transition" />
              <Mail className="hover:text-orange-500 cursor-pointer transition" />
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">Features</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Security</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Pricing</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Releases</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Careers</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Blog</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-500 cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Terms of Service</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Cookie Policy</li>
            </ul>
          </div>

        </div>
        <div className="border-t border-gray-200 pt-6 
                        flex flex-col md:flex-row 
                        justify-between items-center 
                        text-sm text-gray-500">
          <p className="text-center md:text-left">
            © 2024 SmartExpense AI. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 md:mt-0">

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>

            <div className="flex items-center gap-2">
              <Globe size={16} />
              <span>English (US)</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}