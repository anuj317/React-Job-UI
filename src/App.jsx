import React from 'react';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
const App = () => {
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Satisfied'
    },
     {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underserved'
    },
     {
      img:'https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underbanked'
    },
  ]
  return (
    <div>
       <Section1 users={users}/>
       <Section2/>
    </div>
  );
}

export default App;
