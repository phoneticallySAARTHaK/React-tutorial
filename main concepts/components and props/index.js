function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

function Welcome(pp) {
  return <h1>Hello, {pp.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
