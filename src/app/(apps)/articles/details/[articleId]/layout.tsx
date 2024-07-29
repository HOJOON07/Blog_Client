import React from 'react';

export default function ArticleDetailsLayout({
  children,
  author,
  comments,
}: {
  children: React.ReactNode;
  author: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr_380px]">
      {children}
      {author}
      {comments}
    </div>
  );
}
