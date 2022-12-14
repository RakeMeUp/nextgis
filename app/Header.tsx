import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <header className="grid-header flex items-center select-none text-themelightgray px-[30px] justify-between">
            <h1 className="text-[42px]">Title</h1>
            <h2>Page Name</h2>
            <button className="border-themelightgray border-2 px-4 py-1 rounded-full hover:bg-themelightgray hover:text-themedarkgray">
                Log in
            </button>
        </header>
    );
};

export default Header;
