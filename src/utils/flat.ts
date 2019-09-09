export interface Messages {
  [key: string]: Messages | string
}

export interface FlattenMessages {
  [key: string]: string
}

export const flattenMessages = (nestedMessages: Messages, prefix = ''): FlattenMessages =>
  Object.entries(nestedMessages).reduce((messages, [key, value]) => {
    const prefixedKey: string = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') return { ...messages, [prefixedKey]: value }
    return { ...messages, ...flattenMessages(value, prefixedKey) }
  }, {})

export const answer = 42
