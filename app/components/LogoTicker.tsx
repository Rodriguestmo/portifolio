const logos = [
  "Meta Ads",
  "Google Ads",
  "WhatsApp",
  "Notion",
  "Claude AI",
  "Python",
  "Vercel",
  "Figma",
];

export default function LogoTicker() {
  return (
    <section className="section-border px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-sm text-gray-400">
          Parceiros de <span className="font-bold text-black">confiança</span>
        </p>
      </div>

      <div className="mt-6 overflow-hidden">
        <div className="ticker-track flex w-max gap-8">
          {/* Double the logos for infinite scroll */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex h-10 items-center rounded-lg border border-black/6 bg-white px-6 text-sm font-medium text-gray-500"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
