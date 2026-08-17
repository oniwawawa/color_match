"use client";
import { useState } from "react";

type CardStyleProps = {
  color: string;
};

//めくれるカード(クリックで裏→表になる)を生成
export function CreateCard(props: CardStyleProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  //クリック判定
  function handleClick() {
    //true fsalseの切り替え
    setIsFlipped(!isFlipped);
  }

  return (
    <div
      onClick={handleClick}
      className="w-[100px] h-[100px] shadow hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      style={{ backgroundColor: isFlipped ? props.color : "gray" }}
    />
  );
}
