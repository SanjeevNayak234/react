import React from "react";

function footer() {
  const currentyear = newDate().getFullYear();
  return (
    <footer>
      <p>copyright @ {currentyear}</p>
    </footer>
  );
}
export default footer;
