import { useRef, useEffect, React } from 'react';
import './App.css';
import './litelements/my-element';
import './litelements/pushbutton-element';
import './litelements/card-user';
import {createComponent} from '@lit-labs/react';
import CardUser from './litelements/card-user';

export const MyElementComponent = createComponent(
  React,
  'card-user',
  CardUser
);

function App() {
  const redButtonRef = useRef();
  
  const clickHandler = () => {
    console.log('RED BUTTON PRESSED!');
  }

  const user = {
    id: 2,
    fullName: 'Luis',
    role: 'Software Engineer',
    avatar: 'https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2021-03/Lorenzo%20Simonelli_0.jpg?h=b3e4b506&itok=j5GKpcfH',
  };

  const users = [
    {
      id: 0,
      fullName: 'Lorenzo Simonelli',
      role: 'CEO',
      avatar: 'https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2021-03/Lorenzo%20Simonelli_0.jpg?h=b3e4b506&itok=j5GKpcfH',
    },
    {
      id: 1,
      fullName: 'Rami Qasem',
      role: 'EVP',
      avatar: 'https://www.bakerhughes.com/sites/bakerhughes/files/styles/small_1_1_768x768_/public/2021-03/Rami%20Qasem.JPG?h=88412868&itok=dFY6HSs0'
    }
  ];

  // edit(event: Event) {
  //   const user = event.detail;
  //   console.log('Edit user', user);
  // }

  useEffect(() => {
    let redButton = null;

    if (redButtonRef.current) {
      redButtonRef.current.addEventListener('button-press', clickHandler);
      redButton = redButtonRef.current;
    }

    return () => {
      if (redButton) {
        redButton.removeEventListener('button-press', clickHandler);
      }  
    };
  });

  

  return (
    <div className="App">
      <header className="App-header">
        <my-element />
        <br />
        <wokwi-pushbutton color="red" ref={redButtonRef}/>
        <br />
        <wokwi-pushbutton color="green"/>
        <br />
        <wokwi-pushbutton color="yellow"/>
        <card-user user="user"/>
      </header>
    </div>
  );
}

export default App;
