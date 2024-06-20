import "./App.css";
import Header from "./component/Header";
import Content from "./component/Content";
import TabBar from "./component/TabBar";

function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <TabBar />
    </div>
  );
}

export default App;