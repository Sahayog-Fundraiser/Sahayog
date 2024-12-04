'use client';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import HeaderAndFooterLayout from '@app/shared/HOC/HeaderAndFooterLayout';
import { FaUser } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaPiggyBank } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const ProfilePage = () => {
    const { data: session, status } = useSession();
    const [activeItem, setActiveItem] = useState('Public Profile');

    const handleItemClick = (item: string) => {
        setActiveItem(item);
    };

    useEffect(() => {
        if (status === 'unauthenticated') {
            signIn('google');
        }
    }, [status]);

    if (session?.user) {
        return (
            <HeaderAndFooterLayout>
                &nbsp;
                <div className="flex w-20 h-100 flex-col items-left justify-center gap-4">
                    <div className="flex items-center min-w-[300px] bg-brand-100 flex-col gap-4 rounded-lg px-5 py-4 drop-shadow-lg">
                        <div>
                            <Image
                                src={session?.user?.image || ''}
                                alt={session?.user?.name || ''}
                                className="rounded-full"
                                height={100}
                                width={100}
                            />
                        </div>
                        <span className="poppins-medium">{session?.user?.name || ''}</span>
                    </div>
                    <div className="flex min-w-[300px] bg-brand-100 flex-col gap-4 rounded-lg px-5 py-4 drop-shadow-lg">
                        <ul className="menu bg-brand-100 poppins-medium w-56 rounded-box">
                            <li>
                                <a
                                    className={`${activeItem === 'Public Profile' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Public Profile')}
                                >
                                    <FaUser/> 
                                    Public Profile
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a
                                    className={`${activeItem === 'Donations' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Donations')}
                                >
                                    <BiSolidDonateHeart/>
                                    Donations
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a
                                    className={`${activeItem === 'Funds' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Funds')}
                                >
                                    <FaPiggyBank/>
                                    Funds
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a
                                    className={`${activeItem === 'Your Blogs' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Your Blogs')}
                                >
                                    <FaPenNib/>
                                    Your Blogs
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a
                                    className={`${activeItem === 'Saved Blogs' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Saved Blogs')}
                                >
                                    <FaStar/>
                                    Saved Blogs
                                </a>
                            </li>
                            &nbsp;
                            <li>
                                <a
                                    className={`${activeItem === 'Notifications' ? 'bg-brand-200 hover:bg-brand-300' : ''}`}
                                    onClick={() => handleItemClick('Notifications')}
                                >
                                    <IoMdNotifications/>
                                    Notifications
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </HeaderAndFooterLayout>
        );
    }

    return null;
};

export default ProfilePage;
