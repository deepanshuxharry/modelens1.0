import React from 'react';

function MakeupArtist() {
  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-semibold text-purple-600 mb-6">Makeup Artist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <img
            src="M1.JPG"
            alt="Anshika"
            className="rounded-lg shadow-lg mx-auto"
          />
          <h2 className="mt-4 text-lg font-medium">Anshika</h2>
        </div>
        <div className="text-center">
          <img
            src="M1.JPG"
            alt="Sajal Hans"
            className="rounded-lg shadow-lg mx-auto"
          />
          <h2 className="mt-4 text-lg font-medium">Sajal Hans</h2>
        </div>
      </div>
    </div>
  );
}

export default MakeupArtist;