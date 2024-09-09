import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Prashant Singh (Team Lead)',
      regNumber: '22BCE0001',
      branch: 'CSE',
      year: '3rd Year',
    },
    {
      name: 'Shashank Sharma',
      regNumber: '22BCE1411',
      branch: 'CSE',
      year: '3rd Year',
    },
    {
      name: 'Aakanksha Gupta',
      regNumber: '22BEC1260',
      branch: 'ECE',
      year: '3rd Year',
    },
    {
      name: 'Dakshin R',
      regNumber: '23MIA1062',
      branch: 'CSE',
      year: '2nd Year',
    },
    {
      name: 'Anushka Gupta',
      regNumber: '22BEC1224',
      branch: 'ECE',
      year: '3rd Year',
    },
    {
      name: 'Ganes',
      regNumber: '22BCE0006',
      branch: 'CSE',
      year: '3rd Year',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-500 p-6 pt-44">
      <h1 className="text-8xl font-bold text-center mb-10 text-white">Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-3xl font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-600">Registration Number: {member.regNumber}</p>
            <p className="text-gray-600">Branch: {member.branch}</p>
            <p className="text-gray-600">Year: {member.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
