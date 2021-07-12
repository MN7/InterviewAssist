import MyClass from "./MyClass";
import "./styles.css";

export default function App() {
  const d = new Date();
  const dt =
    d.toISOString().substring(0, 10) +
    " " +
    d.toLocaleTimeString().substring(0, 5);
  return (
    <div className="App">
      <h1>Welcome to Technical Discussion - {dt}</h1>
      <MyClass />
    </div>
  );
}
