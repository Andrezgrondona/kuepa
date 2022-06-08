/* import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiDos(props) {
    const [valores, setValores] = useState([]);

    useEffect(() => {
        axios.get(' https://docs.opendota.com/#tag/players')
        .then(res => {
            const data =res.data;
            setValores(data);
        })

    }, [])
  return (
    <div>ApiDos

        <li>
            {valores.map((item) => <li>{item.name}</li>)}
        </li>
    </div>
  )
}

export default ApiDos */