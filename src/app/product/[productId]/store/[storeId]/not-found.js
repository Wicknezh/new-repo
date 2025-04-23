"use client";

import { usePathname } from "next/navigation";

export default  function NotFound({params}) {
  const pathName =usePathname();
  const productId = pathName.split("/")[2];
  const storeId = pathName.split("/")[4];
  
    return <h1>  Not Found Store: {storeId} && Product: {productId}</h1>;
  }