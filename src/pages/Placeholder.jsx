import { Link } from 'react-router-dom';

export default function Placeholder({ type }) {
  return (
    <section className="bg-dark-radial pt-36 sm:pt-40">
      <div className="section-shell flex min-h-[520px] items-center justify-center pb-20">
        <div className="premium-card max-w-xl p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-verdits-teal">
            {type} placeholder
          </p>
          <h1 className="mt-4 text-4xl font-bold">Application routing goes here.</h1>
          <p className="mt-4 leading-8 text-verdits-text">
            This marketing website is separate from the MERN application. The {type.toLowerCase()}{' '}
            route is ready to be redirected to the existing app when its URL is finalized.
          </p>
          <Link to="/" className="button-gradient mt-7 inline-flex rounded-full px-6 py-3 font-semibold">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
