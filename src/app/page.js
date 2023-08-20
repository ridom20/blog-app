import React from "react";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://basic-blog.teamrabbil.com/api/post-newest");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="card card-compact bg-base-100 shadow-xl "
          >
            <figure>
              <img src={item.img} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" href={`/single-blog/${item.id}`}>Details...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
