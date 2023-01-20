import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailBreakfast = () => {
  const {id} = useParams();
  const [breakfast, setBreakfast] = useState({});

  useEffect(()=>{
    const url = `./breakfast.json`;
     fetch(url)
    .then(res => res.json())
    .then(data =>console.log(data))
  }, [])

  return (
    <div>DetailBreakfast comming soon {id}</div>
  )
}

export default DetailBreakfast