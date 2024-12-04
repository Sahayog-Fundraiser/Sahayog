'use client'
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import Organization from "./organization";
import Individual from "./individual";

interface RegisterAsProps {
    user: any;
}

const RegisterAs: React.FC<RegisterAsProps> = ({ user }) => {
    const [registerAs, setRegisterAs] = useState<null | 'organization' | 'individual'>(null);
    const handleRegisterAsOrganization = () => {
        setRegisterAs('organization');
    };

    const handleRegisterAsIndividual = () => {
        setRegisterAs('individual');
        window.history.pushState(null, '', window.location.href);
    };
    return (
        <>
            {!registerAs ? (
                <>
                    <p className="poppins-thin">Are you registering as</p>
                    <button className="btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg poppins-thin" onClick={handleRegisterAsOrganization}>
                        <HiMiniUserGroup />
                        Organization
                    </button>
                    <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg poppins-thin" onClick={handleRegisterAsIndividual}>
                        <FaUser />
                        Individual
                    </button>
                </>

            ) : registerAs === 'organization' ? (
                <Organization />
            ) : (
                <Individual onBack={() => setRegisterAs(null)} user={user}/>
            )
            }
        </>
    )
}

export default RegisterAs