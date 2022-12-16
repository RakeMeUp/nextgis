"use client";
import useSWR from "swr";
import React from "react";
import { fetcher } from "../api/fetcher";
import "react-toastify/dist/ReactToastify.css";

type Props = {};

const Home = (props: Props) => {
    const { data, error } = useSWR("/api/entries/minutes", (url) => fetcher(url));
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return <div className="text-red-600">{+data}</div>;
};

export default Home;
