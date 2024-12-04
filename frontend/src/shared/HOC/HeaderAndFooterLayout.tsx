import React from 'react';

import Footer from '@app/components/Footer/footer';
import Navbar from '@app/components/Header/navbar';

const HeaderAndFooterLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{
                color: 'black',
                background: 'linear-gradient(to bottom, white, #b2f5ea)'
            }}
            className="flex min-h-screen flex-col justify-between"
        >
            <div className="h-full w-full">
                <Navbar />
                {children}
            </div>
            <div className="mt-4 h-full w-full">
                <Footer />
            </div>
        </div>
    );
};

export default HeaderAndFooterLayout;
