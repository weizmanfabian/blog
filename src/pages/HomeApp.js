import React, { useEffect, useState } from 'react';

import Post from '../components/Post';
import { getAllPost, getAllUsers } from '../data/api';

const HomeApp = ({ user }) => {

    const [numberLimit, setNumberLimit] = useState(10);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        firstAction()
    }, [])

    const firstAction = async () => {
        const { data } = await getAllPost(numberLimit)
        console.log(data.data);
        setPosts(data.data)
    }

    return (
        <>
            <div className='container'>
                <Post posts={posts} />
            </div>
        </>
    );
}

export default HomeApp;