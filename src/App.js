import './App.css';
import { MyHeader } from './components/myHeader';
import MyFooter from './components/MyFooter';
import { MyComponent } from './components/myComponent';


function App() {
  return (
    <div className="App">
      <MyHeader />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <MyComponent b="Hello" a="Pouya" />
      <MyComponent a="Pouya" />
      <MyComponent />
      <MyFooter />
    </div>
  );
}

export default App;