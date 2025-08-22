import React from 'react';
import type { FooterTag } from '../types';

const FooterTags: React.FC = () => {
  const handleFooterNavClick = (page: string, event: React.MouseEvent) => {
    event.preventDefault();
    console.log('Footer tag clicked:', page);
  };

  const handleTagClose = (event: React.MouseEvent, page: string) => {
    event.stopPropagation();
    console.log('Removing from history:', page);
  };

  return (
    <div className="footer-tags flex flex-wrap gap-2 items-center">
      {/* {historyTags.map((tag) => (
      <span
        key={tag.id}
        className={`footer-tag px-3 py-1 rounded-md text-sm ${
          currentPage === tag.page
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } history-tag flex items-center transition-colors`}
        onClick={(e) => handleFooterNavClick(tag.page, e as React.MouseEvent)}
        style={{ cursor: 'pointer' }}
        title={`Navigate to: ${tag.label}`}
      >
        {tag.label}
        <button
          className="footer-tag-close ml-2 hover:bg-gray-400 hover:text-white rounded-full w-5 h-5 flex items-center justify-center transition-colors"
          onClick={(e) => handleTagClose(e, tag.page)}
          aria-label={`Close ${tag.label} tag`}
          type="button"
        >
          ×
        </button>
      </span>
      {/* ))} */}
    </div>
  );
};

export default FooterTags;
