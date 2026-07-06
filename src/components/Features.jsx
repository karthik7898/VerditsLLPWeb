import { motion } from 'framer-motion';
import { CalendarClock, LockKeyhole, MapPin, MousePointer2, ShieldCheck, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { fadeIn, staggerContainer, viewport } from '../utils/motion.js';

const features = [
  ['Verified Professionals', ShieldCheck],
  ['Smart Legal Matching', Sparkles],
  ['Secure Communication', LockKeyhole],
  ['Location-Based Discovery', MapPin],
  ['Modern User Experience', MousePointer2],
  ['Fast Consultation Booking', CalendarClock],
];

export default function Features() {
  return (
    <section className="bg-verdits-bg py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Why choose VERDITS"
          title="The clarity of premium software, designed for legal trust."
          description="Every feature is shaped to reduce friction while preserving confidence, privacy, and professional credibility."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(([title, Icon]) => (
            <motion.article key={title} variants={fadeIn} whileHover={{ y: -6 }} className="premium-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-verdits-mint text-verdits-teal shadow-teal">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-verdits-text">
                Designed to make legal workflows easier to understand, faster to start, and safer
                to complete.
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
