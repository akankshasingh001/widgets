import React from 'react';
import Accordion from './Components/Accordion';
// import AccordianItems from './Components/AccordionItems';

const App = () => {
  const items = [
    {
      title: 'What is React?',
      content:
        'React is a JavaScript library that is used for building user interface like web application ,SPA etc.'
    },
    {
      title: 'What is JSX?',
      content:
        'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.'
    },
    {
      title: 'What is the difference between Element and Component?',
      content:
        'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.'
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
