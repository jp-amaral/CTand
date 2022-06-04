// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import CarDiv from "../components/CarDiv";
import './Home.css';
import Cars from "../database/cars.json"
import Navbar from "../components/Navbar";
import CarAd from "../components/CarAd";
import {motion, AnimatePresence} from 'framer-motion';

function Home(props) {

    const [openAd, setOpenAd] = useState(false);

    const [visibility, setVisibility] = useState('visible');
    const [searchTerm, setSearchTerm] = useState("");
    const [carObject, setCarObject] = useState({});
    const [opacity, setOpacity] = useState('1');
    const [transition, setTransition] = useState('visibility 0.3s linear,opacity 0.3s linear');


    //Onclick open car ad 
    const divOnClick = (marca, modelo, year) => {
        setOpenAd(true);
        setVisibility('hidden');
        setOpacity('0');
        setTransition('none')
        let car = array.find(item => item.marca === marca && item.modelo === modelo && item.ano === year)
        setCarObject(car);
    }


    //car Json into array
    var array = [];
    Object.keys(Cars).forEach(function (key) {
        array.push(Cars[key]);

    });

    //Filter cars based on input
    const listCars = array.filter((item) => {
        var search = searchTerm.toLowerCase().replace(/\s/g, '');
        var car1 = item.marca.toLowerCase()+item.modelo.toLowerCase()+item.ano.toLowerCase().replace(/\s/g, '');
        var car2 = item.marca.toLowerCase()+item.ano.toLowerCase().replace(/\s/g, '');
        var car3 = item.modelo.toLowerCase()+item.ano.toLowerCase().replace(/\s/g, '');
        if(searchTerm === ""){
            return item
        } else if (car1.includes(search) || car2.includes(search) || car3.includes(search)) {
            return item
        }
        else {
            return null
        }
    }).map((item,key) => 
        <div className="car" onClick={() => divOnClick(item.marca, item.modelo, item.ano)} key={key}>
            <CarDiv image={item.imagem} info= {<React.Fragment> {item.marca + " " + item.modelo} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
        </div>
    );



    return (
        <div className="Home">
            {!openAd && <Navbar link="buyacar" loggedIn= {props.loggedIn}/>}

            {!openAd && <input  className="searchInput" type={'text'} placeholder={'Search...'} onChange={(event) => setSearchTerm(event.target.value)}/>}

            <AnimatePresence>
            {openAd && <motion.div><CarAd closeAd={setOpenAd} visible={setVisibility} opacity={setOpacity} transition={setTransition} carObject={carObject}/></motion.div>}
            </AnimatePresence>

            <motion.div className="cars" style={{visibility:visibility, opacity:opacity, transition:transition}}>
                <AnimatePresence>
                {listCars}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default Home;