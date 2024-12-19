import React from 'react'
import voca2 from "../assets/voca2.jpg";

const Vocations = () => {
  return (
    <div className="container-fluid mt-5 mb-5 p-3">
    <div className="container">
      <div className="row g-3 mt-4 mb-4">
        <div className="col-12 col-lg-6">
          <img className="visa-img img-fluid" src={voca2} alt="" />
        </div>
        <div className="col-12 col-lg-6">
          <h4 className="mb-3">Our Business Activities</h4>
          <hr className="text-warning" />
          <ul>
            <li> Transportation, Export and Import, Sightseeing, Ticketing, Hotel Management and Hospitality,</li>
            <li>vocational training and skills acquization, sports center, footballing and player management  </li>
            <li>Properties, estates developer and management, building and civil engineering.</li>
            <li>Culture and Heritage, Farming, Agriculture and empowerment</li>
            <li>ITC, Conference and Meeting organizing, Event Management and Planning, Vocation and Excursion. </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  )
}

export default Vocations