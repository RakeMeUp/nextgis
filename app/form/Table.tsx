import { MdDeleteForever } from "react-icons/md";
import { Entry } from "../../Interfaces/Entry";

type Props = {
    obj: Entry[];
    handleRemove: (start: Date) => void;
};

function Table({ obj, handleRemove }: Props) {
    return (
        <table className="bg-themedarkgray text-themelightgray relative text-sm md:text-base min-h-[300px]">
            <thead className=" bg-themedarkgray text-themelightgray sticky top-0 left-0 right-0">
                <th>Project</th>
                <th>Area</th>
                <th>LAS</th>
                <th>Operator</th>
                <th>Start</th>
                <th>End</th>
                <th></th>
            </thead>
            <tbody>
                {obj.map((e) => {
                    return (
                        <tr key={e.LAS} className="text-center odd:bg-black">
                            {Object.values(e).map((e, i) => {
                                if (e instanceof Date)
                                    return (
                                        <td className="px-2 max-w-[120px]" key={i}>
                                            {e.toLocaleTimeString().slice(0, -3)}
                                        </td>
                                    );
                                if (i === 2)
                                    return (
                                        <td className="px-2 max-w-[120px]" key={i}>
                                            {e.slice(0, -4)}
                                        </td>
                                    );
                                return (
                                    <td className="px-2 " key={i}>
                                        {e}
                                    </td>
                                );
                            })}
                            <td className="w-14 px-2">
                                <button
                                    onClick={() => handleRemove(e.Start)}
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
