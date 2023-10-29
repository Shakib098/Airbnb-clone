import React from 'react';
import "./SearchPage.css";
import { Button } from "@mui/material"
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
        <div className="searchPage__info">
            <p>62 stays . 26 October to 30 October . 2 guest</p>
            <h1>Stays nearby</h1>
            <Button variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">Types of place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More Filters</Button>
        </div>
        <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720"
          location="Private room in center of London"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.73}
          price="₹2500 / night"
          total="₹5700 total"
         />
         <SearchResult 
          img="https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/e6bed0e6-6190-4119-bd80-d12d369cea19.jpg?im_w=720"
          location="Private room in center of Madrid"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.7}
          price="₹7500 / night"
          total="₹7500 total"
         />
         <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720"
          location="Private room in center of France"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={3.68}
          price="₹4000 / night"
          total="₹6000 total"
         />
         <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/0d4e80ac-b1b4-44d1-ab2f-10c67c1e8e2a.jpeg?im_w=720"
          location="Private room in center of Delhi"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={5.0}
          price="₹3000 / night"
          total="₹5000 total"
         />
         <SearchResult
          img="https://a0.muscache.com/im/pictures/miso/Hosting-566028065891205462/original/8272f279-b785-4533-b9e5-b400a37d6a52.jpeg?im_w=720"
          location="Private room in center of Bangalore"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={4.98}
          price="₹4500 / night"
          total="₹7000 total"
         />
         <SearchResult 
          img="https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=720"
          location="Private room in center of Mumbai"
          title="Stay at this spacious edwardion House"
          description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
          star={2.78}
          price="₹2000 / night"
          total="₹3500 total"
         />
    </div>
  )
}

export default SearchPage