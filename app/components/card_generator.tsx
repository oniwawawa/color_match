import { HSLColorGenerator } from "./hsl_color_generator";

export type HSLRandomFlags = {
    hueRandom?: boolean
    saturationRandom?: boolean
    lightnessRandom?: boolean
    hue?: number
    saturation?: number
    lightness?: number
}

//関数名: CardGenerator　引数flags（型: HSLRandomFlags）をうけとる
//引数が何もなければ{}(空)となる
//最終的にstring:文字列を返す
export function CardGenerator(flags: HSLRandomFlags = {}) : string {

    //flagsの中の~Randomがtrueならランダムな値を出力、falseなら指定された値(flags.hue)を代入、何もなければ（flags.hue=null→??）0
    const h = flags.hueRandom ? Math.floor(Math.random() * 360) : flags.hue ?? 0;
    const s = flags.saturationRandom ? Math.floor(Math.random() * 101) : flags.saturation ?? 0;
    const l = flags.lightnessRandom ? Math.floor(Math.random() * 101) : flags.lightness ?? 0;
    const hslColor = HSLColorGenerator({ hue: h, saturation: s, lightness: l });




    return hslColor;
}


//色相hueだけランダムで生成,指定された数だけ生成して文字列で返す

//countをnumber(数)型でうけとる
export function CardGeneratorRandomHue(s: number ,l: number ,count: number) : string[] {
    //型を指定して配列を定義
    const randomHue: string[] = [];
    let hslColor = HSLColorGenerator({ hue: Math.floor(Math.random() * 360), saturation: s, lightness: l });

   
    //指定数だけ色を生成
    for (let i = 0; i < count; i++){
        hslColor = HSLColorGenerator({ hue: Math.floor(Math.random() * 360), saturation: s, lightness: l });
        //同じ色を生成していないか確認（配列に同じ数字が無いか確認）
        if (!randomHue.includes(hslColor)){
            randomHue.push(hslColor);//hslColor（生成した色）を追加
        }else{
            hslColor = HSLColorGenerator({ hue: Math.floor(Math.random() * 360), saturation: s, lightness: l });
        }
    }
     
    //配列を返す
    return  randomHue;
}