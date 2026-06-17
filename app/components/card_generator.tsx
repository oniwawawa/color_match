import { HSLColorGenerator } from "./hsl_color_generator";

export type HSLRandomFlags = {
    hueRandom?: boolean
    saturationRandom?: boolean
    lightnessRandom?: boolean
    hue?: number
    saturation?: number
    lightness?: number
}

export function CardGenerator(flags: HSLRandomFlags = {}) : string {
    const h = flags.hueRandom ? Math.floor(Math.random() * 360) : flags.hue ?? 0;
    const s = flags.saturationRandom ? Math.floor(Math.random() * 101) : flags.saturation ?? 0;
    const l = flags.lightnessRandom ? Math.floor(Math.random() * 101) : flags.lightness ?? 0;
    const hslColor = HSLColorGenerator({ hue: h, saturation: s, lightness: l });




    return hslColor;
}