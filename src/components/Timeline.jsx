import { motion } from 'framer-motion';
import { CheckCircle2, CircleUserRound, Handshake, UserPlus } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { fadeIn, viewport } from '../utils/motion.js';

const steps = [
  ['Create Account', UserPlus],
  ['Choose Role', CircleUserRound],
  ['Connect with Professionals', Handshake],
  ['Solve Legal Matters', CheckCircle2],
];

export default function Timeline({ title = 'How It Works', description }) {
  return (
    <section className="bg-verdits-section py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow={title}
          title="From first question to legal clarity in four focused steps."
          description={
            description ||
            'VERDITS keeps onboarding simple, role-based, and action-oriented so every user can move forward with confidence.'
          }
        />
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-verdits-navy via-sky-200 to-verdits-teal lg:left-0 lg:top-1/2 lg:h-px lg:w-full" />
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map(([label, Icon], index) => (
              <motion.div
                key={label}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative pl-16 lg:pl-0 lg:pt-14"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-sky-100 bg-white text-verdits-teal shadow-teal lg:left-0 lg:top-0">
                  <Icon size={21} />
                </div>
                <div className="premium-card p-6">
                  <p className="text-sm font-semibold text-verdits-teal">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold">{label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
