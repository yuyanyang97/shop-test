import {React, useState} from 'react';
import Detail from '../components/Detail';
import ItemMenu from '../components/ItemMenu';
import './index.css'



const Home = () => {
    const itemList = [{
        id: 1,
        name: "Bulls",
        price: "1"
      },
      {
        id: 2,
        name: "Suns",
        price: "2"
      },
      {
        id: 3,
        name: "Magic",
        price: "3"
      },
      {
        id: 4,
        name: "Magic",
        price: "4"
      }]
    const [item,setItem] = useState([])

    return (
        <div className="app">
            <ItemMenu item={setItem} itemList={itemList}/>
            <Detail listCart={item} deleteData={setItem}/>
        </div>
    )
};

export default Home