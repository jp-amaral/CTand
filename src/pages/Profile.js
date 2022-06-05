import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import'./Profile.css'
import CarDiv from "../components/CarDiv";
import Cars from "../database/cars1.json"
import fotoperfil from '../images/fotoperfil.png'  
import { useNavigate } from "react-router-dom";  
import {motion, AnimatePresence} from 'framer-motion';


function Profile (props){

    let navigate = useNavigate();
    const [apagar,setapagar] = React.useState("visible");
    const [apagar2,setapagar2] = React.useState("visible");
    var array = [];

    const handleLogout = (e) => {
        e.preventDefault();
        props.setLoggedIn(false);
        // redirect to /profile using Navigate 
        navigate(`/`);
    }
    //funcao para colocar apagar a true
    const handleApagar1 = () => {
        setapagar("hidden");
    }
    const handleApagar2 = () => {
        setapagar2("hidden");
    }
    //Imprimir na console o valor de apagar
    console.log(apagar);
    const [openAd, setOpenAd] = useState(false);
    const [carObject, setCarObject] = useState({});
    //Animation related states
    const [visibility, setVisibility] = useState('visible');
    const [opacity, setOpacity] = useState('1');
    const [transition, setTransition] = useState('visibility 0.3s linear,opacity 0.3s linear');

    const divOnClick = (marca, modelo, year) => {
        setOpenAd(true);
        setVisibility('hidden');
        setOpacity('0');
        setTransition('none')
        let car = array.find(item => item.marca === marca && item.modelo === modelo && item.ano === year)
        setCarObject(car);
    }

    var array = [];
    Object.keys(Cars).forEach(function (key) {
        array.push(Cars[key]);
    });

    var filteredCars = array;
    const listCars = filteredCars.map((item, key) =>
        <div className="car" onClick={() => divOnClick(item.marca, item.modelo, item.ano)} key={key}>
           <CarDiv image={item.imagem} info= {<React.Fragment> {item.marca + " " + item.modelo} <br/> {item.ano} <br/> {item.kms + " km"} <br/> {item.preco + " €"}</React.Fragment>}/>
        </div>
    );

    
    
    

    
    return (
        <div className="profilepage">
            <Navbar link="profile" loggedIn={props.loggedIn}/>
            <div className="profile">
                <img src={fotoperfil} className="fotoperfil"/>
                <h2 className="dados1">Stand Tulia</h2>
                <h2 className="dados2">Joined 20/03/2021</h2>
                <h2 className="dados3">Stand.Tulia@gmail.com</h2>
                <h2 className="dados4">235649486</h2>
                <h2 className="dados5">Selling nice and cheap cars since 1988</h2>

            </div>
            <div className="mycars">
                <h1 className="myselcars">My selling cars</h1>
                <motion.div className="carprof" style={{visibility:visibility, opacity:opacity, transition:transition}}>
                    <AnimatePresence>
                    {listCars}
                    </AnimatePresence>
                </motion.div>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        

    )
}

export  default Profile;