
import './App.css';
import io from 'socket.io-client';

const socket = io('http://localhost:8888');

function App() {
  return (
    <div className="wrapper">
      <div class="join-block">
      <input type="text" placeholder="Room ID" value=""/>
      <input type="text" placeholder="Name" value=""/>
      <button type="button" class="btn btn-primary">Login</button>
      {/* <button class="btn btn-primary btn-block">LOGIN</button> */}
      </div>
    </div>
  );
}

export default App;
