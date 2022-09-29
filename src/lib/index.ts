import { page } from '$app/stores'

type ActionOptions = {
  exact?: Boolean,
}

const isActive = (href: string, path: string, exact: Boolean) => exact
                                        ? path === href
                                        : path.indexOf(href) === 0

const injectIfActive = (node: HTMLElement, options: ActionOptions) => page => {
  if (isActive(node.getAttribute('href') || '', page.url.pathname, options?.exact)) {
    node.classList.add('active')
  } else {
    node.classList.remove('active')
  }
}

export const navlink = (node: HTMLElement, options?: ActionOptions) => ({
  destroy: page.subscribe(injectIfActive(node, options)),
})
