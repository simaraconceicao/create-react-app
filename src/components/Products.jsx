import React, {useEffect, useState} from 'react'
import api from '../services/api'

const Products = () =>{
    const [products, setProducts] = useState([])

    useEffect( () => {
        api.get('/products').then(response=>{
            setProducts(response.data.docs)
        })
        
    }, [])

    return(
        <div>
            <h1>Quantidade de Produtos: {products.length}</h1>
            {products.map(item => 
                <li key={item._id}>
                    {item.title}
                </li>               
            )}         

           
        </div>
    )
}

export default Products