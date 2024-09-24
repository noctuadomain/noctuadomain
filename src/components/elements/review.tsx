import React from 'react';

import { ClassProps } from '@/ts/interfaces';
import { cn } from '@/lib/utils';

const Review: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('w-[1320px] h-[420px]', className)}>
      <div className="review-outer-gradient p-10 rounded-[20px] border border-solid border-[#161A2F]">
        <div className="review-inner-gradient p-10 rounded-[20px] border border-solid border-[#26293C]">
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds
          123gjfdaghfdajklsgfdahjlkgfdashjlkgfdalkjhgdfalkgdfajhkgdfashjlkagdlfjkfsdfsdfdsfsdfds

        </div>
      </div>
    </div>
  );
};

export default Review;
