import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

const Header = (props: Props) => {
    const { data: session } = useSession();

    return (
        <header className="grid-header flex items-center select-none text-themelightgray px-[30px] justify-between">
            <h1 className="text-[42px]">GIS Logger</h1>
            <h2>Page Name</h2>
            <Popover className="relative z-50">
                {() => (
                    <>
                        <Popover.Button className="border-themelightgray border-2 px-4 py-1 rounded-full hover:bg-themelightgray hover:text-themedarkgray">
                            <span>{session ? session.user?.name : "Login"}</span>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute mt-1 rounded-xl btn-shadow right-0 flex whitespace-nowrap gap-5 p-10
                             bg-themedarkgray border-2 border-solid border-themelightgray "
                            >
                                {session ? (
                                    <>
                                        <button onClick={() => signOut()}>logout</button>
                                    </>
                                ) : (
                                    <button onClick={() => signIn()}>Log In with Google</button>
                                )}
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </header>
    );
};

export default Header;
