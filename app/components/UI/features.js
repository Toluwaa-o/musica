"use client";

const formatFeatures = (artist, features, small) => {
  if (!features.length) return <span>{artist}</span>;

  if (small && features.join(", ").length > 6)
    return (
      <>
        <marquee className="md:hidden" width={250} truespeed={500}>
          <span className="text-textWhite text-base">{`${artist} ft ${features.join(
            ", "
          )}`}</span>
        </marquee>
        <span className="text-textWhite text-base hidden md:block">{`${artist} ft ${features.join(
          ", "
        )}`}</span>
      </>
    );

  if (features.join(", ").length > 15)
    return (
      <>
        <marquee className="md:hidden" width={150} truespeed={500}>
          <span>{`${artist} ft ${features.join(", ")}`}</span>
        </marquee>
        <span className="text-textWhite text-base hidden md:block">{`${artist} ft ${features.join(
          ", "
        )}`}</span>
      </>
    );

  return <span>{`${artist} ft ${features.join(", ")}`}</span>;
};

export default formatFeatures;
