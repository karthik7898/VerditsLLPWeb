import { GraduationCap, Scale, UserRound } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const serviceGroups = [
  {
    title: 'For Users',
    icon: UserRound,
    items: ['Find Lawyers', 'Book Consultation', 'Private Communication', 'Legal Guidance'],
  },
  {
    title: 'For Lawyers',
    icon: Scale,
    items: ['Professional Profile', 'Client Management', 'Case Tracking', 'Professional Growth'],
  },
  {
    title: 'For Students',
    icon: GraduationCap,
    items: ['Networking', 'Learning', 'Research', 'Career Development'],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-dark-radial pt-36 sm:pt-40">
        <div className="section-shell pb-20 pt-10 sm:pb-24">
          <SectionTitle
            align="left"
            eyebrow="Services"
            title="Legal access, professional growth, and student learning in one ecosystem."
            description="VERDITS is not just a directory. It is a role-aware platform designed for the way legal needs begin, evolve, and get resolved."
          />
        </div>
      </section>
      <section className="bg-verdits-section py-20 sm:py-24">
        <div className="section-shell grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group) => (
            <ServiceCard key={group.title} {...group} />
          ))}
        </div>
      </section>
    </>
  );
}
