import { ArrowRight, Chrome, Lock, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <section className="bg-dark-radial px-4 py-24 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-verdits-line bg-white/90 shadow-[0_30px_90px_rgba(5,5,5,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-gradient-to-br from-verdits-navy via-[#16233f] to-verdits-teal p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-verdits-gold">Welcome back</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">Sign in to your Verdits account</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
              Access legal guidance, consult trusted professionals, and stay connected with your legal journey.
            </p>
            <div className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-verdits-gold">Why users love it</p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>• Verified lawyers and secure conversations</li>
                <li>• Fast scheduling for consultations</li>
                <li>• AI-enhanced legal support on demand</li>
              </ul>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <div className="rounded-[1.5rem] border border-verdits-line bg-verdits-section p-6 sm:p-7">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-verdits-navy">
                  Email
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-verdits-line bg-white px-4 py-3">
                    <Mail size={18} className="text-verdits-teal" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>

                <label className="block text-sm font-semibold text-verdits-navy">
                  Password
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-verdits-line bg-white px-4 py-3">
                    <Lock size={18} className="text-verdits-teal" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-verdits-text">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-verdits-line" />
                  Remember me
                </label>
                <a href="#" className="font-semibold text-verdits-teal">
                  Forgot Password?
                </a>
              </div>

              <button className="button-gradient mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
                Login
                <ArrowRight size={16} />
              </button>

              <div className="mt-6 flex items-center gap-3 text-sm text-verdits-text">
                <div className="h-px flex-1 bg-verdits-line" />
                <span>OR</span>
                <div className="h-px flex-1 bg-verdits-line" />
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-verdits-line bg-white px-5 py-3 text-sm font-semibold text-verdits-navy transition hover:border-verdits-teal">
                <Chrome size={17} className="text-verdits-teal" />
                Continue with Google
              </button>

              <p className="mt-6 text-center text-sm text-verdits-text">
                Don’t have an account?{' '}
                <Link to="/register" className="font-semibold text-verdits-teal">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
