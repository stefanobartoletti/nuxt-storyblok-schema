import type { MultilinkFieldValue } from '@storyblok/schema'

/** Story slug to route path (`home` becomes `/`). */
export function storyPath(slug?: string | null, anchor?: string | null): string {
  const clean = (slug || '').replace(/^\/|\/$/g, '')
  const path = clean === 'home' ? '/' : `/${clean}`
  return anchor ? `${path}#${anchor}` : path
}

/** Multilink field to href. */
export function resolveLink(link?: MultilinkFieldValue): string {
  if (!link) {
    return '/'
  }

  if (link.linktype === 'email') {
    return link.email ? `mailto:${link.email}` : '/'
  }

  if (link.linktype === 'url' || link.linktype === 'asset') {
    return link.url || link.cached_url || '/'
  }

  return storyPath(link.cached_url, link.anchor)
}
