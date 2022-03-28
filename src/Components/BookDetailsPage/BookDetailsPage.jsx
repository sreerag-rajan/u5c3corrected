import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import "./BookDetailsPage.css"

export const BookDetailsPage = () => {
  // Get book details based on ID whenever user lands on the page
  // ID will come from route
  const [book,setBook] = useState([]);
  const {id} = useParams()
  // console.log(id);

  useEffect(()=>{
    axios.get(`http://localhost:8080/books/${id}`).then(({data})=>{
      console.log(data);
      setBook(data);
    })
  },[])

  return (
    <>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          {book.reviews&&book.reviews.map((el, i)=>{
            return <li key={i}>{el}</li>
          })}

        </ul>
      </div>
    </>
  );
};
