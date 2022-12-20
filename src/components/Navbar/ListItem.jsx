import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ListItem = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${name}`);
  };
  return (
    <div onClick={handleClick} className="cursor-default">
      <p>{name}</p>
      <div className="w-[24px]">
        <div className="w-fit flex items-center">
          <BsArrowRightShort className="mr-[0px]" /> <BsArrowRightShort />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
