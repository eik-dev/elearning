'use client'
import useSWR from "swr";
import { fetcher, getData } from "@/app/lib/data";

export default function Page() {
  let { data, error, isLoading } = useSWR(['/books',{}], fetcher);
 
  if (error){
    console.log(error)
    return <div>failed to load</div>
  }
  if (isLoading) return <div>loading...</div>
  return (
    <div>
        <div className="flex">
          <h1>Workbench</h1>
          <div className="icon-[token--bets] w-8 h-8 text-green-500"/>
        </div>
        {
          data.map((book) => (
            <div key={book.id}>
              <h2>{book.name}</h2>
              <p>{book.author}</p>
            </div>
          ))
        }
        <h4>Buttons</h4>
    </div>
  );
}