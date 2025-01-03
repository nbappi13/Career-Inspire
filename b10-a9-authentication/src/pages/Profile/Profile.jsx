import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [name, setName] = useState(currentUser?.displayName || '');
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile: ', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>My Profile - Career Inspire</title>
        <meta name="description" content="Update your profile information including name and photo URL." />
      </Helmet>
      <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>
        <div className="flex justify-center mb-6">
          <img
            src={photoURL}
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-indigo-500"
          />
        </div>
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </HelmetProvider>
  );
};

export default Profile;
