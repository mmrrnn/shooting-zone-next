export const sluggify = (str: string) =>
  str
    .toLowerCase()
    .replace('ą', 'a')
    .replace('ę', 'e')
    .replace('ż', 'z')
    .replace('ź', 'z')
    .replace('ć', 'c')
    .replace('ń', 'n')
    .replace('ó', 'o')
    .replace('ł', 'l')
    .replace('ś', 's')
    .replace(/[^\da-z]+/g, '-')
    .replace(/(^-|-$)+/g, '')
