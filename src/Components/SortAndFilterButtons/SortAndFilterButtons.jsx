export const SortAndFilterButtons = ({ handleSort, books }) => {
  return (
    <div className="sortButtons">
      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}

      <button className="sortByTitleAsc" onClick={()=>{
    
        let newdata =  books.sort((a,b)=>{
          if (a.title < b.title){
            return -1
          }
          return 1
        })
        console.log(newdata)
        
        handleSort(newdata)
      }}>Title In Asc</button>
      <button className="sortByTitleDesc" onClick={()=>{
        let newdata =  books.sort((a,b)=>{
          if (a.title > b.title){
            return -1
          }
          return 1
        })
        handleSort(newdata)
      }}> Title in Desc</button>
      <button className="sortByPriceAsc" onClick={()=>{
        let newdata =  books.sort((a,b)=>{
          return a.price-b.price
        })
        handleSort(newdata)
      }}> Price Asc</button>
      <button className="sortByPriceDesc" onClick={()=>{
        let newdata =  books.sort((a,b)=>{
          return b.price-a.price
        })
        handleSort(newdata)
      }}>Price desc</button>
    </div>
  );
};
