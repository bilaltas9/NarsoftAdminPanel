import React from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '@iso/config/site.config';
import NarSoftLogo from '@iso/assets/images/narlogo.png';

export default ({ collapsed }) => {
  return (
    <div className="isoLogoWrapper">
      {collapsed ? (
        <div>
          <h3>
            <Link to="/dashboard">
              <i className={siteConfig.siteIcon} />
              
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link to="/dashboard">{siteConfig.siteName}</Link>
          <img
                src={NarSoftLogo}
                alt="Logo"
                width={400}
                height={100}
              />
        </h3>
      )}
    </div>
  );
};
