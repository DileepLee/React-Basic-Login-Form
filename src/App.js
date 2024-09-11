import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Login Form</h1>
        <label className="userlable" for="inputText">Username: </label>
        <input className="textinput" type="text" id="inputText" />
        <br></br>
        <label className="userlable" for="password">Password: </label>
        <input className="textinput" type="password" id="password" />
       <footer>
       <p id="errorMsg"></p>
       </footer>

       <button className="button">Submit</button>
      </header>
    </div>
  );
}

export default App;
