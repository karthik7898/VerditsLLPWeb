const fields = [
  ['Name', 'text'],
  ['Email', 'email'],
  ['Phone', 'tel'],
  ['Subject', 'text'],
];

export default function ContactForm() {
  return (
    <form className="premium-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map(([label, type]) => (
          <label key={label} className={label === 'Subject' ? 'sm:col-span-2' : ''}>
            <span className="text-sm font-semibold text-slate-200">{label}</span>
            <input
              type={type}
              className="mt-2 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-verdits-navy outline-none transition placeholder:text-slate-400 focus:border-verdits-teal/70 focus:ring-4 focus:ring-verdits-teal/10"
              placeholder={label}
            />
          </label>
        ))}
        <label className="sm:col-span-2">
          <span className="text-sm font-semibold text-slate-200">Message</span>
          <textarea
            rows="5"
            className="mt-2 w-full resize-none rounded-2xl border border-sky-100 bg-white px-4 py-3 text-verdits-navy outline-none transition placeholder:text-slate-400 focus:border-verdits-teal/70 focus:ring-4 focus:ring-verdits-teal/10"
            placeholder="Tell us how VERDITS can help"
          />
        </label>
      </div>
      <button type="button" className="button-gradient mt-6 w-full rounded-full px-6 py-4 font-semibold">
        Submit Message
      </button>
    </form>
  );
}
