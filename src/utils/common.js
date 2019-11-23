export default function clone(o) {
  if (Array.isArray(o)) {
    return o.map(clone)
  } else if (o !== null && typeof o === 'object') {
    const obj = {}
    for (const [key, val] of Object.entries(o)) {
      obj[key] = clone(val)
    }
    return obj
  } else {
    return o
  }
}
