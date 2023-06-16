import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RiReplyAllLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


const BlogDetails = () => {
  const [blogs, setBlogDetails] = useState({});
  const params = useParams();
  const url = `https://blogapi-production-41d1.up.railway.app/api/allblog/${params.blogid}/`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setBlogDetails(res.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, []);

  return (
    
    <div className="container mx-auto py-2">
      <Link to={'/'}>
        <div className='hidden lg:inline-block m-8 '>
          <RiReplyAllLine size={30} className='animate-bounce text-violet-700  hover:text-cyan-700'/>
        </div>
      </Link>
       
      <div className="max-w-2xl mx-auto">
        <img src={blogs.banner} alt="Blog Banner" className="w-full mb-4 rounded-lg" />
        <h1 className="text-3xl pb-4 pt-4 font-bold mb-2 text-center">{blogs.title}</h1>
        <p className="text-sky-600 mb-4 text-center">{blogs.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
