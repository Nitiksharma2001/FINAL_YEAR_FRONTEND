import React from 'react'

const PatientDashBoard = ({data}) => {
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '1rem ',
      paddingTop: '1rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem'
    }}>

    <p style={{padding: '0 0'}}>
      <span style={{fontWeight: 'bold'}}>Temperature -</span> {data.temperature}
    </p>
    <p style={{padding: '0 0'}}>
      <span style={{fontWeight: 'bold'}}>Humidity -</span> {data.humidity}
    </p>
    </div>
  )
}

export default PatientDashBoard