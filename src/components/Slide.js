import React from 'react'

const Slide = ({ image,tittle }) => {
  const styles = {
    backgroundImage: `url(img/${image}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    width:'100%',
    height:'120%',
    
  }
  return <div className="slide" style={styles}>{tittle.firstName +' ' + tittle.lastName} <br/>
  {tittle.title} <br/>
  {tittle.skills.map(data => {
      return <span className="sizef"> {data}</span> 
  })
}
  </div>
}

export default Slide
