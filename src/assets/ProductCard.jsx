
const ProductCard = () => {
    // const [{name, price, description, image}] = products;

  return (
  <section>
    <h1 className="text-center uppercase text-4xl mt-5 text-blue-900">Meet the team</h1>
   <div className="grid grid-cols-3 gap-4 pl-5 pr-5 mt-5 mb-5">
   <div className="card card-side bg-base-100 shadow-xl w-[100%] pb-5 pt-5">
      <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708359828/customer_qsocih.jpg" alt="Movie" width={280} className="rounded-full"/>
      <div className="card-body items-center">
          <h2 className="card-title uppercase">James Everton</h2>
          <p>Customer Representative</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    <div className="card card-side bg-base-100 shadow-xl w-[100%] pb-5 pt-5">
        <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708360612/heis_ivzx3n.jpg" alt="Movie" width={280} className="rounded-full"/>
      <div className="card-body items-center">
          <h2 className="card-title uppercase">Hubert Lawrence</h2>
          <p>Procurement Manager</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    <div className="card card-side bg-base-100 shadow-xl w-[100%] pb-5 pt-5">
        <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708360104/cla_rweohd.jpg"  alt="Movie" width={280} className="rounded-full" />
      <div className="card-body items-center">
          <h2 className="card-title uppercase">Claire O.Dwyer</h2>
          <p>WareHouse Manager</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    <div className="card card-side bg-base-100 shadow-sm w-[100%]">
        <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708360068/nat_hmml0d.jpg"  alt="Movie" width={280} className="rounded-full" />
      <div className="card-body items-center">
          <h2 className="card-title uppercase">Vanessa Hudings</h2>
          <p>Logistics Coordinator</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    <div className="card card-side bg-base-100 shadow-xl w-[100%] pb-5 pt-5">
        <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708360604/coll_cl68nf.jpg"  alt="Movie" width={280}className="rounded-full"/>
      <div className="card-body items-center">
          <h2 className="card-title uppercase">Michael Blatman</h2>
          <p>Logistics Engineer</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    <div className="card card-side bg-base-100 shadow-xl w-[100%] pb-5 pt-5">
        <img src="https://res.cloudinary.com/dhwqlht1d/image/upload/v1708360597/ama_pxxrll.webp" alt="Movie" width={280} className="rounded-full"/>
      <div className="card-body items-center">
          <h2 className="card-title uppercase">Megan dixon</h2>
          <p>Customs Broker</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See More</button>
      </div>
      </div>
    </div>

    


   </div>
  </section>
  )
}

export default ProductCard

// import { users } from '../Product'

// const ProductCard = () => {
//   return (
//     <div>
//         <div className="item">
//             <p>UserName: {users.username}</p>
//             <p>Fullname: {users.fullName}</p>
//             <p>Age: {users.age}</p>
//             <p>email: {users.email}</p>
//             <p>Address: {users.address}</p>


//             <button  className="bg-green-400">
//                     Click Me</button>
//           </div>
//     </div>
//   )
// }

// export default ProductCard