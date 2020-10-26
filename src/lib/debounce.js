
export default (func, wait = 1000, immediate = false) => {
  let timeout
  return function (...args) {
    const context = this

    const later = (clear = true) => {
      if (clear) timeout = null
      if (!immediate) func.apply(context, args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (immediate && !timeout) later(false)
  }
}
