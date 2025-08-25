"use client";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={(e) => { e.stopPropagation(); onClick(); }} className="button">
      {children}
    </button>
  );
};

export default Button;