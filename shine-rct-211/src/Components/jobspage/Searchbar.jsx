import React, { useState } from "react";
import AdvanceSearching from "./AdvanceSearching";

import styles from "./Jobspage.module.css";

function SearchBar() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "#f4f5f5",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
    >
      {isAuth ? (
        <AdvanceSearching setIsAuth={setIsAuth} />
      ) : (
        <>
          <div
            onClick={() => {
              setIsAuth(true);
            }}
            style={{
              width: "880px",
              backgroundColor: "#fff",
              margin: "auto",
              marginBottom: "5px",
              height: "38px",
              border: "1px solid #e7e7e7",
              paddingLeft: "15px",
            }}
          >
            <input
              type="text"
              placeholder="Enter keyword"
              style={{ border: "0px", marginTop: "10px" }}
            />
            <div className={styles.blacksearch}></div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchBar;