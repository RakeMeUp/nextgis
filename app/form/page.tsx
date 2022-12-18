"use client";
import React, { useEffect, useState } from "react";
import { Entry } from "../../Interfaces/Entry";
import clipboardToEntry from "../../utils/clipboardToEntry";
import Table from "./Table";
import { poster } from "../../api/poster";
import { useSession } from "next-auth/react";
import { showError } from "../../utils/showError";
import { toast } from "react-toastify";

type Props = {};

function Form({}: Props) {
    const { data: session } = useSession();

    const [entryArray, setEntryArray] = useState<Entry[]>([]);

    useEffect(() => {
        const handlePasteAnywhere = (event: any) => {
            let data = event.clipboardData.getData("text");
            try {
                let object: Entry[] = clipboardToEntry(data, session?.user.idToken!);
                console.log(object);

                setEntryArray(object);
            } catch (e) {
                showError();
                console.log(e);
            }
        };

        window.addEventListener("paste", handlePasteAnywhere);

        return () => {
            window.removeEventListener("paste", handlePasteAnywhere);
        };
    }, [session]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const err = await poster("POST", "api/entries", entryArray);
        if (err) {
            showError("Error happened while sending, Try Again");
        } else {
            toast("Success", {
                type: "success",
            });
            setEntryArray([]);
        }
    };

    const handleRemove = (start: Date) => {
        setEntryArray((prev) => prev.filter(({ data }) => data.Start !== start));
    };

    return (
        /* inset css bcuz nextjs puts boundaries in html that fucks with style */
        <div className="absolute inset-0">
            <form className="bg-themelightgray btn-shadow flex flex-col m-10 rounded-3xl h-2/3">
                {session ? (
                    <>
                        <h2 className="text-center py-3 text-[30px] font-bold">Excel Paste</h2>
                        <div className="max-h-[80%] rounded-3xl overflow-scroll scrollbar-hide w-fit mx-auto">
                            {entryArray.length ? (
                                <Table handleRemove={handleRemove} entryArray={entryArray} />
                            ) : (
                                <div className="p-28 text-xl md:p-52 bg-themedarkgray text-themelightgray">
                                    Paste Here
                                </div>
                            )}
                        </div>

                        <button
                            disabled={entryArray.length === 0}
                            onClick={handleSubmit}
                            className="border-themedarkgray w-fit mx-auto my-10 border-2 px-4 py-1 rounded-full hover:bg-themedarkgray hover:text-themelightgray active:bg-themelightgray active:text-themedarkgray disabled:hidden"
                        >
                            Send Data
                        </button>
                    </>
                ) : (
                    <div>Log in to user</div>
                )}
            </form>
        </div>
    );
}

export default Form;
