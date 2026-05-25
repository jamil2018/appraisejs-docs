import { codeToHtml } from "shiki";

/** Highlight source and return the inner HTML of Shiki's `<code>` element. */
export async function highlightCodeInner(
  source: string,
  lang: string,
): Promise<string> {
  const html = await codeToHtml(source, {
    lang,
    theme: "github-dark",
  });

  const match = html.match(/<code[^>]*>([\s\S]*)<\/code>/i);
  const inner = match?.[1] ?? source;

  // Shiki separates block `.line` spans with `\n`; inside `<pre>` that doubles line height.
  return inner.replace(/\n+(?=<span class="line")/g, "");
}
