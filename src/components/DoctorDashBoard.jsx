import React from 'react'

const Doctor = ({ elem }) => {
  return (
    <div
      class='card'
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem ',
        paddingTop: '1rem',
        marginTop: '0.5rem',
        marginBottom: '0.5rem'
      }}
    >
      <div class='container'>
          <b>Name: </b>{elem.name}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p style={{padding: '0 0'}}>
            <span style={{fontWeight: 'bold'}}>Temperature -</span>
            {elem.temperature.map((temp) => {
              return <span style={{marginLeft: '1rem', border: '1px solid black', borderRadius: '3px'}}>{temp}</span>
            })}
          </p>
          <p style={{padding: '0 0'}}>
            <span style={{fontWeight: 'bold'}}>Humidity -</span>
            {elem.humidity.map((humid) => {
              return <span style={{marginLeft: '1rem', border: '1px solid black', borderRadius: '3px'}}>{humid}</span>
            })}
          </p>
         
        </div>
      </div>
    </div>
  )
}

export default Doctor
