/** Singleton para abrir o modal de contato de qualquer componente. */
let _open: (() => void) | null = null;

export function registerOpenContactModal(fn: () => void) {
  _open = fn;
}

export function openContactModal() {
  _open?.();
}
