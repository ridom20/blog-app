import React from "react";

export default async function page({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://basic-blog.teamrabbil.com/api/post-details/${id}`
  );
  const result = await response.json();

  return (
    <div>
      <div>
  {result.postDetails ? (
    <div className="card bg-base-100 shadow-xl mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid mb-3">
      <figure>
        <img src={result.postDetails.img} alt={result.postDetails.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{result.postDetails.title}</h2>
        <p>{result.postDetails.content}</p>
      </div>
    </div>
  ) : (
    <p className="text-center text-red-500 flex items-center justify-center min-h-screen">No result found.</p>
  )}
</div>

    </div>
  );
}
