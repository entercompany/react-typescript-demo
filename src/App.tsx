import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Resturent,Address } from './model/resturent'
import BestMenu from './BestMenu';


let data:Resturent = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'incheoi',
    detail: 'somewhere',
    zipCode: 12456
  },
  menu: [{name:'rose pasta',price:2300,category:'PASTA'},{name:'garlic steak',price:30000,category:'STEAK'}]
}
const App:React.FC = () => {
  const [myResturent, setMyResturent] = useState<Resturent>(data)
  const changeAddress = (address:Address) => {
    setMyResturent({...myResturent, address:address})
  }
  const showBestMenuName = (name:string) => {
    return name
  }
  return (
    <div className="App">
      <Store info={myResturent} changeAddress={changeAddress}/>
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />
    </div>
  );
}

export default App;
