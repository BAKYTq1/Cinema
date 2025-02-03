import  { useState, useEffect } from 'react';

const Profile = () => {

  const [userData, setUserData] = useState({ username: '', lastName: '', email: '', avatar: '' });
  

  const [isEditing, setIsEditing] = useState(false);

  
  useEffect(() => {
    const data = localStorage.getItem('registrationData');
    if (data) {
      setUserData(JSON.parse(data)); 
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing); 
    if (isEditing) {
      localStorage.setItem('registrationData', JSON.stringify(userData));
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedData = { ...userData, avatar: reader.result };
        setUserData(updatedData);
        localStorage.setItem('registrationData', JSON.stringify(updatedData));
      };
      reader.readAsDataURL(file); 
    }
  };


  if (!userData) return <p className="text-center text-white">Нет данных о пользователе.</p>;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
  
      <button
        onClick={handleEditToggle}
        className=" ml-[550px] mb-[50px] bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
      >
        {isEditing ? 'Сохранить' : 'Редактировать профиль'}
      </button>


      <h1 className="text-[40px] font-bold mb-2 ml-[-700px] mt-[-100px]">{`${userData.lastName} ${userData.username}`}</h1>


      <div className="flex flex-col items-center space-y-4 mt-[50px]">

        <img
          src={userData.avatar || 'https://via.placeholder.com/150'}
          alt="User Avatar"
          className="w-[200px] h-[200px] rounded-full object-cover"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username} 
          onChange={handleChange}
          disabled={!isEditing}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userData.lastName} 
          onChange={handleChange}
          disabled={!isEditing}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="bg-gray-800 text-white px-4 py-2 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
        />
        
  
        <div className='bg-gray-800 px-4 py-2 rounded-md'>
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="text-white focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
