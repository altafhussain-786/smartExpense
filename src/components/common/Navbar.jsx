import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/data";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  {navLinks.map((item, index) =>(
    <div key={index}>{item.name}</div>
  ))}
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl"></span>
          <h1 className="text-xl font-bold text-orange-600">
            SmartExpense
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-orange-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-orange-600 transition">
            Login
          </button>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <hr />

          <button className="block w-full text-left hover:text-orange-600">
            Login
          </button>
          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}