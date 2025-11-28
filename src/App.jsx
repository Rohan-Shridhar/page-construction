import construction from "./assets/construction.jpg";
function App() {
  return (
    <>
      <div className="Container">
        <img src={construction} alt="Under Construction" className="construction-gif" />
        <h1>We are creating something cool ⚙️</h1>
      </div>
    </>
  );
}
export default App;
