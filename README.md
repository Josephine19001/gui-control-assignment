# GUI controls

The project implements two GUI controls: auto-complete search tool and slider for UI adjustment. The Auto-complete search tool is a handy tool that supports easier searching for users and is one of the popular GUI controls these days. The Slider GUI control lets users adjust the opacity and scale of the application in different sizes. The components are reusable and documented for further development.

The GUI controls are implemented using React and TypeScript. React is one of the most popular Front-end framework for robust web application. Initially, React applications have been implemented with JavaScript. This project takes TypeScript into use for better maintainability, reusability and types support of the codebase.

Quick demo: https://gui-control-assignment-anh-josephine.vercel.app/ 

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

This GUI control allows users to quickly search for and select a desired item from a pre-defined list of options that can also be categorized.

### Features

- Scrollable dropdown list of options
- As-you-type search functionality
- Item list grouping support
- Not found display support
- Supports selecting items from list

### Usage

There are three different ways to use this component. The prop that is passed to the imported component determines what kind of functionalities the Auto search will provide. To use the basic feature for the component,

1. In your project,

```
import AutoCompleteSearch from './AutoCompleteSearch';
```

2. Use the component in your JSX, passing in the following props:
   - `options`: an array of an object representing the options for the search. The following is the structure of an item in the options
```
{
 id: string,
 categoryName?: string, -> optional
 name: string
}
```
   - `placeholder`: an optional string for the placeholder text in the search input
   - `showSelectedItem`: an optional boolean that will allow option items to be selectable
   - `groupSearchItems`: an optional boolean that allows the options to be grouped into categories. With this,
   - `onSelect`: a callback function to handle when a user selects an option.
### Example
The following is example of how the component can be used
```
const handleSelect = (selectedOptionItem) => {
console.log(Selected item: ${selectedOptionItem});
}

<AutoCompleteSearch
 options={[{id: 1, name: 'Carrot', categoryName: 'Vegetable'}]}
 showSelectedItem={true}
 groupSearchItems={true}
 placeholder='Search for an item'
 onSelect={handleSelect}
/>
```

## Running the application locally:

Requirements:

- Integrated Development Environment(IDE), eg Visual Studio Code or IntelliJ
- Npm
- Node.js

To test the application locally, after cloning the repos, in VS Code terminal, run:

`npm install` -> This installs the packages needed to run the application

`npm start` -> This will open the application in a new window in the browser. The default port used in react is `http://localhost:3000/`
