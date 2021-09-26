import './App.css';
import Header from "./components/Header/Header"
import Body from "./components/Body/Body"
function App() {
  return (
    <div className="App">
      <div className="m-auto pb-5">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
