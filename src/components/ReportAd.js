import React from "react";
import './ReportAd.css'
import { Icon } from '@iconify/react';
import {motion, AnimatePresence} from 'framer-motion'

function ReportAd(props) {
  return (
  <motion.div className="butcomp" >
        {<div className='base'>
            <div className='seta_test' onClick={() => props.setReportAd(false)}>
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