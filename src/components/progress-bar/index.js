import React from 'react'
  
const ProgressBar = ({bgcolor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        tramsition:'1s ease-in-out forwards',
        backgroundColor: bgcolor,
        boxShadow:'#dedede 1px 2px 2px',
        borde:'sold 1px',
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
<div style={Childdiv}>
 <span style={progresstext}>{`${progress}%`}</span>
</div>
</div>
)
}

export default ProgressBar