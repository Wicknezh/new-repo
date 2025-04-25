import { Metadata} from "next"

export const generateMetadata = async({params})=>{
  const id =(await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`value ${id}`);
    }, 100);
  });
  return{
    title:`product ${title}`
  }

}
export default async function ProductPage({params}) {
    const value = await params;
  const productId = value.productId;

  
    return <h1>Product: {productId}</h1>;
  }