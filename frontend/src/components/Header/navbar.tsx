import Link from 'next/link';

import Login from '../login';

const Navbar = () => {
    return (
        <nav className="flex justify-between rounded-b-lg bg-brand-100 p-4 shadow-lg">
            <div className="flex-1">
                <Link href="/" passHref>
                    <span className="poppins-thin cursor-pointer text-xl text-green-800">
                        SAHAYOG 🌱
                    </span>
                </Link>
            </div>
            <div className="flex-none">
                <Login />
            </div>
        </nav>
    );
};

export default Navbar;
