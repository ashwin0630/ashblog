import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MainCard = () => {
  const [blog, setBlog] = useState([]);
  const url = 'https://blogapi-production-41d1.up.railway.app/api/allblog';

  useEffect(() => {
    axios.get(url).then((res) => {
      setBlog(res.data);
    });
  }, [url]);

  return (
    <div className='flex justify-center '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-screen-lg'>
        {blog.map((blg,ids) => (
          <Link to={`/blog/${blg.id}`} key={ids}>
            <div className='flex flex-col items-center m-4'>
              <div className='w-full h-64 border-2 border-purple-800 rounded-lg overflow-hidden'>
                <img className='object-cover w-full h-2/3' src={blg.banner} alt={blg.title} />
                <div className='p-3 items-center'>
                  <h3 className='text-xl font-bold pl-2 pt-2'>{blg.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainCard;
