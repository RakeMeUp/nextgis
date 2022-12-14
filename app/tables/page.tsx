import React from "react";

type Props = {};

const API = "idk";

const getCurrentTable = async () => {
    const res = await fetch(API);
    const tableData = await res.json();
    return tableData;
};

const Tables = (props: Props) => {
    /* Put tabledata here */
    return <div>Tables</div>;
};

export default Tables;
