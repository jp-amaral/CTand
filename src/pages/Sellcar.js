import {React,useState} from "react";
import Navbar from "../components/Navbar";
import './Sellcar.css';
// import './login.css';
// import './register.css';
import { Icon } from '@iconify/react';
import {Link, useNavigate} from 'react-router-dom';


function SellCar(props){
    const [openAd, setopenAd] = useState(false);
    const [state, setState]   = useState({image:null})
    
    
    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
        /* openAd = true; */
        setopenAd(true);

        var img = event.target.files[0];
        setState({image: URL.createObjectURL(img)});
        }
    };

    return (
      <div>
          <Navbar link="sellcar" loggedIn={props.loggedIn}/>
          
            <div id="split_left">
                <div className="left">
                    <h1>Sell a car</h1>
                    <input type="input" className="form__field1" placeholder="" name="brand" id='brand' required />
                    <label for="brand" className="form__label1">Brand</label>

                    <input type="input" className="form__field2" placeholder="" name="model" id='model' required />
                    <label for="model" className="form__label2">Model</label>

                    <input type="input" className="form__field3" placeholder="" name="kms" id='kms' required />
                    <label for="kms" className="form__label3">KMS</label>

                    <input type="input" className="form__field4" placeholder="" name="priece" id='priece' required />
                    <label for="priece" className="form__label4">Priece</label>

                    <input type="input" className="form__field5" placeholder="" name="year" id='year' required />
                    <label for="year" className="form__label5">Year</label>

                    <input type="input" className="form__field6" placeholder="" name="fuel" id='fuel' required />
                    <label for="fuel" className="form__label6">Fuel</label>

                    <input type="input" className="form__field7" placeholder="" name="engine" id='engine' required />
                    <label for="engine" className="form__label7">Engine</label>

                    <input type="input" className="form__field8" placeholder="" name="horse_power" id='horse_power' required />
                    <label for="horse_power" className="form__label8">Horse Power</label>

                    <textarea  type="input" className="form__field15" placeholder="" name="description" id='description' required  cols="40" rows="5"></textarea>
                    <label for="description" className="form__label15">Description</label>
                </div>
            </div>
            
            <div id="split_right">
                <div className="centered">
                  <div className="iconphoto" >
                    {!openAd && <Icon icon="bytesize:photo" color="#640064" height="100%"/>} 
                  </div>
                  <div className="div-upload" style={{backgroundColor: openAd? 'transparent' : '#FFFFFF'}}>
                    <img className="upload-image" alt="" src={state.image} />
                  </div>
                  <div className="space" style={{backgroundColor: openAd? 'transparent' : '#FFFFFF'}} ></div>
                  <div className="upload_tbn" style={{backgroundColor: openAd? 'transparent' : '#FFFFFF'}}>
                    <label className="file"><input type="file" name="myImage" onChange={onImageChange}/>Upload Photo</label>
                  </div>
                  <div className="btn_sub_div"><Link to='/profile' className= "btn_sub" style={{color:"#FFFFFF"}}>Submit</Link></div>
                </div>
            </div>
          
      </div>
    )
}

export default SellCar
