import {React, useState} from 'react';
import Detail from '../components/Detail';
import ItemMenu from '../components/ItemMenu';
import { API_GET_DATA } from '../../global/constant'
import './index.css'


const Home = () => {
    const [item,setItem] = useState([])

    return (
        <div className="app">
            Home
            <ItemMenu />
            <Detail />
        </div>
    );
};

export default Home