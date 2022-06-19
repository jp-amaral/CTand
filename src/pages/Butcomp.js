import React from "react";
import './Buttest.css'
import { Icon } from '@iconify/react';
import {motion, AnimatePresence} from 'framer-motion'
function ButComp() {
    const [show, setShow] = React.useState(false);
    const [compgera,setcompgera] = React.useState(true);

    const handleClick = () => setShow(!show);
  return (
    <motion.div className="butcomp" onClick={handleClick}>
        {compgera&&<div className='buy' >
            <h1 className='testh1'>Comprar</h1>
        </div>}
        {!compgera&&<div className='buy' >
            <h1 className='testh1'>Gerar Fatura</h1>
        </div>}
        {show && <div className='base'>
            <div className='seta_test' onClick={handleClick}>
                <Icon icon="akar-icons:arrow-left"  height="25"/>
            </div>
            <div className='contactar'>Contactar agente</div>
                <div className='maisinfo'>Mensagem para agente: Antónia Rocha</div>
                    <div className='linha1'></div>
                        <div className='textocomprar'>
                            Boa tarde, Tenho interesse em comprar este veiculo, por favor, contacte-me.
                        </div>
                        <div className='enviadopor'>Enviado por: João Lemos</div>
                        <div className='email'>Email: joao.lemos@email.com</div>
                        <div className='telefone'>Telefone: 913441442</div>
                        <div className='enviar'>
                            <div className='enviartxt'>Enviar</div>
                        </div>
                <div className='linha2'></div>
        </div>}
    </motion.div>
  );
}

export default ButComp;