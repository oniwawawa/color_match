  "use client"
import { ColorGenerator } from "@/app/components/color_generator";
import { CardGenerator } from "@/app/components/card_generator";
import { CardGeneratorRandomHue } from "@/app/components/card_generator";
import PageLinkButton from "@/app/components/ui/pege_link_button";

export default function Home() {
  const color1 = ColorGenerator();
  const color2 = ColorGenerator();
  const h = 180;
  const s =50;
  const l =50;

  const hslColor11 = CardGenerator({ hueRandom: true,saturation: s , lightness: l });
  const hslColor12 = CardGenerator({ hueRandom: true,saturation: s , lightness: l});
  const hslColor21 = CardGenerator({hue: h, saturation: s, lightnessRandom: true });
  const hslColor22 = CardGenerator({hue: h, saturation: s,lightnessRandom: true });
  const hslColor31 = CardGenerator({hue: h,  saturationRandom: true,lightness: l});
  const hslColor32 = CardGenerator({hue: h,  saturationRandom: true,lightness: l});
//３セットの色相ランダムカードを生成（CardGeneratorRandomHue）
  const randomHues = CardGeneratorRandomHue(s, l, 5);
  const ranHue1 = randomHues[0];
  const ranHue2 = randomHues[1];
  const ranHue3 = randomHues[2];
  const ranHue4 = randomHues[3];
  const ranHue5 = randomHues[4];
  return (
    <div className="p-4 flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-2">
      ランダム生成
      <div className="flex gap-x-2">
        
        <div className="w-24 h-24" style={{ backgroundColor: color1 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: color2 }}/>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
      色相で移動（HSL）
      <div className="flex  gap-x-2">
        <div className="w-24 h-24" style={{ backgroundColor: hslColor11 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: hslColor12 }}/>
      </div>
      </div>

      <div className="flex flex-col gap-y-2">
      明度で移動（HSL）
      <div className="flex  gap-x-2">
        <div className="w-24 h-24" style={{ backgroundColor: hslColor21 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: hslColor22 }}/>
      </div>
      </div>

            <div className="flex flex-col gap-y-2">
      彩度で移動（HSL）
      <div className="flex  gap-x-2">
        <div className="w-24 h-24" style={{ backgroundColor: hslColor31 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: hslColor32 }}/>
      </div>
      </div>

      <div className="flex flex-col gap-y-2">
      CardGeneratorRandomHue（s, l, 5）の結果
      <div className="flex  gap-x-2">
        <div className="w-24 h-24" style={{ backgroundColor: ranHue1 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: ranHue2 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: ranHue3 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: ranHue4 }}/>
        <div className="w-24 h-24" style={{ backgroundColor: ranHue5 }}/>
      </div>
      </div>



      <PageLinkButton back={true}/>
    </div>
  );
}
