export const BASE_SIZE = 12;
export const DEFAULT_SCALE = 1;
export const SCALING_KEY = 'userScalingSelection';

export interface SliderProps {
    min:number;
    max: number;
    step: number;
    options: UISettingOptions
}

export enum UISettingOptions{
    Scaling,
    Opacity
}