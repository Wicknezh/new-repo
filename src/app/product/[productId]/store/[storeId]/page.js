import { notFound } from "next/navigation";

export default async function StorePage({params}) {
    // destructure the params...
    const { productId, storeId } = await params;
  if(parseInt(storeId)>100){
   notFound();
  }
    return <h1> Store: {storeId} && Product: {productId}</h1>;
  }