import type React from 'react';
import { useNavigation } from '../store/microFrontendStore';
import type { FooterTag, FooterTagsProps } from '../types';

const FooterTags: React.FC<FooterTagsProps> = ({ tags, onTagClose }) => {
  const { currentPage, navigateTo } = useNavigation();

  // Default tags if none provided
  const defaultTags: FooterTag[] = [{ id: 'default-home', label: 'Root Example', page: 'home' }];

  // Use provided tags, or default tags if no tags provided
  const tagsToDisplay = tags && tags.length > 0 ? tags : defaultTags;

  const handleFooterNavClick = (page: string, event: React.MouseEvent) => {
    event.preventDefault();
    navigateTo(page);
  };

  const handleTagClose = (event: React.MouseEvent, tag: FooterTag) => {
    event.stopPropagation();

    // Call the onTagClose callback for all tags that can be closed
    // Note: Closed history tags can be re-added by navigating to them again
    if (onTagClose) {
      onTagClose(tag.page);
    }
  };

  return (
    <div className="footer-tags">
      {tagsToDisplay.map((tag, index) => (
        <button
          key={tag.id}
          className={`footer-tag ${currentPage === tag.page ? 'active' : ''} ${
            tag.isFromHistory ? 'history-tag' : ''
          }`}
          onClick={(e) => handleFooterNavClick(tag.page, e as React.MouseEvent)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleFooterNavClick(tag.page, e as unknown as React.MouseEvent);
            }
          }}
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: index < tagsToDisplay.length - 1 ? '8px' : '0',
            background: 'none',
            border: 'none',
            color: 'inherit',
            font: 'inherit',
            padding: 0
          }}
          title={tag.isFromHistory ? `From navigation history: ${tag.label}` : tag.label}
        >
          {tag.isFromHistory && <span style={{ marginRight: '4px', opacity: 0.7 }}>🕒</span>}
          {tag.label}
          {/* Show close button only for history tags */}
          {tag.isFromHistory && (
            <button
              className="footer-tag-close"
              onClick={(e) => handleTagClose(e, tag)}
              aria-label={`Close ${tag.label} tag`}
              type="button"
              style={{
                marginLeft: '8px',
                fontSize: '14px',
                opacity: 0.7,
                padding: '0 2px'
              }}
            >
              ×
            </button>
          )}
        </button>
      ))}
    </div>
  );
};

export default FooterTags;
