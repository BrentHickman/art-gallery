// import React, { Component } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AppRoutes from '../AppRoutes';
// import { Layout } from './Layout';
// import './custom.css';

// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Layout>
//         <Routes>
//           {AppRoutes.map((route, index) => {
//             const { element, ...rest } = route;
//             return <Route key={index} {...rest} element={element} />;
//           })}
//         </Routes>
//       </Layout>
//     );
//   }
// }

import React from 'react';
import '../custom.css';
import Gallery from './Gallery';

function App() {
  return (
    <React.Fragment>
      < Gallery />
    </React.Fragment>
  );
}

export default App;