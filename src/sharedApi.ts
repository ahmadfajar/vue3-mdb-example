import { useCreateSvgComponent } from '../../vue-mdbootstrap/src/components/Icon/mixins/svgApi'

export function toTitleCase (text: string) {
  return text.toLowerCase()
    .split('-')
    .map(function (word: string) {
      return word.replace(word[0], word[0].toUpperCase())
    }).join(' ')
}

export function newShade (hexColor: string, magnitude: number) {
  const hex = hexColor.replace('#', '')

  if (hex.length === 6) {
    const decimalColor = parseInt(hex, 16)
    let r = (decimalColor >> 16) + magnitude
    r > 255 && (r = 255)
    r < 0 && (r = 0)
    let g = (decimalColor & 0x0000ff) + magnitude
    g > 255 && (g = 255)
    g < 0 && (g = 0)
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude
    b > 255 && (b = 255)
    b < 0 && (b = 0)
    const str = (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')
    return `#${str}`
  } else {
    return hexColor
  }
}

export function hexToRgb (hexColor: string) {
  const color = hexColor.replace('#', '')
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)

  return `rgb(${r},${g},${b})`
}

export function getLightnessOfRGB (rgbString: string): number {
  // First convert to an array of integers by removing the whitespace, taking the 3rd char to the 2nd last then splitting by ','
  const rgbIntArray = (rgbString.replace(/ /g, '').slice(4, -1).split(',').map(e => parseInt(e)))

  // Get the highest and lowest out of red green and blue
  const highest = Math.max(...rgbIntArray)
  const lowest = Math.min(...rgbIntArray)

  // Return the average divided by 255
  return (highest + lowest) / 2 / 255
}

export function IconBullhorn (props: Record<string, unknown>) {
  const svgData = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z"/></svg>'

  return useCreateSvgComponent(
    svgData,
    (<number | undefined>props.height) || 32,
    (<number | undefined>props.width) || 32,
    `md-svg-inline ${props.class}`
  )
}

export function IconCircleNodes (props: Record<string, unknown>) {
  const svgData = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M380.6 365.6C401.1 379.9 416 404.3 416 432C416 476.2 380.2 512 336 512C291.8 512 256 476.2 256 432C256 423.6 257.3 415.4 259.7 407.8L114.1 280.4C103.8 285.3 92.21 288 80 288C35.82 288 0 252.2 0 208C0 163.8 35.82 128 80 128C101.9 128 121.7 136.8 136.2 151.1L320 77.52C321.3 34.48 356.6 0 400 0C444.2 0 480 35.82 480 80C480 117.9 453.7 149.6 418.4 157.9L380.6 365.6zM156.3 232.2L301.9 359.6C306.9 357.3 312.1 355.4 317.6 354.1L355.4 146.4C351.2 143.6 347.4 140.4 343.8 136.9L159.1 210.5C159.7 218 158.5 225.3 156.3 232.2V232.2z"/></svg>'

  return useCreateSvgComponent(
    svgData,
    (<number | undefined>props.height) || 32,
    (<number | undefined>props.width) || 32,
    `md-svg-inline ${props.class}`
  )
}

export function IconThreeCircle (props: Record<string, unknown>) {
  const svgData = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/></svg>'

  return useCreateSvgComponent(
    svgData,
    (<number | undefined>props.height) || 32,
    (<number | undefined>props.width) || 32,
    `md-svg-inline ${props.class}`
  )
}
