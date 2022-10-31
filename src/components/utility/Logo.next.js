import React from 'react';
import Link from 'next/link';
import siteConfig from '@iso/config/site.config';
import NarSoftLogo from '@iso/assets/images/narlogo.png';

export default function({ collapsed }) {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <i className={siteConfig.siteIcon} />
          </h3>
        </div>
      ) : (
        <h3>
          <Link href="/dashboard">
            <a>{siteConfig.siteName}</a>
            <img
                src={NarSoftLogo}
                alt="Logo"
                width={400}
                height={100}
              />
          </Link>
        </h3>
      )}
    </div>
  );
}
