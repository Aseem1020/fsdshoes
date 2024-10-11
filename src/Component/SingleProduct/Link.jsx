import React from 'react';
            import "./Link.scss";
            import { Instagram, LinkedIn, WhatsApp } from '@mui/icons-material';
            import { BiCopy } from 'react-icons/bi';
            import {CopyToClipboard} from 'react-copy-to-clipboard';
            
            const Link = () => {
            
            
              const shareToWhatsApp = () => {
                const url = 'https://api.whatsapp.com/send?text=%27$%27{encodeURIComponent(%27Check%20this%20out!%20%27%20+%20window.location.href)';
                window.open(url, '_blank');
                
              }
            
            
            
              const shareToLinkedIn = () => {
                const url = 'https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=%27%24%27%7BencodeURIComponent(window.location.href)%7D';
                window.open(url, '_blank');
              }
            
              const shareToInstagram = () => {
                alert('Instagram sharing is not directly supported.');
              }
            
            
            
              return (
                <div className="shareme">
                  <span onClick={shareToWhatsApp}><WhatsApp  /></span>
                  <span onClick={shareToLinkedIn}><LinkedIn /></span>
                  <span onClick={shareToInstagram}><Instagram/></span>
                  <CopyToClipboard text={window.location.href}>
                  <span><BiCopy/></span>
                  </CopyToClipboard>
                </div>
              );
            }
            
            export default Link;
            