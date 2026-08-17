import { CreateCard } from "@/app/components/saijaku/create_card";
import { ColorGenerator } from "../components/color_generator";

export default function Saijaku() {
    const color=ColorGenerator();
    return(
        <div>
            <CreateCard color={color}/>
        </div>
    );

};