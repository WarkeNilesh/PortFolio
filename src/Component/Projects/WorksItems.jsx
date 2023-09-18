import React from 'react'

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className='work__title'>{item.title}</h3>
        <a href={item.link} className="work__button">
            {item.demo}
            <i className="bx bx-right-arrow-alt work__button-icon"></i>
            {item.id === 1 ? <br></br> : null}
            {item.id === 1 ? item.demo1 : null}
            {item.id === 1 ? <br></br> : null}
            {item.id === 1 ? item.demo2 : null}
            {item.id === 1 ? <br></br> : null}
            {item.id === 1 ? item.demo3 : null}
            
        </a>
    </div>
  )
}

export default WorksItems