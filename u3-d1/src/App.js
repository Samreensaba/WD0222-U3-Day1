import logo from './logo.svg';
import './App.css';
import ButtonComponent from './component/ButtonComponent';
import ImageComponent from './component/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ButtonComponent lable="Apply" bgColor="blue"/>
        <ButtonComponent lable="Submit" bgColor="green"/>
        <ButtonComponent lable="Edit" bgColor="orange"/>
        <ImageComponent width="150px" height="150px" img="http://iilsindia.com/blogs/wp-content/uploads/2017/10/success.jpg" imgAlt="Sucess"/>
        <br></br>
        <ImageComponent width="150px" height="150px" img="https://www.wikihow.com/images/thumb/1/1f/Unload-Your-Negative-Emotional-Rubbish-Step-6-Version-2.jpg/v4-460px-Unload-Your-Negative-Emotional-Rubbish-Step-6-Version-2.jpg" imgAlt="Sucess"/>
      </header>
    </div>
  );
}

export default App;
