import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Users() {

    const [ users, setUsers ] = useState([]);
    const [ posts, setPosts ] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data);
            console.log(res.data[0].id)
            axios(
                `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
            ).then((res) => setPosts(res.data))
        }).finally(setLoading(false))
    }, []);

    const getData = async () => {
        
    }

    return (
        <div>
            <h2>Users</h2>
            {loading && <div>Yükleniyor</div>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

            <h2>Users</h2>
            {loading && <div>Yükleniyor</div>}
            <ul>
               {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
               ))}
            </ul>
        </div>
    )
}

export default Users
