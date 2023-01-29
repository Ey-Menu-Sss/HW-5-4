import { React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MoreInfo from '../components/moreInfo'

const siglePage = () => {
    console.log(useParams());
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
            setItem(data)
        })
    }, [])
  return (
    <div>
        <MoreInfo sakura={item} key={item.id}/>
    </div>
  )
}

export default siglePage
