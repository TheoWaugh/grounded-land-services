const MAX_TITLE = 60;
const MAX_DESCRIPTION = 160;

/** Keeps a meta description within 160 characters, cutting at a sentence end when possible. */
export function metaDescription(text: string): string {
  if (text.length <= MAX_DESCRIPTION) return text;
  const head = text.slice(0, MAX_DESCRIPTION);
  const sentenceEnd = head.lastIndexOf(". ");
  if (sentenceEnd >= 100) return head.slice(0, sentenceEnd + 1);
  return `${head.slice(0, head.lastIndexOf(" ", MAX_DESCRIPTION - 1))}…`;
}

/** Appends the brand to a page title, shortening it to "Grounded" if the full brand would push past 60 characters. */
export function brandedTitle(base: string): { absolute: string } {
  const full = `${base} | Grounded Land Services`;
  if (full.length <= MAX_TITLE) return { absolute: full };
  const short = `${base} | Grounded`;
  return { absolute: short.length <= MAX_TITLE ? short : base };
}
