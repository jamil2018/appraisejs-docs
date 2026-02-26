import type { Root } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import nomnoml from "nomnoml";

function remarkNomnoml(): Plugin<[], Root> {
  return (tree) => {
    visit(tree, "code", (node, index, parent) => {
      if (!parent || index === undefined || node.lang !== "nomnoml") return;

      const text = node.value?.trim();
      if (!text) return;

      try {
        const svg = nomnoml.renderSvg(text);
        const html = `<div class="nomnoml-diagram">${svg}</div>`;
        parent.children[index] = { type: "html", value: html };
      } catch {
        // Leave as code block on render error
      }
    });
  };
}

export default remarkNomnoml;
