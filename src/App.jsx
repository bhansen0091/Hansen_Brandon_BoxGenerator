import BoxComponent from './components/BoxComponent';
import GeneratorForm from './components/GeneratorForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import './App.css';

const App = (props) => {

  const [boxes, setBoxes] = useState([]);
  const [box, setBox] = useState({
    color: "",
    height: 0,
    width: 0
  })

  const handleChange = (e) => {
    setBox({
      ...box,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBoxes((oldBoxes) => [...oldBoxes, box]);
    setBox({
      color: "",
      height: 0,
      width: 0
    })
  }

  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="col-12">
        <GeneratorForm
          inputs = {box}
          handleInputChange = {handleChange}
          handleFormSubmit = {handleSubmit}
        />
      </div>
      <div className="col-10">
        <div className="d-flex flex-wrap">
          {
            boxes.map( (bx,i) => 
            <BoxComponent
              boxColor = {bx.color}
              boxHeight = {bx.height}
              boxWidth = {bx.width}
              key = {i}
            />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
