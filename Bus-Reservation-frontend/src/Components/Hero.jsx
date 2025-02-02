import React from 'react'
import { Link} from "react-router-dom";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
        <div className="search-form bg-white rounded p-4 shadow">
          <h2 className="text-center mb-4">Search for Buses</h2>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="from">From</label>
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  placeholder="Enter departure location"
                />
              </div>
              <div className="col">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  className="form-control"
                  id="to"
                  placeholder="Enter destination"
                />
              </div>
            </div>
            <div className="text-center">
            <Link to='/bus-list'>
              <button type="submit" className="btn btn-success w-100">
                Search Buses
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero