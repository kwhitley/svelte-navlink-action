type ActionOptions = {
  exact?: boolean
}

const tracked = new Map()

try {
  ;(function (history) {
    const pushState = history.pushState

    history.pushState = function (...args) {
      pushState.apply(history, args)

      // iterate through tracked nodes
      for (const entry of tracked.entries()) {
        injectIfActive(...entry)
      }
    }
  })(window.history)
} catch (err) {}

const isActive = (href: string, exact: boolean) => {
  const path = new URL(location.href).pathname

  return exact ? path === href : path.indexOf(href) === 0
}

const injectIfActive = (node: HTMLElement, options) => {
  if (isActive(node.getAttribute('href') || '', options?.exact)) {
    node.classList.add('active')
  } else {
    node.classList.remove('active')
  }
}

export const navlink = (node: HTMLElement, options?: ActionOptions) => {
  tracked.set(node, options)
  injectIfActive(node, options)

  return {
    destroy: () => tracked.delete(node),
  }
}
