import { MdDeleteForever } from "react-icons/md";
import { Entry } from "../../Interfaces/Entry";

type Props = {
    entryArray: Entry[];
    handleRemove: (start: Date) => void;
};

function Table({ entryArray, handleRemove }: Props) {
    return (
        <table className="bg-themedarkgray text-themelightgray relative text-sm md:text-base lg:text-lg min-h-[300px]">
            <thead className=" bg-themedarkgray text-themelightgray sticky top-0 left-0 right-0">
                <tr>
                    <th>Project</th>
                    <th>Area</th>
                    <th>LAS</th>
                    <th>Operator</th>
                    <th>Start</th>
                    <th>End</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {entryArray.map((entry) => {
                    return (
                        <tr key={entry.data.LAS} className="text-center odd:bg-black">
                            {Object.values(entry.data).map((value, i) => {
                                if (value instanceof Date)
                                    return (
                                        <td className="px-2 lg:px-8 max-w-[120px]" key={i}>
                                            {value.toLocaleTimeString().slice(0, -3)}
                                        </td>
                                    );
                                if (i === 2)
                                    return (
                                        <td className="px-2 lg:px-8" key={i}>
                                            {value.slice(0, -4)}
                                        </td>
                                    );
                                return (
                                    <td className="px-2 lg:px-8" key={i}>
                                        {value}
                                    </td>
                                );
                            })}
                            <td className="w-14 px-2 ">
                                <button
                                    onClick={() => handleRemove(entry.data.Start)}
                                    className="rounded-full w-full h-full"
                                >
                                    <MdDeleteForever className="text-themered w-full h-full p-1" />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
