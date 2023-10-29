import React from 'react'
import "./Home.css"
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className="home">
        <Banner />

        <div className="home__section">
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-13903824/original/82d996fb-d7c4-46a8-a713-febd281cd69f.jpeg?im_w=720"
              title="Online Experiences"
              description="Unique activities we can do together, led by a world of hosts."
            />
            <Card 
              src="https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720"
              title="Unique stays"
              description="Spaces that are more than just a place to sleep."
            />
            <Card
              src="https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720"
              title="Entire homes"
              description="Confortable private place, with room for friends or family"
             />
        </div>
        <div className="home__section">
            <Card 
              src="https://a0.muscache.com/im/pictures/miso/Hosting-45076629/original/0d4e80ac-b1b4-44d1-ab2f-10c67c1e8e2a.jpeg?im_w=720"
              title="Zanzibar, Tanzania"
              description="Superhost with a stunning view of the beachside in Zanzibar"
              price="₹5567/night"
             />
            <Card 
              src="https://a0.muscache.com/im/pictures/miso/Hosting-792510074034625170/original/6a17e24d-d7c2-4bc8-ac29-7448d25adfdc.jpeg?im_w=720"
              title="London, Uk"
              description="Superhost with a stunning view of the beachside in UK"
              price="₹6784/night"
             />
            <Card 
              src="https://a0.muscache.com/im/pictures/miso/Hosting-51733196/original/c32311bf-d607-4244-a871-8d8fe23be181.jpeg?im_w=720"
              title="IIdo 1(il)-dong, jeju-si, South Korea"
              description="Superhost with a stunning view of the beachside in South"
              price="₹7845/night"
            />
        </div>
    </div>
  )
}

export default Home