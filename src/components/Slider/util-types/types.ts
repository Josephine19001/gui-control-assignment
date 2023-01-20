export const BASE_SIZE = 12;
export const DEFAULT_SCALE = 1;
export const DEFAULT_OPACITY = 1;
export const SCALING_KEY = 'userScalingSelection';
export const OPACITY_KEY = 'userOpacitySelection';

export interface SliderProps {
    min:number;
    max: number;
    step: number;
    options: UISettingOptions;
    expiresIn?: number;
}

export enum UISettingOptions{
    Scaling,
    Opacity
}