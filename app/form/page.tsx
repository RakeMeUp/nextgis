"use client";
import React, { useEffect, useState } from "react";
import PasteForm from "./PasteForm";
import { Entry } from "../../Interfaces/Entry";
import clipboardToEntry from "../../utils/clipboardToEntry";
import { fetcher } from "../../utils/fetcher";

type Props = {};

function Form({}: Props) {
    const [obj, setObj] = useState([] as Entry[]);

    useEffect(() => {
        const handlePasteAnywhere = (event: any) => {
            let data = event.clipboardData.getData("text");
            try {
                let object: Entry[] = clipboardToEntry(data);

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
        await fetcher("POST", "api/entries", obj);
        setObj([]);
    };

    return (
        /* inset css bcuz nextjs puts boundaries in html that fucks with style */
        <div className="absolute inset-0">
            <div className="bg-themelightgray m-10 rounded-3xl h-2/3">
                <h2 className="text-center py-3 text-[30px] font-bold">Excel Paste</h2>
                <div className="bg-themered max-h-72 overflow-y-scroll mx-8">
                    {obj.length ? (
                        <table className="bg-themeyellow">
                            <thead>
                                <tr>
                                    {Object.keys(obj[0]).map((e) => (
                                        <th key={e}>{e}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {obj.map((e) => {
                                    return (
                                        <tr key={e.LAS} className="text-center">
                                            {Object.values(e).map((e, i) => {
                                                return <td key={i}>{e.toLocaleString()}</td>;
                                            })}
                                            <td>x</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    ) : (
                        <div>Paste Here</div>
                    )}
                </div>
                <button className="bg-themedarkgray" onClick={handleSubmit}>
                    SEND
                </button>
            </div>
        </div>
    );
}

export default Form;
