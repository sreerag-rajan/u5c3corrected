import { Link } from "react-router-dom";
import styled from "styled-components";
import "./BookCard.css"



export const BookCard = ({ id, imageUrl, title, price }) => {
  // const styledLink = styled(Link)`
  // width: 300px;
  // height: 400px;
  // border: 1px solid black;

  // & img {
  //   width: 200px;
  // }
// `

  return(
    <Link to={`/bookdetailspage/${id}`}>
      <div className="bookCard" >
      <img className="image" src={imageUrl} alt="" />
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
      </div>
      
    </Link>
  )
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
};
