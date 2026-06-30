// Small presentation helpers for Capacitações.

/** "2026-07-23" -> "23/07/2026" (date-only, no timezone shifting). */
export function formatData(date?: string | null): string {
  if (!date) return "";
  const [y, m, d] = date.split("T")[0].split("-");
  if (!y || !m || !d) return date;
  return `${d}/${m}/${y}`;
}

/** Bootstrap background class for a modalidade badge. */
export function modalidadeBadgeClass(modalidade?: string | null): string {
  switch (modalidade) {
    case "Presencial":
      return "bg-danger";
    case "Ao Vivo":
      return "bg-primary";
    case "EAD":
      return "bg-success";
    default:
      return "bg-info";
  }
}
