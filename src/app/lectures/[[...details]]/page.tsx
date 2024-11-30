export const page = ({ params }: { params: { details: string[] } }) => {
  console.log({ params });

  return (
    <>
      <h1>Lecture Detail</h1>
    </>
  );
  // if (params.details.length === 1) {
  //   return <div>Details 1 </div>;
  // } else if (params.details.length === 2) {
  //   return <div>Details 2 </div>;
  // } else if (params.details.length === 3) {
  //   return <div>Details 3 </div>;
  // } else if (params.details.length >= 4) {
  //   return notFound();
  // }
};
export default page;
