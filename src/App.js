import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Tittle from './components/Tittle';
import HideToggle from './components/HideToggle';
import CheckBox from './components/CheckBox';
import Validation from './components/Validation';
import CondiRindaing from './components/CondiRindaing';
import Login from './components/Login';
import PassFunProps from './components/PassFunProps';
import LifeCycleMathed from './components/LifeCycleMathed';
import Hooks from './components/Hooks';
import Styless from './components/Styless';
import Boostrap from './components/Boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrayList from './components/ArrayList';
import Reuse from './components/Reuse';
import Fragments from './components/Fragments';
import LiftingStepup from './components/LiftingStepup';
import { PureComponent, useRef } from 'react';
import PureFunction from './components/PureFunction';
import UseMemos from './components/UseMemos';
import RafInReact from './components/RafInReact';
import UserRefinReact from './components/UserRefinReact';
import ForWordRef from './components/ForWordRef';
import ControlledComponet from './components/ControlledComponet';
import UncotrolledComponent from './components/UncotrolledComponent';
import HighLavelComponent from './components/HighLavelComponent';


function App() {


  //   let data=[
  //     { Name: "ujjal", id: 1, city: "kolkata" },
  //     { Name: "Pinki", id: 2, city: "Delhi" },
  //     { Name: "Utpal", id: 3, city: "Bengalore" },
  //     { Name: "Sujit", id: 4, city: "kolkata" }
  // ];


  // function fun(x) {

  //      alert(x);
  // }


  //  let inputRef=useRef(null);

  //  function updateInput(){

  //      inputRef.current.value=100;

  //  }



  return (
    <div className="App">
      <div>

        {/* <h1>Hello world </h1>
              {

                data.map((data)=>{return <Reuse data={data}/>})
              } */}


        <h1>Hello world</h1>
        {/* <LiftingStepup  fun={fun} /> */}

        {/* <PureFunction /> */}
        {/* <UseMemos /> */}

        {/* <RafInReact /> */}
        {/* <UserRefinReact /> */}




{/* 
        <button onClick={()=>updateInput()}>Update input box </button>
        <ForWordRef ref={inputRef} />
       */}

      
       
         {/* <UncotrolledComponent /> */}

         <HighLavelComponent />





      </div>
    </div>
  );
}

export default App;
