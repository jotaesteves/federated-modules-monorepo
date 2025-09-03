import type React from 'react';
import './Footer.css';
import { FooterTags } from './components';
import { useNavigationHistory } from './hooks';
import { useTheme } from './store/microFrontendStore';
import type { FooterTag } from './types';

interface FooterProps {
  customTags?: FooterTag[];
  useHistory?: boolean;
}

const Footer: React.FC<FooterProps> = ({ customTags, useHistory = true }) => {
  const { theme } = useTheme();
  const { historyTags, excludePageFromHistory } = useNavigationHistory();

  const tagsToUse = customTags || (useHistory && historyTags.length > 0 ? historyTags : undefined);

  return (
    <footer className={`footer ml-[106px] ${theme} min-h-[107px]`}>
      <FooterTags tags={tagsToUse} onTagClose={useHistory ? excludePageFromHistory : undefined} />
      <div className="footer-chat">
        <button
          type="button"
          className="footer-chat-button"
          onClick={() => {
            // TODO: Handle chat button click logic here
            console.log('Chat button clicked');
          }}
          aria-label="Open chat"
        >
          💬 Go<span style={{ fontWeight: 'bold' }}>IZI</span>
        </button>
      </div>
    </footer>
  );
};
export default Footer;
