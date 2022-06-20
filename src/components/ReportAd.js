import React from "react";
import './ReportAd.css'
import { Icon } from '@iconify/react';
import {motion, AnimatePresence} from 'framer-motion'

function ReportAd(props) {

    const onClickReport = () => {
        props.setReportAd(false);
        const data = new FormData();
        data.append("brand", props.carObject.marca);
        data.append("model", props.carObject.modelo);
        data.append("image", props.carObject.imagem);
        //send data to server 'http://localhost:5000/api/deletecar'
        fetch('http://localhost:5000/api/deletecar', {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        }).then(res => {
            console.log(res);
            window.location.reload(false);
        })
    }

  return (
  <motion.div className="butcomp" >
        {<div className='base'>
            <div className='seta_test' onClick={onClickReport}>
                <Icon icon="akar-icons:arrow-left"  height="25"/>
            </div>
            <div className='reportad'>Report announcements</div>
            <input className="reporttxt" type="text" name="name" />
            <div className='enviartxt'>
                <h1 className="submitbtn">Submit</h1>
            </div>
        </div>}
    </motion.div>
    );
}

export default ReportAd;