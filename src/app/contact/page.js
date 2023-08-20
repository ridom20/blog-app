import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="card bg-base-100 shadow-xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full  focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full  focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="text"
                name="website"
                className="input input-bordered w-full  focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="textarea textarea-bordered w-full  focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
