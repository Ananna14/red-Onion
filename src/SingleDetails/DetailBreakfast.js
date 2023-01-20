import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailBreakfast = () => {
  const {id} = useParams();
  const [breakfast, setBreakfast] = useState({});

  // const p = data.breakfasts.find((breakfast)=>conver)
  // useEffect(()=>{
  //   const url = `./breakfast.json/${id}`;
  //    fetch(url)
  //   .then(res => res.json())
  //   .then(data =>console.log(data))
  // }, [])

  return (
    <div>DetailBreakfast comming soon {id}</div>
  )
}

export default DetailBreakfast