import { App2 } from "./App2";

function App() {
  // return <h1> Hello from Vite + React</h1>;
  return (
    <>
      {" "}
      <App2 />
      <h1> This is printing directly from App File</h1>;
    </>
  );
}

export default App;

// only single element can be returned from this
// if we want to return multiple then we can use fragment <>
