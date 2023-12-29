import React from 'react'
import {Books} from "./Book"
interface Prop{
    books:Books[]
}
const ViewBooks = ({books}:Prop) => {
  return (
    <div>
      <table>
         <thead>
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>Price</td>
            </tr>
         </thead>

         <tbody>
            {books.map((item:{title:string, author:string, price:string})=>(
            <tr>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.price}</td>
            </tr>
            ))}
         </tbody>
      </table>
    </div>
  )
}

export default ViewBooks
