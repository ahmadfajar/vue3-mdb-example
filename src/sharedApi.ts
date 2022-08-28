export function toTitleCase (text: string) {
  return text.toLowerCase()
    .split('-')
    .map(function (word: string) {
      return word.replace(word[0], word[0].toUpperCase())
    }).join(' ')
}
