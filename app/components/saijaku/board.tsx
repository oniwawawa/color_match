"use client";

import { ColorGenerator } from "@/app/utils/color_generator";
import { CreateCard } from "./create_card";
import { Shuffle } from "@/app/utils/shuffle";

type BoardProps = {
  count: number;
};

export function Board({ count }: BoardProps) {
  const boardColorList: string[] = [];
//countの数だけ色を生成し配列へ
  for (let i = 0; i < count; i++) {
    const color = ColorGenerator();
    boardColorList.push(color);
    boardColorList.push(color);
  }
  const shuffledList: string[] = Shuffle(boardColorList);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {/* mapで自動で配列を並べる */}
      {shuffledList.map((color, index) => (
        <CreateCard key={index} color={color} />
      ))}

    </div>
  );
}
