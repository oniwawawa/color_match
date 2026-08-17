import { CreateCard } from "@/app/components/saijaku/create_card";
import { ColorGenerator } from "../utils/color_generator";
import { Board } from "../components/saijaku/board";

export default function Saijaku() {
  const color = ColorGenerator();
  return (
    <div>
      <CreateCard color={color} />
      <Board count={5}/>
    </div>
  );
}
