import React from "react";

const Restaurant = () => {
  return (
    <div className="restaurant bg-[tomato] h-[100vh] w-screen relative">
      <div className="h-[100vh] bg-green-500 w-full overflow-x-scroll sticky top-0">
        <div className="flex w-fit">
          <div className="side bg-[red]"></div>
          <div className="side bg-[blue]"></div>
          <div className="side bg-[green]"></div>
          <div className="side bg-[yellow]"></div>
          <div className="side bg-[chocolate]"></div>
          <div className="side bg-[aqua]"></div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
