# PRO03_FRONT_Itziar_Khalos_Marika_Levi


## Wisdom War Input Components
This document provides an overview of the input components developed for the Wisdom War quiz application. These components are designed to enhance the user experience by allowing for intuitive input handling in the quiz creation process.

### Overview
The application includes four key input components:

- DifficultyDropdown: A dropdown menu for selecting the difficulty level of the quiz.
- CategoryDropdown: A dropdown menu for selecting the quiz category.
- TextInput: A text input component for capturing short text entries.
- TextArea: A text area component for entering longer descriptions.
- Each component is built using React, TypeScript, and Tailwind CSS for styling.

1. DifficultyDropdown
#### Component: DifficultyDropdown.tsx
- Description: This dropdown allows users to select a difficulty level for the quiz.
- Options: Easy, Medium, Hard.
- Placeholder: Displays "Select Difficulty" before any selection is made.
- Selected Item: Once an option is selected, the text color changes to black to improve contrast against the light background.
- Responsive: The component adjusts to take the full width on mobile devices and centers on larger screens.

Usage Example:
```tsx
import DifficultyDropdown from './components/DifficultyDropdown';

const App = () => {
  return (
    <div>
      <DifficultyDropdown />
    </div>
  );
};
```
2. CategoryDropdown
#### Component: CategoryDropdown.tsx
- Description: This dropdown allows users to select the category of the quiz.
- Options: FAC, Music, Movies, Art.
- Placeholder: Displays "Select Category" before any selection is made.
- Selected Item: Changes to black font color once an option is selected.
- Responsive: Similar layout as the DifficultyDropdown, ensuring usability across devices.

Usage Example:
```tsx
import CategoryDropdown from './components/CategoryDropdown';

const App = () => {
  return (
    <div>
      <CategoryDropdown />
    </div>
  );
};
```

3. TextInput
#### Component: TextInput.tsx
- Description: A versatile text input component that can be reused for various purposes in the application.
- Label: The label is passed as a prop, allowing customization based on its usage context.
- Placeholder: The placeholder text is also passed as a prop for dynamic content.
- Text Color: Changes to black once the user starts typing, improving readability.
- Sanitization: Input is sanitized to prevent malicious content, specifically to filter out < symbols.

Usage Example:
```tsx
import TextInput from './components/TextInput';

const App = () => {
  return (
    <div>
      <TextInput label="Quiz Title" placeholder="Enter quiz title" />
    </div>
  );
};
```
4. TextArea
#### Component: TextArea.tsx
- Description: A text area component designed for entering longer descriptions or content.
- Label: Similar to TextInput, the label is passed as a prop.
- Placeholder: The placeholder can be customized based on context.
- Text Color: Text changes to black once the user begins typing.
- Sanitization: Prevents malicious inputs, specifically filtering out < symbols.

Usage Example:
```tsx
import TextArea from './components/TextArea';

const App = () => {
  return (
    <div>
      <TextArea label="Add a brief description" placeholder="Enter a description here" />
    </div>
  );
};
```
#### Styling
All components utilize Tailwind CSS for styling, ensuring a responsive and consistent design throughout the application. The default styles are defined in index.css, which includes global styles and variables.

#### Conclusion
These input components are designed to be reusable, responsive, and user-friendly, providing a solid foundation for the quiz creation process in the Wisdom War application. Feel free to customize and extend these components as needed for your project.

test
