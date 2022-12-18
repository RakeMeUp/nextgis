"use client";
import useSWR from "swr";
import React from "react";
import { fetcher } from "../api/fetcher";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { showError } from "../utils/showError";

type Props = {};

const Home = (props: Props) => {
    const { data: session } = useSession();
    const { data, error } = useSWR(`/api/entries/minutes?userId=${session?.user.idToken}`, (url) =>
        fetcher(url)
    );

    if (error) showError();
    return (
        <div className="absolute inset-0">
            <div className="bg-themelightgray btn-shadow m-10 rounded-3xl h-2/3">
                {session ? data ? +data : <div>Loading...</div> : <div>Log in to use</div>}
            </div>
        </div>
    );
};

export default Home;
