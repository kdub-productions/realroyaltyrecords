"use client";
import Image from 'next/image';

const Header = () => {
  return (
      <header>
        <Image className='real-royalty-records-logo'
          src="/assets/logo-comps/Real Royalty Records logo-OFFICIAL-1.png"
          alt="Real Royalty Records"
          width={144} // Set the width
          height={144} // Set the height
        />
        <h1 className="real-royalty-records-title">
          Real Royalty Records
        </h1>
      </header>
  );
};

export default Header;
