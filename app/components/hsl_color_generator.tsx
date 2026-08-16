//色相の移動 0~359 *** 000 000
export type HslOptions = {
  hue?: number
  saturation?: number
  lightness?: number
}
// hue:色相　saturation:彩度　lightness:明度
export function HSLColorGenerator(options: HslOptions): string {
  const {
    hue = Math.floor(Math.random() * 360),
    saturation = Math.floor(Math.random() * 101),
    lightness = Math.floor(Math.random() * 101),
  } = options

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
