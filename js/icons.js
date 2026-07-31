// ------------------------------------------------------------------
// ไอคอนเส้น (outline) แบบง่าย ๆ เขียนเอง ไม่พึ่งไลบรารีภายนอก
// ทุกไอคอนใช้ stroke="currentColor" จะได้เปลี่ยนสีผ่าน CSS/inline style ได้ตรง ๆ
// ------------------------------------------------------------------

const svg = (inner, viewBox = "0 0 24 24") =>
  `<svg viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

export const ICONS = {
  User: svg(
    `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7"/>`
  ),
  FolderKanban: svg(
    `<path d="M3 6a1.5 1.5 0 0 1 1.5-1.5h4l1.6 2H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 18.5H4.5A1.5 1.5 0 0 1 3 17z"/><path d="M8 10.5v4"/><path d="M12 9v6"/><path d="M16 11.5v3"/>`
  ),
  Award: svg(
    `<circle cx="12" cy="8" r="5"/><path d="M9 12.5 7.5 21 12 18.5 16.5 21 15 12.5"/>`
  ),
  BadgeCheck: svg(
    `<path d="M12 3.5 14 5l2.5-.5 1 2.3 2.3 1-.5 2.5 1.5 2-1.5 2 .5 2.5-2.3 1-1 2.3L14 19l-2 1.5L10 19l-2.5.5-1-2.3-2.3-1 .5-2.5L3.2 12l1.5-2-.5-2.5 2.3-1 1-2.3L10 5z"/><path d="m9 12 2 2 4-4.2"/>`
  ),
  Mail: svg(
    `<rect x="3.5" y="5.5" width="17" height="13" rx="1.8"/><path d="m4 6.5 8 6.3 8-6.3"/>`
  ),
  Phone: svg(
    `<path d="M7 3.5c1 0 1.9.7 2.2 1.7l.6 1.9a2.3 2.3 0 0 1-.6 2.3l-1 1a13 13 0 0 0 6.4 6.4l1-1a2.3 2.3 0 0 1 2.3-.6l1.9.6c1 .3 1.7 1.2 1.7 2.2v1.8c0 1.4-1.3 2.4-2.6 2.1C11.4 20.4 4.6 13.6 3.1 6.1 2.8 4.8 3.8 3.5 5.2 3.5z"/>`
  ),
  Github: svg(
    `<path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.6-.2.6-.5v-1.8c-2.6.6-3.2-1.1-3.2-1.1-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.6 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.8v2.6c0 .3.1.6.6.5A9.5 9.5 0 0 0 12 2.5z"/>`
  ),
  Linkedin: svg(
    `<rect x="3.5" y="3.5" width="17" height="17" rx="2.5"/><path d="M8 10v6.5M8 7.3v.1M12.2 16.5V13c0-1.4.8-2.4 2.1-2.4S16 11.6 16 13v3.5"/>`
  ),
  MapPin: svg(
    `<path d="M12 21s7-6.1 7-11.5a7 7 0 0 0-14 0C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/>`
  ),
  Sparkles: svg(
    `<path d="M11 3 12.3 7.7 17 9 12.3 10.3 11 15 9.7 10.3 5 9 9.7 7.7z"/><path d="M18.5 14 19.2 16 21 16.7 19.2 17.5 18.5 19.5 17.8 17.5 16 16.7 17.8 16z"/>`
  ),
  ArrowLeft: svg(`<path d="M19 12H5M11 6l-6 6 6 6"/>`),
  Expand: svg(
    `<path d="M9 4H4v5M15 4h5v5M4 15v5h5M20 15v5h-5"/>`
  ),
  ExternalLink: svg(
    `<path d="M14 4h6v6M10 14 20 4M19 13v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V8a1.5 1.5 0 0 1 1.5-1.5H12"/>`
  ),
  FileText: svg(
    `<path d="M7 3.5h7l4 4v13H7z"/><path d="M14 3.5v4h4M9.5 12h5M9.5 15h5"/>`
  ),
  X: svg(`<path d="M6 6l12 12M18 6 6 18"/>`),
  ChevronLeft: svg(`<path d="M15 5 8 12l7 7"/>`),
  ChevronRight: svg(`<path d="M9 5l7 7-7 7"/>`),
};

// สร้าง element <span> ที่มี svg icon อยู่ข้างใน พร้อม class เผื่อจัดสไตล์
export function iconEl(name, className = "") {
  const span = document.createElement("span");
  span.className = `icon ${className}`.trim();
  span.innerHTML = ICONS[name] ?? ICONS.User;
  return span;
}
