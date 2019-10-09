import React from 'react';

import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact 
        avatar="https://randomuser.me/api/portraits/women/57.jpg" 
        name="Chloe Ford" 
        online 
        />
        <Contact 
        avatar="https://randomuser.me/api/portraits/women/46.jpg"
         name="Alicia Brown" 
         online
         />
        <Contact 
        avatar="https://randomuser.me/api/portraits/women/11.jpg"
         name="Amelia Alvarez" 
         online={false} 
         />
    </div>
  );
}
export default App;