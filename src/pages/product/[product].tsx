import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // Client-side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* Client-side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} />  */}
      {/* Server-side & Static Side Generation */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

export async function getServerSideProps({ params }: { params: { product: string } }) {
  // fetch data
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/product`);
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       product: product.id,
//     },
//   }));
//   console.log("🚀 ~ paths ~ paths:", paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { product: string } }) {
//   // fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params.product}`);
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
