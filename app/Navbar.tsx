import Link from "next/link";
import { MdHome, MdBackupTable } from "react-icons/md";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="pt-5 px-5 flex flex-col gap-5">
            <Link
                className={"bg-themelightgray btn-shadow w-16 h-16 text-themedarkgray rounded-full"}
                href={"/"}
            >
                <MdHome className="h-full w-full p-[10px]" />
            </Link>
            <Link
                className={"bg-themelightgray btn-shadow w-16 h-16 text-themedarkgray rounded-full"}
                href={"/tables"}
            >
                <MdBackupTable className="h-full w-full p-[10px]" />
            </Link>
            <Link
                className={"bg-themelightgray btn-shadow w-16 h-16 text-themedarkgray rounded-full"}
                href={"/form"}
            >
                <MdBackupTable className="h-full w-full p-[10px]" />
            </Link>
        </nav>
    );
};

export default Navbar;
