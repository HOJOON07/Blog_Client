export const ArticleDetail = ({ params }: { params: { slug: string } }) => {
  console.log(params);
  return <div>Article Details{params.slug}</div>;
};
