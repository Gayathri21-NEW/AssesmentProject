import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countrySlice";

function HomePage() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const [count, setCount] = useState(12);
  const [showAllCountries, setShowAllCountries] = useState();
  
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleLoadMore = () => {
    setShowAllCountries(!showAllCountries);
  };

  const displayedCountries = showAllCountries
    ? countries
    : countries.slice(0, 12);
 

  return (
    <div className="container">
      <div className="mt-4">
        <h4>Countries</h4>
      </div>

      <div className="justify-content-center p-4 mt-4">
        <Carousel />
      </div>
      <div className="container text-center">
        {countries && countries.length > 0 ? (
          <>
            <div className="row g-2">
              {displayedCountries.map((item) => (
                <div className="col-md-3 col-lg-6" key={item.name}>
                  <div className="d-flex align-items-center border p-3">
                    <img
                      className="small-img me-3"
                      src={item.flag}
                      alt={`${item.name} Flag`}
                      style={{ width: "40px", height: "30px" }}
                    />
                    <div className="custom-text-left">
                      <div className="fw-bold">{item.name}</div>
                      <span>{item.region}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              {countries.length > count && (
                <button
                  onClick={handleLoadMore}
                  className="btn btn-color border-color"
                >
                  {showAllCountries ? "Load less" : "Load More"}
                </button>
              )}
            </div>
            <></>
          </>
        ) : (
          <p>No Countries found</p>
        )}
      </div>
      <br />
      <div className="d-flex justify-content-center g-2 fontsize-large mt-4">
        <hr className="custom-hr" />
        &nbsp;&nbsp;
        <i class="bi bi-google icon-Size"></i>&nbsp;&nbsp;
        <i class="bi bi-facebook"></i>&nbsp;&nbsp;
        <i class="bi bi-linkedin"></i>&nbsp;&nbsp;
        <i class="bi bi-twitter"></i>&nbsp;&nbsp;
        {/* <hr> */} <hr className="custom-hr" />
      </div>
    </div>
  );
}

export default HomePage;
