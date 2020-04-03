import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Game_2048 from './games/2048/2048';


// class App extends Component {
//   constructor(){
//     super();

    
//   }

//   render(){
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <Switch>
//             <Route exact path='/' component={Homepage} />
//             {/* <Route path='/login' component={Login} /> */}
//             {/* <Route path='/signup' component={Register} /> */}
//             <Route path='/2048' component={Game_2048} />
//         </Switch>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/signup' component={Register} /> */}
          <Route path='/2048' component={Game_2048} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
