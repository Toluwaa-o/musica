import Single from "./Single";

export const getSingles = async () => {
  const singles = await fetch("https://musica-la8y51xuy-toluwaa-o.vercel.app/api/v1/singles");

  return singles.json();
};

const SinglesRowPage = async () => {
  const { songs: singles } = await getSingles();

  return (
    <div className="p-2">
      <h2 className="text-textWhite text-xl font-bold">Top Singles</h2>
      <div className="overflow-scroll grid grid-flow-col p-4 items-center gap-1 auto-cols-[45%] md:auto-cols-[19%]">
        {singles.map((single) => (
          <Single key={single._id} {...single} songs={singles} />
        ))}
      </div>
    </div>
  );
};
export default SinglesRowPage;
export const revalidate = 3600;
