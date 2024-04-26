import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListItem = ({ name }) => {
  return (
    <Link to={`/${name}`} className="cursor-default">
      <p>{name}</p>
      <div className="w-[24px]">
        <div className="w-fit flex items-center">
          <BsArrowRightShort className="mr-[0px]" /> <BsArrowRightShort />
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
