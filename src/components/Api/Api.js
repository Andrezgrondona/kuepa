import React from 'react'

const Api = ()  => {

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
    <div>Api
        <ul>
            {
                equipo.map(item => (
                    <li key="item.id">{item.name}-{item.localized_name}</li>


                ))
            }
        </ul>


    </div>
  )
}

export default Api