# GUI controls 
The project implements two GUI controls: auto-complete search tool and slider for UI adjustment. The Auto-complete search tool is a handy tool that supports easier searching for users and is one of the popular GUI controls these days. The Slider GUI control lets users adjuest the opacity and scale of the application in different sizes. The components are reusable and documented for further development.  

The GUI controls are implemented using React and TypeScript. React is one of the most popular Front-end framework for robust web application. Initially, React applications have been implemented with JavaScript. This project takes TypeScript into use for better maintainability and reusability of the codebase. 
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

## Auto Complete Search GUI control (Josephine Gyamera)

## Running the application locally:
Requirements:
- Visual Studio Code
- Npm 
- Node.js

To test the application locally, after cloning the repos, in VS Code terminal, run:

`npm install`

`npm start`
