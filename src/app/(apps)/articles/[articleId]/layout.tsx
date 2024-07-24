import React from 'react';

export default function ArticleDetailsLayout({
  children,
  author,
}: {
  children: React.ReactNode;
  author: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr_380px]">
      {children}
      {author}
    </div>
  );
}
