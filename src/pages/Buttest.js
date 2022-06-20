import React,{useEffect} from "react";
import './Buttest.css'
import { Icon } from '@iconify/react';
import {motion, AnimatePresence} from 'framer-motion'
function Buttest(props) {
    const [show, setShow] = React.useState(false);
    const [agent, setAgent] = React.useState(true);
    const [client, setclient] = React.useState(false);
    const [testvend,settestvend] = React.useState(true);
    const handleClick = () => 
    {
        setShow(!show);
        console.log(props.user);
    }

    
  return (
    <motion.div className="butcomp" onClick={handleClick}>
        <div className='base'>
            <div className='seta_test' onClick={() => props.setTest(false)}>
                <Icon icon="akar-icons:arrow-left"  height="25"/>
            </div>
            <div className='contactar'>Contactar agente</div>
                <div className='maisinfo'>Mensagem para agente: Antónia Rocha</div>
                    <div className='linha1'></div>
                        <div className='textocomprar'>
                            Boa tarde, Tenho interesse em fazer o teste drive deste veiculo, por favor, contacte-me.
                        </div>
                        <div className='enviadopor'>Enviado por: João Lemos</div>
                        <div className='email'>Email: joao.lemos@email.com</div>
                        <div className='telefone'>Telefone: 913441442</div>
                        <div className='enviar'>
                            <div className='enviartxt'>Enviar</div>
                        </div>
                <div className='linha2'></div>
        </div>
    </motion.div>
  );
}

export default Buttest;