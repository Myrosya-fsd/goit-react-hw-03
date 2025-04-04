import React from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <label className={styles.label}>
        Find contacts by name:
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
          placeholder="Search..."
        />
      </label>
    </div>
  );
}

export default SearchBox;
