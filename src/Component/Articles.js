import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import "../Component/Articles.css";

const Articles = () => {
  const [profile, setProfile] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setLoader(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setLoader(false);
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div>
      {loader ? (
        Array(20)
          .fill()
          .map((_, index) => <SkeletonLoader key={index} />)
      ) : (
        <>
          {profile.map((data) => (
            <div className="article" key={data.id}>
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Articles;
