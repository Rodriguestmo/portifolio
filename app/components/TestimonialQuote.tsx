export default function TestimonialQuote() {
  return (
    <section className="section-border bg-[#f7f7f7] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
          &ldquo;Trabalhar com o Thales foi como ter um parceiro de tecnologia
          que{" "}
          <span className="font-bold">realmente entendeu nossa visão</span> e
          trouxe resultados que não tínhamos imaginado.&rdquo;
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-600">
            CS
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-black">
              Cliente Satisfeito
            </p>
            <p className="text-sm text-gray-500">Profissional de Saúde</p>
          </div>
        </div>
      </div>
    </section>
  );
}
