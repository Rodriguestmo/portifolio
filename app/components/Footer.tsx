const menuLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#solucoes" },
];

export default function Footer() {
  return (
    <footer id="contato" className="bg-black px-6 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1160px]">
        {/* Big heading */}
        <h2 className="text-5xl leading-[1.05] tracking-tight md:text-7xl">
          <span className="font-bold text-white">Vamos</span>
          <br />
          <span className="text-gray-600">criar</span>
          <br />
          <span className="text-gray-600">resultados incríveis juntos.</span>
        </h2>

        {/* Contact info — 4 columns */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <div>
            <p className="text-sm text-gray-500">E-mail</p>
            <a
              href="mailto:rtmopublicidade@gmail.com"
              className="mt-1 text-white transition-opacity hover:opacity-70"
            >
              rtmopublicidade@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500">WhatsApp</p>
            <a
              href="https://wa.me/5535984128420"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-white transition-opacity hover:opacity-70"
            >
              Fale agora
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500">Agendar reunião</p>
            <a
              href="https://calendar.app.google/v7s5H975BGwnriuZA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-white transition-opacity hover:opacity-70"
            >
              Marcar horário
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500">Social</p>
            <div className="mt-1 flex gap-4">
              <a
                href="https://www.linkedin.com/in/thales-oliveira-rodrigues/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white transition-opacity hover:opacity-70"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold">
                  LI
                </div>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            {/* Menu */}
            <div>
              <p className="text-sm text-gray-500">Menu</p>
              <div className="mt-2 flex gap-4">
                {menuLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p className="text-sm text-gray-500">Legal</p>
              <div className="mt-2 flex gap-4">
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Termos de serviço
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Política de privacidade
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">&copy; 2026 Thales Miguel — Marketing Digital & Tecnologia</p>
          </div>
        </div>

        {/* Giant name */}
        <div className="mt-16 overflow-hidden">
          <p
            className="text-center font-black leading-none tracking-tighter text-gray-900 select-none"
            style={{ fontSize: "clamp(100px, 15vw, 220px)" }}
          >
            THALES
          </p>
        </div>
      </div>
    </footer>
  );
}
