import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const HomePage = () => {
      const [count, setCountState] = React.useState(0);
      const [listPosts, setListaPosts] = React.useState([]);

      function counterState(){
        setCountState(count + 1);
      }

      React.useEffect(() => {
        const res = axios.get('blog/api/v1/rest/post');
        res.then((query)=> {
          setListaPosts(query.data);
          console.log(query.data);
        });
      })
      return (
        <div>
          <h1>Home page</h1>
          <div className='row'>
            <div className='col-4'>
              <p>Count com state: {count}</p>
              <button
                type='button' className='btn btn-primary'
                onClick={counterState}>Clique Aqui!</button>
            </div>
          </div>

          <div>
            <Link to="/novopost">
                <button>Novo Post</button>
            </Link>
          </div>

          <div className='row'>
            {listPosts.length > 0 && (<table className='table'>
              <thead>
                <tr>ID</tr>
                <tr>Título</tr>
                <tr>Post</tr>
              </thead>
              <tbody>
                {listPosts.map((post, index) => (
                  <tr key={index}>
                    <th key={post.id}>{post.id}</th>
                    <td key={post.title}><a href={`/post/${post.id}`}>{post.title}</a></td>
                    <td key={post.post}>{post.post}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            )

            }
          </div>
        </div>
      )
}

export default HomePage;
