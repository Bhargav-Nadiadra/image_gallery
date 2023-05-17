import React, { useState, useEffect } from "react";
import { FiEye, FiDownload } from "react-icons/fi";
import mainData from "../data/mainData";
import "./search.css";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [noOfElements, setNoOfElements] = useState(6);
  const [isSearchBarFixed, setIsSearchBarFixed] = useState(false);

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = mainData.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const slicedData = dataSearch.slice(0, noOfElements);

  const loadMore = () => {
    setNoOfElements(noOfElements + 3);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSearchBarFixed(scrollTop > 75);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-10 mx-auto text-center">
            <label className="form-lable h4">Search images</label>
            <div
              className={`${
                isSearchBarFixed ? "searchbar fixed" : "searchbar"
              }`}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={filter}
                onChange={searchText}
              />
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {slicedData.map((item, index) => {
            return <ImageCard key={index} item={item} />;
          })}
        </div>

        {dataSearch.length > noOfElements && (
          <button
            className="btn btn-dark d-block w-50 mx-auto mt-3"
            onClick={loadMore}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
};

const ImageCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = item.img;
    link.download = "image.jpg";
    link.click();
  };

  const handleViewFullscreen = () => {
    window.open(item.img, "_blank", "fullscreen=yes");
  };

  return (
    <div className="col">
      <div
        className={`card p-0 overflow-hidden h-100 shadow ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={item.img} download>
          <img src={item.img} alt="image1" className="card-img-top" />
          {isHovered && <div className="overlay"></div>}
        </a>
        {isHovered && (
          <div className="card-overlay">
            <div className="btn-group">
              <button
                className="btn btn-primary btn-lg m-2 rounded-circle"
                onClick={handleViewFullscreen}
              >
                <FiEye />
              </button>
              <button
                className="btn btn-secondary btn-lg m-2 rounded-circle"
                onClick={handleDownload}
              >
                <FiDownload />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
