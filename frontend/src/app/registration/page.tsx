'use client'
import HeaderAndFooterLayout from "@app/shared/HOC/HeaderAndFooterLayout";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import RegisterAs from "./registerAs";

const Registration = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('google');
        }
    }, [status]);

    if (session?.user) {
        return (
            <div className="flex h-screen flex-col items-center justify-center p-4">
                <div className="w-full max-w-md bg-brand-100 shadow-xl rounded-lg p-6">
                    <div className="card-body">
                        <RegisterAs user={session.user}/>
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

export default Registration;
