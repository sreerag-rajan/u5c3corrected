import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios"

export const Home = () => {
  const [books,setBooks] = useState([]);
  const [changemade, setChangemade] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then(({data})=>{
      setBooks(data);
    })
  },[])

  useEffect(()=>{
    // handleSort() 
  },[setChangemade])


  
  function handleSort(data){
    setBooks(data); 
    setChangemade(changemade+1);

  }

  const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={handleSort} books={books}
      />

      <Main className="mainContainer">
        {books.map((el)=>{
          return <BookCard key={el.id} id = {el.id} imageUrl = {el.imageUrl} title={el.title} price = {el.price}/>

        })}
      </Main>
    </div>
  );
};
