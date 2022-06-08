import React from 'react'
import {Card, Button, Container, Table, ListGroup,ProgressBar} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDay} from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip} from "@fortawesome/free-solid-svg-icons";
import { faMessage} from "@fortawesome/free-solid-svg-icons";

function WebPage() {

    const  [equipo, setEquipo]= React.useState([]);

    React.useEffect(() => {
        console.log('Api component mounted')
        obtenerDatos()
    }, [])

    const obtenerDatos =  async () => {
        const data = await fetch('https://api.opendota.com/api/heroes')
        const users = await data.json()
        console.log(users)
        setEquipo(users)
    }


  return (
      <>
       <Container>
        <div className='banner_info'>
           Hola: Asesor
        </div>
        </Container>

        <Container>
        <div class="parent">
            <div className='div1'> 
                <div className='txt_metas'>
                    Tus metas hasta la fecha son:  40%  
                </div>
                <div className='metas'>
                    <ProgressBar now={40} />
                </div>
            </div>
            <div className='div2'> Leads de primer contacto
                <div className='reto'>
                    46
                </div>
                <div className='calls'>
                    <FontAwesomeIcon icon={ faPhoneFlip} />15
                    <FontAwesomeIcon icon={ faMessage} />30 
                </div>
            </div>
            <div className='div3'> Leads confirmar
                <div className='reto'>
                    30
                </div>

                <div className='calls'>
                    <FontAwesomeIcon icon={ faPhoneFlip} />15
                    <FontAwesomeIcon icon={ faMessage} />15 
                </div>
            </div>
            <div className='div4'> Leads  Ultimo intento
           
            <div className='reto'>
                    20
                </div>

                <div className='calls'>
                    <FontAwesomeIcon icon={ faPhoneFlip} />11
                    <FontAwesomeIcon icon={ faMessage} />9 
                </div>
            </div>
        </div> 
        </Container>

        <Container>
        <div className='banner_info'>
           Listado de personas a contactar
        </div>
        </Container>


        <Container>
        <ListGroup.Item>{equipo.map(item => (
                        <ListGroup.Item key="item.id">{item.localized_name}</ListGroup.Item>))
                    }</ListGroup.Item>
            
        </Container>










       


      


        
        
      
      </>
 
    )
  }

export default WebPage