import { heroContent, nodesContent } from "./data.js";
import { ICONS } from "./icons.js";

/* ------------------------------------------------------------------
   State
   ------------------------------------------------------------------ */
const state = {
  selectedId: null,
  selectedItemId: null,
  lightbox: { images: [], index: null },
};

const findNode = (id) => nodesContent.find((n) => n.id === id) ?? null;
const findMeta = (meta, label) => meta?.find((m) => m.label === label)?.value;
const escapeHtml = (str = "") =>
  str.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ------------------------------------------------------------------
   Top bar
   ------------------------------------------------------------------ */
const topbarEl = document.getElementById("topbar");

function renderTopBar() {
  const navBtns = nodesContent
    .map((n) => {
      const active = state.selectedId === n.id;
      const bg = active ? `${n.color}1A` : "transparent";
      const color = active ? n.color : "#6B7178";
      return `<button class="topbar-nav-btn" data-action="select" data-id="${n.id}" style="background-color:${bg};color:${color}">
        <span class="icon">${ICONS[n.icon] ?? ICONS.User}</span>
        <span>${escapeHtml(n.label)}</span>
      </button>`;
    })
    .join("");

  topbarEl.innerHTML = `
    <div class="topbar-inner">
      <button class="topbar-brand" data-action="home"> </button>
      <nav class="topbar-nav">${navBtns}</nav>
    </div>
  `;
}

topbarEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  if (btn.dataset.action === "home") clearSelection();
  if (btn.dataset.action === "select") selectNode(btn.dataset.id);
});

/* ------------------------------------------------------------------
   Info panel
   ------------------------------------------------------------------ */
const infoPanelEl = document.getElementById("info-panel");

function renderInfoPanel() {
  const selected = findNode(state.selectedId);

if (!selected) {
    const heroPhoto = findNode("about")?.image;
    infoPanelEl.innerHTML = `
      <div class="info-panel-inner${heroPhoto ? " hero-photo-inner" : ""}">
        ${
          heroPhoto
            ? `<div class="hero-photo-bg"><img src="${heroPhoto}" alt="${escapeHtml(heroContent.name)}" /></div>`
            : ""
        }
        <div class="hero">
          <h1 class="hero-title">Hello World!</h1>
          <h1 class="hero-title">${escapeHtml(heroContent.greeting)}</h1>
          <p class="hero-tagline">${escapeHtml(heroContent.tagline)}</p>
          <p class="hero-hint">คลิก icon ทางขวาเพื่อดูข้อมูลแต่ละหมวด →</p>
        </div>
      </div>
    `;
    return;
  }

  const hasItems = !!selected.items && selected.items.length > 0;
  const isProjects = selected.id === "projects";
  const isActivities = selected.id === "activities";
  const isCertifications = selected.id === "certifications";
  const isAbout = selected.id === "about";
  const isContact = selected.id === "contact";
  const isListItems = isProjects;
  const isGridItems = isCertifications || isActivities;

  const activeItem =
    hasItems && !isGridItems
      ? selected.items.find((i) => i.id === state.selectedItemId) ?? null
      : null;

  const heading = activeItem ? activeItem.title : selected.full.heading;
  const body = activeItem ? activeItem.body : selected.full.body ?? [];
  const tags = activeItem ? activeItem.tags : selected.full.tags;
  const meta = activeItem ? undefined : selected.full.meta;
  const sections = activeItem ? undefined : selected.full.sections;
  const skillsSplit = isAbout ? selected.full.skills : undefined;
  const contactLinks = isContact ? selected.full.contactLinks : undefined;

  const gallery = activeItem ? activeItem.images ?? [] : selected.image ? [selected.image] : [];
  const certGallery = isGridItems
    ? (selected.items ?? []).map((i) => i.images?.[0]).filter(Boolean)
    : [];
  const lightboxGallery = isGridItems ? certGallery : gallery;

  const aboutName = findMeta(meta, "ชื่อ");
  const aboutInstitution = findMeta(meta, "สถาบัน");
  const aboutFaculty = findMeta(meta, "คณะ");
  const aboutMajor = findMeta(meta, "สาขา");
  const aboutGpa = findMeta(meta, "เกรดเฉลี่ย");

  let html = "";

  // ---------- bento gallery: Projects / Activities detail view ----------
  if (isListItems && gallery.length > 1) {
    const tiles = [gallery[1], gallery[2]]
      .map((src, i) =>
        src
          ? `<button class="bento-tile" data-action="lightbox" data-index="${i + 1}">
              <img src="${src}" alt="${escapeHtml(heading ?? "")} ${i + 2}" />
              <span class="img-hover-veil"><span class="icon">${ICONS.Expand}</span></span>
            </button>`
          : `<div></div>`
      )
      .join("");
    html += `
      <div class="bento-gallery">
        <button class="bento-tile main" data-action="lightbox" data-index="0">
          <img src="${gallery[0]}" alt="${escapeHtml(heading ?? "")}" />
          <span class="img-hover-veil"><span class="icon">${ICONS.Expand}</span></span>
        </button>
        ${tiles}
      </div>
    `;
  }

  // ---------- single image: any generic category with exactly one image ----------
  if (!isAbout && !isListItems && !isGridItems && gallery.length === 1) {
    html += `
      <button class="single-image" data-action="lightbox" data-index="0">
        <img src="${gallery[0]}" alt="${escapeHtml(heading ?? "")}" />
        <span class="img-hover-veil"><span class="icon">${ICONS.Expand}</span></span>
      </button>
    `;
  }

  html += `<div class="content-body">`;

  // back / clear button
  html += `<button class="back-btn" data-action="${isListItems && activeItem ? "back" : "clear"}">
    <span class="icon">${ICONS.ArrowLeft}</span> ย้อนกลับ
  </button>`;

  if (activeItem) {
    html += `<span class="item-kicker">${escapeHtml(selected.label)}</span>`;
  }

  html += `<h2 class="content-heading">${escapeHtml(heading ?? "")}</h2>`;

  if (tags && tags.length > 0) {
    html += `<div class="tag-row">${tags
      .map(
        (t) =>
          `<span class="tag-chip" style="background-color:${selected.color}1A;color:${selected.color}">${escapeHtml(t)}</span>`
      )
      .join("")}</div>`;
  }

  if (activeItem?.link || activeItem?.pdf) {
    html += `<div class="link-row">`;
    if (activeItem.link) {
      html += `<a class="ext-link" href="${activeItem.link.url}" target="_blank" rel="noopener noreferrer" style="color:${selected.color}">
        ${escapeHtml(activeItem.link.label)} <span class="icon">${ICONS.ExternalLink}</span>
      </a>`;
    }
    if (activeItem.pdf) {
      html += `<a class="pdf-link" href="${activeItem.pdf.url}" target="_blank" rel="noopener noreferrer" style="background-color:${selected.color}1A;color:${selected.color}">
        <span class="icon">${ICONS.FileText}</span> ${escapeHtml(activeItem.pdf.label)}
      </a>`;
    }
    html += `</div>`;
  }

  // ---------- About Me: photo + name + education meta ----------
  if (isAbout) {
    html += `<div class="about-head">`;
    if (selected.image) {
      html += `<button class="about-photo" data-action="lightbox" data-index="0">
        <img src="${selected.image}" alt="${escapeHtml(heroContent.name)}" />
        <span class="img-hover-veil"><span class="icon">${ICONS.Expand}</span></span>
      </button>`;
    }
    html += `<div style="min-width:0">
      <h3 class="about-name">${escapeHtml(heroContent.name)}</h3>
      <div class="about-meta">
        ${aboutName ? `<p>นาย ${escapeHtml(aboutName)}</p>` : ""}
        ${aboutInstitution ? `<p>${escapeHtml(aboutInstitution)}</p>` : ""}
        ${aboutFaculty ? `<p>คณะ${escapeHtml(aboutFaculty)}</p>` : ""}
        ${aboutMajor ? `<p>สาขา${escapeHtml(aboutMajor)}</p>` : ""}
        ${aboutGpa ? `<p>GPA ${escapeHtml(aboutGpa)}</p>` : ""}
      </div>
    </div>`;
    html += `</div>`;
  }

  // ---------- intro paragraphs ----------
  if (body && body.length > 0) {
    html += body.map((p) => `<p class="body-text">${escapeHtml(p)}</p>`).join("");
  }

  // ---------- sections (chip list เรียบ ๆ เช่น ความรู้เพิ่มเติม) ----------
  if (sections && sections.length > 0) {
    html += sections
      .map(
        (s) => `
      <div class="section-block">
        <h3 class="section-heading" style="color:${selected.color}">${escapeHtml(s.heading)}</h3>
        <div class="section-list">
          ${s.items.map((item) => `<p>${escapeHtml(item)}</p>`).join("")}
        </div>
      </div>`
      )
      .join("");
  }

  // ---------- About Me: Technical Skills + Soft Skills คั่นด้วยเส้นกลาง ----------
  if (isAbout && skillsSplit) {
    html += `
      <div class="skills-split">
        <div class="skills-grid">
          <div class="skills-col-technical">
            <h3 class="section-heading" style="color:${selected.color}">Technical Skills</h3>
            ${skillsSplit.technical
              .map(
                (cat) => `
              <div class="skills-subgroup">
                <p class="skills-subgroup-title">${escapeHtml(cat.heading)}</p>
                <div class="chip-row">
                  ${cat.items
                    .map(
                      (item) =>
                        `<span class="skill-chip" style="background-color:${selected.color}1A;color:${selected.color}">${escapeHtml(item)}</span>`
                    )
                    .join("")}
                </div>
              </div>`
              )
              .join("")}
          </div>
          <div class="skills-col-soft">
            <h3 class="section-heading" style="color:${selected.color}">Soft Skills</h3>
            <div class="chip-row">
              ${skillsSplit.soft
                .map(
                  (item) =>
                    `<span class="skill-chip" style="background-color:${selected.color}1A;color:${selected.color}">${escapeHtml(item)}</span>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ---------- Contact: ลิสต์ช่องทางติดต่อ ----------
  if (isContact && contactLinks && contactLinks.length > 0) {
    html += `<div class="contact-list">`;
    html += contactLinks
      .map((c) => {
        const iconSvg = ICONS[c.icon] ?? ICONS.Mail;
        const inner = `
          <span class="contact-icon-badge" style="background-color:${selected.color}1A;color:${selected.color}">${iconSvg}</span>
          <span class="contact-text">
            <span class="contact-label">${escapeHtml(c.label)}</span>
            <span class="contact-value">${escapeHtml(c.value)}</span>
          </span>
        `;
        return c.href
          ? `<a class="contact-row" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${inner}</a>`
          : `<div class="contact-row">${inner}</div>`;
      })
      .join("");
    html += `</div>`;
  }

  // ---------- Projects: list before drilling into an item ----------
  if (isListItems && !activeItem) {
    html += `<div class="item-list">`;
    html += selected.items
      .map(
        (item) => `
      <button class="item-list-entry" data-action="select-item" data-id="${item.id}">
        ${
          item.images?.[0]
            ? `<div class="item-list-thumb"><img src="${item.images[0]}" alt="${escapeHtml(item.title)}" /></div>`
            : ""
        }
        <h3 class="item-list-title">${escapeHtml(item.title)}</h3>
        ${item.summary ? `<p class="item-list-summary">${escapeHtml(item.summary)}</p>` : ""}
      </button>`
      )
      .join("");
    html += `</div>`;
  }

  // ---------- Certifications / Activities: show all items at once ----------
  if (isGridItems) {
    html += `<div class="cert-list">`;
    html += selected.items
      .map((item, i) => {
        const summaryHtml = item.summary
          ? `<p class="item-list-summary" style="margin-top:10px">${escapeHtml(item.summary)}</p>`
          : "";
        return `
        <div>
          ${
            item.images?.[0]
              ? `<button class="cert-image" data-action="lightbox" data-index="${i}">
                  <img src="${item.images[0]}" alt="${escapeHtml(item.title)}" />
                  <span class="img-hover-veil"><span class="icon">${ICONS.Expand}</span></span>
                </button>`
              : ""
          }
          <h3 class="cert-title">${escapeHtml(item.title)}</h3>
          ${summaryHtml}
        </div>`;
      })
      .join("");
    html += `</div>`;
  }

  html += `</div>`; // .content-body

  infoPanelEl.innerHTML = `
    <div class="info-panel-inner">
      <div class="content-wrap">
        <div class="content-card">
          <div class="content-scroll">${html}</div>
        </div>
      </div>
    </div>
  `;

  // เก็บ gallery ปัจจุบันไว้ใช้ตอนเปิด lightbox
  infoPanelEl.dataset.gallery = JSON.stringify(lightboxGallery);
}

infoPanelEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === "clear") clearSelection();
  if (action === "back") backToList();
  if (action === "select-item") selectItem(btn.dataset.id);
  if (action === "lightbox") {
    const gallery = JSON.parse(infoPanelEl.dataset.gallery || "[]");
    openLightbox(gallery, Number(btn.dataset.index));
  }
});

/* ------------------------------------------------------------------
   Diagram panel (network diagram, desktop only — เดสก์ท็อป md ขึ้นไป)
   ------------------------------------------------------------------ */
const CANVAS_W = 780;
const CANVAS_H = 480;
const EXTENT = { minX: 40, maxX: CANVAS_W - 40, minY: 40, maxY: CANVAS_H - 40 };

const BASE_POSITIONS = {
  about: { x: 390, y: 240 },
  projects: { x: 390, y: 55 },
  certifications: { x: 700, y: 240 },
  activities: { x: 390, y: 425 },
  contact: { x: 80, y: 240 },
};

const EDGES = [
  ["about", "projects"],
  ["about", "certifications"],
  ["about", "activities"],
  ["about", "contact"],
  ["projects", "certifications"],
  ["certifications", "activities"],
  ["activities", "contact"],
  ["contact", "projects"],
];

const nodePositions = JSON.parse(JSON.stringify(BASE_POSITIONS));
const nodesContainerEl = document.getElementById("nodes-container");
const edgesSvgEl = document.getElementById("edges-svg");
edgesSvgEl.setAttribute("viewBox", `0 0 ${CANVAS_W} ${CANVAS_H}`);

function buildDiagram() {
  edgesSvgEl.innerHTML = EDGES.map(([a, b]) => {
    const pa = nodePositions[a];
    const pb = nodePositions[b];
    return `<line data-edge="${a}|${b}" x1="${pa.x}" y1="${pa.y}" x2="${pb.x}" y2="${pb.y}" />`;
  }).join("");

  nodesContainerEl.innerHTML = nodesContent
    .map((n) => {
      const p = nodePositions[n.id];
      return `
      <div class="diagram-node" data-node="${n.id}" style="left:${(p.x / CANVAS_W) * 100}%;top:${(p.y / CANVAS_H) * 100}%">
        <div class="diagram-node-icon" data-drag-handle="${n.id}">
          <span class="icon">${ICONS[n.icon] ?? ICONS.User}</span>
        </div>
        <span class="diagram-node-label">${escapeHtml(n.label)}</span>
      </div>`;
    })
    .join("");

  applyNodeStyles();
  attachDragHandlers();
}

function applyNodeStyles() {
  nodesContent.forEach((n) => {
    const wrap = nodesContainerEl.querySelector(`[data-node="${n.id}"]`);
    if (!wrap) return;
    const iconBox = wrap.querySelector(".diagram-node-icon");
    const label = wrap.querySelector(".diagram-node-label");
    const isSelected = state.selectedId === n.id;
    iconBox.style.boxShadow = isSelected
      ? `0 0 0 2px ${n.color}, 0 8px 20px rgba(34,38,43,0.12)`
      : "0 2px 12px rgba(34,38,43,0.08)";
    iconBox.querySelector(".icon").style.color = isSelected ? n.color : "#4B5058";
    label.style.color = isSelected ? n.color : "#6B7178";
  });
}

function updateEdgesFor(nodeId) {
  const p = nodePositions[nodeId];
  edgesSvgEl.querySelectorAll(`line[data-edge]`).forEach((line) => {
    const [a, b] = line.dataset.edge.split("|");
    if (a === nodeId) line.setAttribute("x1", p.x), line.setAttribute("y1", p.y);
    if (b === nodeId) line.setAttribute("x2", p.x), line.setAttribute("y2", p.y);
  });
}

function attachDragHandlers() {
  nodesContent.forEach((n) => {
    const wrap = nodesContainerEl.querySelector(`[data-node="${n.id}"]`);
    const handle = wrap.querySelector(".diagram-node-icon");
    let dragging = false;
    let moved = false;
    let startClientX = 0;
    let startClientY = 0;
    let startPos = { x: 0, y: 0 };

    handle.addEventListener("pointerdown", (e) => {
      dragging = true;
      moved = false;
      startClientX = e.clientX;
      startClientY = e.clientY;
      startPos = { ...nodePositions[n.id] };
      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const rect = nodesContainerEl.getBoundingClientRect();
      const dxCanvas = ((e.clientX - startClientX) / rect.width) * CANVAS_W;
      const dyCanvas = ((e.clientY - startClientY) / rect.height) * CANVAS_H;
      if (Math.abs(dxCanvas) > 2 || Math.abs(dyCanvas) > 2) moved = true;
      const nx = Math.min(EXTENT.maxX, Math.max(EXTENT.minX, startPos.x + dxCanvas));
      const ny = Math.min(EXTENT.maxY, Math.max(EXTENT.minY, startPos.y + dyCanvas));
      nodePositions[n.id] = { x: nx, y: ny };
      wrap.style.left = `${(nx / CANVAS_W) * 100}%`;
      wrap.style.top = `${(ny / CANVAS_H) * 100}%`;
      updateEdgesFor(n.id);
    });

    const endDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      try {
        handle.releasePointerCapture(e.pointerId);
      } catch (_) {}
      if (!moved) selectNode(n.id); // ถือว่าเป็นการคลิก ไม่ใช่การลาก
    };

    handle.addEventListener("pointerup", endDrag);
    handle.addEventListener("pointercancel", endDrag);
  });
}

/* ------------------------------------------------------------------
   Lightbox
   ------------------------------------------------------------------ */
const lightboxEl = document.getElementById("lightbox");
const lightboxImgWrapEl = document.getElementById("lightbox-img-wrap");

function renderLightbox() {
  const { images, index } = state.lightbox;
  if (index === null || !images[index]) {
    lightboxEl.classList.remove("open");
    return;
  }
  lightboxImgWrapEl.innerHTML = `<img src="${images[index]}" alt="" />`;
  lightboxEl.classList.add("open");
  document.getElementById("lightbox-prev").classList.toggle("hidden", images.length < 2);
  document.getElementById("lightbox-next").classList.toggle("hidden", images.length < 2);
}

function openLightbox(images, index) {
  if (!images || !images.length) return;
  state.lightbox = { images, index };
  renderLightbox();
}

function closeLightbox() {
  state.lightbox = { images: [], index: null };
  renderLightbox();
}

function navigateLightbox(delta) {
  const { images, index } = state.lightbox;
  if (index === null) return;
  const next = (index + delta + images.length) % images.length;
  state.lightbox.index = next;
  renderLightbox();
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", () => navigateLightbox(-1));
document.getElementById("lightbox-next").addEventListener("click", () => navigateLightbox(1));
lightboxEl.addEventListener("click", (e) => {
  if (e.target === lightboxEl) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightboxEl.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") navigateLightbox(-1);
  if (e.key === "ArrowRight") navigateLightbox(1);
});

/* ------------------------------------------------------------------
   Actions / render loop
   ------------------------------------------------------------------ */
function selectNode(id) {
  state.selectedId = id;
  state.selectedItemId = null;
  closeLightbox();
  render();
}

function clearSelection() {
  state.selectedId = null;
  state.selectedItemId = null;
  closeLightbox();
  render();
}

function backToList() {
  state.selectedItemId = null;
  closeLightbox();
  render();
}

function selectItem(itemId) {
  state.selectedItemId = itemId;
  closeLightbox();
  render();
}

function render() {
  renderTopBar();
  renderInfoPanel();
  applyNodeStyles();
}

/* ------------------------------------------------------------------
   Init
   ------------------------------------------------------------------ */
document.title = `${heroContent.name} — Portfolio`;
buildDiagram();
render();
