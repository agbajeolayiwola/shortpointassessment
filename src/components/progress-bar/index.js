import React from 'react'
import './styles.css'
  
const ProgressBar = ({bgcolor,progress,height}) => {
    //  Progress bar styles 
    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: '#ebebeb',
        borderRadius: 40,
        marginLeft: '10%',
        marginBottom:'5%'

      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        tramsition:'1s ease-in-out forwards',
        backgroundColor: bgcolor,
        boxShadow:'rgb(142 138 138) 0px 0px 4px;',
        border:'solid 1px',
        borderColor:'#d3d3d3',
        borderRadius:40,
        textAlign: 'right'
        }
        const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
        }
 
      return (
      <div style={Parentdiv}>
          <div style={Childdiv} 
          // ternary to trigger animitaion in css 
          className={progress === 100? 'childDiv animate':'childDiv' }>
             <span style={progresstext}>{`${progress}%`}</span>
          </div>
      </div>
      )
}

export default ProgressBar