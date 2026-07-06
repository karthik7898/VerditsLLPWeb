import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import BrandLogo from './BrandLogo.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${
      isActive ? 'bg-verdits-mint text-verdits-teal' : 'text-verdits-text hover:bg-white hover:text-verdits-navy'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav className="section-shell">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'border-sky-100 bg-white/90 px-4 py-3 shadow-xl shadow-sky-900/10 backdrop-blur-xl'
              : 'border-sky-100/70 bg-white/75 px-4 py-4 shadow-lg shadow-sky-900/5 backdrop-blur-md'
          }`}
        >
          <Link to="/" className="flex items-center gap-3" aria-label="VERDITS home">
            <BrandLogo className="h-9 sm:h-10" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-verdits-navy transition hover:border-verdits-teal/40 hover:bg-verdits-mint"
            >
              Login
            </Link>
            <Link to="/register" className="button-gradient rounded-full px-5 py-2.5 text-sm font-semibold">
              Register
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-verdits-navy lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 rounded-2xl border border-sky-100 bg-white/95 p-3 shadow-2xl shadow-sky-900/10 backdrop-blur-xl lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-verdits-text hover:bg-verdits-mint hover:text-verdits-navy"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-sky-200 px-4 py-3 text-center text-sm font-semibold text-verdits-navy"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="button-gradient rounded-xl px-4 py-3 text-center text-sm font-semibold"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
