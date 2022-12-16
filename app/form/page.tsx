"use client";
import React, { useEffect, useState } from "react";
import { Entry } from "../../Interfaces/Entry";
import clipboardToEntry from "../../utils/clipboardToEntry";
import Table from "./Table";
import { poster } from "../../api/poster";
import { toast } from "react-toastify";

type Props = {};

function Form({}: Props) {
    const [obj, setObj] = useState<Entry[]>([]);

    useEffect(() => {
        const handlePasteAnywhere = (event: any) => {
            let data = event.clipboardData.getData("text");
            try {
                let object: Entry[] = clipboardToEntry(data);
                console.log(object);

                setObj(object);
            } catch (e) {
                console.log(e);
            }
        };

        window.addEventListener("paste", handlePasteAnywhere);

        return () => {
            window.removeEventListener("paste", handlePasteAnywhere);
        };
    }, []);

    const handleSubmit = async () => {
        const err = await poster("POST", "api/entries", obj);
        if (err) {
            toast("Error happened while sending, Try Again", {
                hideProgressBar: true,
                autoClose: 5000,
                type: "error",
            });
        } else {
            toast("Success", {
                hideProgressBar: false,
                autoClose: 2000,
                type: "success",
            });
            setObj([]);
        }
    };

    const handleRemove = (start: Date) => {
        setObj((prev) => prev.filter((e) => e.Start !== start));
    };

    return (
        /* inset css bcuz nextjs puts boundaries in html that fucks with style */
        <div className="absolute inset-0">
            <div className="bg-themelightgray btn-shadow flex flex-col m-10 rounded-3xl h-2/3">
                <h2 className="text-center py-3 text-[30px] font-bold">Excel Paste</h2>
                <div className="max-h-[80%] rounded-3xl overflow-scroll scrollbar-hide w-fit mx-auto">
                    {obj.length ? (
                        <Table handleRemove={handleRemove} obj={obj} />
                    ) : (
                        <div className="p-28 text-xl md:p-52 bg-themedarkgray text-themelightgray">
                            Paste Here
                        </div>
                    )}
                </div>

                <button
                    disabled={obj.length === 0}
                    onClick={handleSubmit}
                    className="border-themedarkgray w-fit mx-auto my-10 border-2 px-4 py-1 rounded-full hover:bg-themedarkgray hover:text-themelightgray active:bg-themelightgray active:text-themedarkgray disabled:hidden"
                >
                    Send Data
                </button>
            </div>
        </div>
    );
}

export default Form;
