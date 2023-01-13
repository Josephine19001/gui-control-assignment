import { BASE_SIZE } from "../components/Slider/util-types/types";

export const updateScaling = (value:number) => {
    let root = document.documentElement;
    root.style.setProperty('font-size', (BASE_SIZE * value) +"px");
}