'use client';

import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { TypingWords } from '../model/TypingWords';

export const TypingEffect = ({
  className,
  cursorClassName,
}: {
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters

  const wordsArray = TypingWords.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <Fragment key={`word-${idx}`}>
              <div className="inline-block">
                {word.text.map((char, index) => (
                  <span
                    key={`char-${index}`}
                    className={cn(
                      `dark:text-white text-black `,
                      word.className,
                    )}
                  >
                    {char}
                  </span>
                ))}
                &nbsp;
              </div>
              {idx === 3 ? <br /> : null}
            </Fragment>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn('flex space-x-1 my-5', className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 3,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-4xl font-bold leading-10"
          style={{
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500',
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
