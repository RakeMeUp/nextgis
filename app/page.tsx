"use client";
import useSWR from "swr";
import React from "react";
import { fetcher } from "../api/fetcher";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

type Props = {};

const Home = (props: Props) => {
    const { data, error } = useSWR("/api/entries/minutes", (url) => fetcher(url));
    if (error)
        toast("Error occurec while fetching data, refresh page.", {
            hideProgressBar: true,
            autoClose: 5000,
            type: "error",
        });
    if (!data) return <div>Loading...</div>;
    return (
        <div className="absolute inset-0">
            <div className="bg-themelightgray btn-shadow m-10 rounded-3xl h-2/3">{+data}</div>
        </div>
    );
};

export default Home;
