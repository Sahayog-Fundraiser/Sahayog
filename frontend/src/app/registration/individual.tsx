'use client'
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { getFirstName, getLastName } from '../../utils/userUtils'
import Password from "@app/components/Information/password";
import Date from "@app/components/Information/date";
import PhoneNo from "@app/components/Information/PhoneNo";
interface IndividualProps {
    onBack: () => void;
    user: any;
}

const Individual: React.FC<IndividualProps> = ({ onBack, user }) => {
    

    useEffect(() => {
        const handlePopState = () => {
            onBack();
        };
        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [onBack]);
    return (
        <>
            <h2 className="poppins-thin card-title text-center text-black">Please fill in your information</h2>
            <div className="join">
                <label className="poppins-thin">
                    {user.email}
                </label>
            </div>
            <div className="flex flex-col gap-4">
                <label className="input input-success bg-brand-100 flex items-center gap-4 p-2 rounded-md">
                    <input type="text"
                        className="poppins-thin grow border-none outline-none bg-transparent text-black"
                        placeholder="First Name*"
                        defaultValue={getFirstName(user.name)}
                    />
                </label>
                <label className="input input-success bg-brand-100 flex items-center gap-4 p-2 rounded-md text-black">
                    <input
                        type="text"
                        className="grow border-none outline-none bg-transparent poppins-thin"
                        placeholder="Last Name*"
                        defaultValue={getLastName(user.name)}
                    />
                </label>
                <p className="poppins-medium">
                    Date of Birth (A.D)
                </p>
                <Date/>
                <Password/>
                <PhoneNo/>
            </div>
            <div className="flex justify-between mt-4">
                <button className="btn btn-success btn-outline flex items-center poppins-thin" onClick={onBack}>
                    <IoMdArrowRoundBack className="mr-2" />
                    Back
                </button>
                <button className="btn btn-success btn-outline flex items-center poppins-thin">
                    Next
                    <IoMdArrowRoundForward className="ml-2" />
                </button>
            </div>
        </>
    )
}
export default Individual