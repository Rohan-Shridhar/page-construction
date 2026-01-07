import construction from "./assets/construction.jpg";
import construct from "./assets/construct.gif";
function App() {
  return (
    <>
      <div className="Container">
        <h1>Under Construction</h1>
<img src={construct} alt="Under Construction" className="construction-gif" loading="eager" style={{ aspectRatio: '1 / 1' }}
/>
        <h1>We are creating something cool ⚙️</h1>
      </div>
    </>
  );
}
export default App;
