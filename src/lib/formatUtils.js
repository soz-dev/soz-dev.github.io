/** Parse option strings: "value|label" or plain label. */
export function parseOpt(opt) {
  const p = String(opt).split('|')
  return p.length === 2 ? { value: p[0], label: p[1] } : { value: opt, label: opt }
}

/** Format amount as French euro string (narrow no-break space). */
export function fmt(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '\u202f') + '\u00a0\u20ac'
}
