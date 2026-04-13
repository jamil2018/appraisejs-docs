(() => {
  const ENHANCED_ATTR = "data-docs-lightbox-enhanced";
  const OPT_OUT_VALUE = "off";
  const DIALOG_ID = "appraise-docs-image-lightbox";

  function getState() {
    return (window.__APPRAISE_DOCS_IMAGE_LIGHTBOX__ ??= {
      activeTrigger: null,
      bound: false,
      elements: null,
    });
  }

  function getImageLabel(image) {
    const alt = image.alt.trim();
    return alt ? `View larger image: ${alt}` : "View larger image";
  }

  function getDialogLabel(image) {
    const alt = image.alt.trim();
    return alt ? `Expanded image: ${alt}` : "Expanded documentation image";
  }

  function ensureDialog() {
    const state = getState();
    if (state.elements) {
      return state.elements;
    }

    const dialog = document.createElement("dialog");
    dialog.id = DIALOG_ID;
    dialog.className = "docs-image-lightbox__dialog";
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", "Expanded documentation image");

    const panel = document.createElement("div");
    panel.className = "docs-image-lightbox__panel";

    const toolbar = document.createElement("div");
    toolbar.className = "docs-image-lightbox__toolbar";

    const caption = document.createElement("p");
    caption.className = "docs-image-lightbox__caption";
    caption.hidden = true;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "docs-image-lightbox__close";
    closeButton.textContent = "Close";
    closeButton.setAttribute("aria-label", "Close enlarged image");

    const image = document.createElement("img");
    image.className = "docs-image-lightbox__full";
    image.alt = "";

    toolbar.append(caption, closeButton);
    panel.append(toolbar, image);
    dialog.append(panel);
    document.body.append(dialog);

    closeButton.addEventListener("click", () => {
      if (dialog.open) {
        dialog.close();
      }
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog && dialog.open) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", () => {
      image.removeAttribute("src");
      image.alt = "";
      caption.textContent = "";
      caption.hidden = true;

      const { activeTrigger } = getState();
      getState().activeTrigger = null;
      activeTrigger?.focus();
    });

    state.elements = {
      caption,
      closeButton,
      dialog,
      image,
    };

    return state.elements;
  }

  function openLightbox(image, trigger) {
    const elements = ensureDialog();
    const alt = image.alt.trim();
    const source = image.currentSrc || image.src;

    getState().activeTrigger = trigger;

    elements.image.src = source;
    elements.image.alt = alt;
    elements.dialog.setAttribute("aria-label", getDialogLabel(image));

    if (alt) {
      elements.caption.hidden = false;
      elements.caption.textContent = alt;
    } else {
      elements.caption.hidden = true;
      elements.caption.textContent = "";
    }

    if (!elements.dialog.open) {
      elements.dialog.showModal();
    }
  }

  function enhanceImage(image) {
    if (image.getAttribute(ENHANCED_ATTR) === "true") {
      return;
    }

    if (image.dataset.lightbox === OPT_OUT_VALUE) {
      return;
    }

    image.setAttribute(ENHANCED_ATTR, "true");
    image.classList.add("docs-image-lightbox__preview");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", getImageLabel(image));

    image.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(image, image);
    });

    image.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      openLightbox(image, image);
    });

  }

  function enhanceDocsImages() {
    const markdownRoot = document.querySelector(".sl-markdown-content");
    if (!markdownRoot || document.querySelector(".landing-root")) {
      return;
    }

    markdownRoot.querySelectorAll("img").forEach((image) => {
      enhanceImage(image);
    });
  }

  function queueEnhancement() {
    window.requestAnimationFrame(() => {
      enhanceDocsImages();
    });
  }

  function bind() {
    const state = getState();
    if (state.bound) {
      queueEnhancement();
      return;
    }

    state.bound = true;

    document.addEventListener("DOMContentLoaded", queueEnhancement);
    document.addEventListener("astro:page-load", queueEnhancement);
    document.addEventListener("astro:after-swap", queueEnhancement);

    queueEnhancement();
  }

  bind();
})();
