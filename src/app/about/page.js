import React from 'react';

const page = () => {
    const teamMembers = [
        {
          id: 1,
          name: 'John Doe',
          position: 'CEO',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.',
        },
        {
          id: 2,
          name: 'Jane Smith',
          position: 'COO',
          bio: 'Praesent libero. Integer nec odio. Sed cursus ante dapibus diam.',
        },
      ];
    
      return (
        <div className=" items-center justify-center min-h-screen mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <section className="mb-8">
            <h1 className="text-3xl font-semibold mb-4">Our Story</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
              dapibus diam. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
              tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </section>
          <section>
            <h1 className="text-3xl font-semibold mb-4">Our Team</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member) => (
                <div key={member.id} className="card p-4 bg-white shadow-md rounded-md">
                  <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                  <p className="text-gray-600 mb-2">{member.position}</p>
                  <p className="text-gray-800">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
};

export default page;