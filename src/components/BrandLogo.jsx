import { useState } from 'react';
import verditsLogo from '../assets/images/verdits-logo.png';

export default function BrandLogo({ className = 'h-10', compact = false }) {
  const [missing, setMissing] = useState(false);

  if (missing) {
    return (
      <span className="inline-flex items-center gap-3 font-extrabold tracking-[0.2em] text-verdits-navy">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-verdits-navy text-sm text-verdits-gold">
          V
        </span>
        {!compact && (
          <span className="leading-none">
            VERDITS
            <span className="mt-1 block text-[0.55rem] font-bold tracking-[0.36em] text-verdits-teal">
              JUSTICE
            </span>
          </span>
        )}
      </span>
    );
  }

  return (
    <img
      src={verditsLogo}
      alt="VERDITS"
      className={`${className} w-auto object-contain`}
      onError={() => setMissing(true)}
    />
  );
}
