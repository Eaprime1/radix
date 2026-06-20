// Static system manifest — radix as shadow-of-origin
export const SYSINFO = {
  bbsName:    "RADIX BBS",
  sysop:      "UNEXUSI",
  location:   "THE SHADOW LAYER",
  software:   "TelGard/RADIX v0.1",
  maxNodes:   8,
  phone:      "NET://radix.local",
  tagline:    "the root beneath the root",
  welcome:    "YOU HAVE REACHED THE ORIGIN.",
  boards: [
    { id: 1, name: "GENERAL",        msgs: 144, lastPost: "TODAY" },
    { id: 2, name: "PHILOSOPHY",     msgs:  72, lastPost: "TODAY" },
    { id: 3, name: "SHADOW WORK",    msgs:  33, lastPost: "TODAY" },
    { id: 4, name: "TECH / SYSTEMS", msgs:  88, lastPost: "TODAY" },
    { id: 5, name: "DREAMS",         msgs:  19, lastPost: "TODAY" },
    { id: 6, name: "ARCHIVIST",      msgs:  56, lastPost: "TODAY" },
  ],
  files: [
    { id: 1, name: "radix_core.zip",    size: "144K", desc: "core system files",         isNew: true  },
    { id: 2, name: "ansi_pack_01.zip",  size:  "88K", desc: "ANSI art collection vol.1", isNew: true  },
    { id: 3, name: "telegard_seed.zip", size: "256K", desc: "telegard UNEXUSI source",   isNew: false },
    { id: 4, name: "shadow_doc.txt",    size:   "8K", desc: "the shadow principle",      isNew: false },
  ],
} as const;
