import { notFound } from "next/navigation";


export default async function ReviewPage({params}) {
    
    const { review } = await params;
    console.log(review);
    
  if(review?.length === 2){
    return <h1> docs: {review[0]} && Product: {review[1]}</h1>;
  }
  else if(review?.length === 1){
    return <h1> docs: {review[0]} </h1>;
  }
  else if(review?.length === 3){
    notFound();
  }

    return <h1> docs</h1>;
    

  }