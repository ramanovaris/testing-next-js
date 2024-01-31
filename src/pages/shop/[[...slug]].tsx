import { useRouter } from "next/router";

const ShopePage = () => {
  const { query } = useRouter();

  return (
    <div>
      <h1>Shope Page</h1>
      <p>
        Shop : {query.slug?.[0]} - {query.slug?.[1]}
      </p>
    </div>
  );
};

export default ShopePage;
