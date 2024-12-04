import { useState, useRef, useEffect } from 'react';
import { signOut } from "next-auth/react";
import Image from 'next/image';
import downArrow from '../assets/icons/downArrow.svg';
import { MdLogout } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const UserMenu: React.FC = () => {
    const [isRotated, setIsRotated] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsRotated(false); // Reset arrow to original position
                setIsMenuOpen(false); // Close menu
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setIsRotated(prev => !prev);
        setIsMenuOpen(prev => !prev);
    };

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    return (
        <div className="dropdown dropdown-bottom dropdown-left" ref={dropdownRef}>
            <button
                className={`poppins-thin btn btn-circle btn-ghost text-black ${isRotated ? 'rotate-180' : ''}`}
                onClick={handleButtonClick}
            >
                <Image
                    src={downArrow}
                    alt={'D'}
                    height={15}
                    width={15}
                    className="rounded-full"
                />
            </button>
            {isMenuOpen && (
                <ul tabIndex={0} className="poppins-medium dropdown-content z-[1] menu p-4 shadow bg-brand-100 rounded-box w-52 darker-shadow">
                    <li><a href="/"><IoHome/> Home</a></li>
                    <li><a href="/profile"> <FaUser/> Profile</a></li>
                    <li><a className="text-error" onClick={handleLogout}>
                    <MdLogout/>Log Out</a></li>
                </ul>
            )}
        </div>
    );
};

export default UserMenu;
