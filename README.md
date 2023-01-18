# GUI controls 
The GUI controls are implemented using React and TypeScript
## Contributors:
Anh Vo (Student number: 2203300)

Josephine Gyamera (Student number: 2205251)

## Slider GUI control for adjusting UI (opacity, scaling) (Anh Vo)
### Instructions:
`<Slider
    min={0.25}
    max={1.25}
    step={0.25}
    options={UISettingOptions.Scaling}
    expiresIn={3600}
/>`

The value of `expiresIn` is nullable and value is in seconds format. For definition of props in Slider component, check `SliderProps` from ./Slider/util-types/types.ts

`export interface SliderProps {
    min:number;
    max: number;
    step: number;
    options: UISettingOptions;
    expiresIn?: number;
}
export enum UISettingOptions{
    Scaling,
    Opacity
}`

### Auto Complete Search GUI control (Josephine Gyamera)