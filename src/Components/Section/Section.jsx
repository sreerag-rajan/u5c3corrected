import { useParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const[books,setBooks] = useState([]);
  const [changemade, setChangemade] = useState(0)
  const [curSection, setCurSection] = useState("")
  const {section} = useParams()
  useEffect(()=>{
    setCurSection(section);
  })

  useEffect(()=>{
    // handleSort() 
  },[setChangemade])

  useEffect(()=>{
    axios.get("http://localhost:8080/books").then(({data})=>{
      const booksdata = data.filter((el)=>{
        if(el.section=== curSection){
          return el;
        }
      });
      setBooks(booksdata);
    })
  },[curSection])
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page

  const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  `;
  function handleSort(newdata){
    setBooks(newdata); 
    setChangemade(changemade+1);   
  }


  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          section
        }
      </h2>
      <SortAndFilterButtons handleSort={handleSort} books={books} />

      <Main className="sectionContainer">
        {books.map((el)=>{
          return <BookCard key={el.id} id = {el.id} imageUrl = {el.imageUrl} title={el.title} price = {el.price}/>

        })}
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
      </Main>
    </>
  );
};
