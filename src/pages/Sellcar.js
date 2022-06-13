import React from "react";
import Navbar from "../components/Navbar";
import './Sellcar.css';
// import './login.css';
// import './register.css';
import { Icon } from '@iconify/react';
import {Link, useNavigate} from 'react-router-dom';


class SellCar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.openAd = false;

   // if we are using arrow function binding in not required
    this.onImageChange = this.onImageChange.bind(this);
  }
  saveImage = (event) => {
    /* console "saveimage" */
    console.log("saveimage");
  }
  
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      /* openAd = true; */
      this.openAd = true;

      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {

    return (
      <div>
          <Navbar link="sellcar" loggedIn={this.props.loggedIn}/>
          
            <div id="split_left">
                <div class="left">
                    <h1>Sell a car</h1>
                    <input type="input" class="form__field1" placeholder="" name="brand" id='brand' required />
                    <label for="brand" class="form__label1">Brand</label>

                    <input type="input" class="form__field2" placeholder="" name="model" id='model' required />
                    <label for="model" class="form__label2">Model</label>

                    <input type="input" class="form__field3" placeholder="" name="kms" id='kms' required />
                    <label for="kms" class="form__label3">KMS</label>

                    <input type="input" class="form__field4" placeholder="" name="priece" id='priece' required />
                    <label for="priece" class="form__label4">Priece</label>

                    <input type="input" class="form__field5" placeholder="" name="year" id='year' required />
                    <label for="year" class="form__label5">Year</label>

                    <input type="input" class="form__field6" placeholder="" name="fuel" id='fuel' required />
                    <label for="fuel" class="form__label6">Fuel</label>

                    <input type="input" class="form__field7" placeholder="" name="engine" id='engine' required />
                    <label for="engine" class="form__label7">Engine</label>

                    <input type="input" class="form__field8" placeholder="" name="horse_power" id='horse_power' required />
                    <label for="horse_power" class="form__label8">Horse Power</label>

                    <textarea  type="input" class="form__field15" placeholder="" name="description" id='description' required  cols="40" rows="5"></textarea>
                    <label for="description" class="form__label15">Description</label>
                </div>
            </div>
            
            <div id="split_right">
                <div class="centered">
                  <div className="iconphoto" >
                    {!this.openAd && <Icon icon="bytesize:photo" color="#640064" height="100%"/>} 
                  </div>
                  <div className="div-upload" style={{backgroundColor: this.openAd? 'transparent' : '#FFFFFF'}}>
                    <img className="upload-image" alt="" src={this.state.image} />
                  </div>
                  <div className="space" style={{backgroundColor: this.openAd? 'transparent' : '#FFFFFF'}} ></div>
                  <div className="upload_tbn" style={{backgroundColor: this.openAd? 'transparent' : '#FFFFFF'}}>
                    <label className="file"><input type="file" name="myImage" onChange={this.onImageChange}/>Upload Photo</label>
                  </div>
                  <div className="btn_sub_div"><Link to='/profile' className= "btn_sub" style={{color:"#FFFFFF"}}>Submit</Link></div>
                </div>
            </div>
          
      </div>
    )
  }
}

export default SellCar
