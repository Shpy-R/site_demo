import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [sysInfo, setSysInfo] = useState('');

    useEffect(() => {
        const info = navigator.userAgent;
        localStorage.setItem('userSystem', info);
        setSysInfo(info);
    }, []);

    return (
        <footer className="text-[10px] pt-5 border-t-2 border-black">
            <p>Ваша система: {sysInfo}</p>
        </footer>
    );
};

export default Footer;