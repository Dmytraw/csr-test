import "./App.css";

function App() {
  const chunk = new Array(1000000).fill("");
  return (
    <>
      {chunk.map((_, index) => (
        <div key={index}>{index}</div>
      ))}
    </>
  );
}

export default App;
