import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import NovoPost from './paginas/NovoPost';
import NotFound from './paginas/NotFound';
import Post from './paginas/Post';
// import Sobre from './paginas/Sobre';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path='/novopost' element={<NovoPost/>}/>
                <Route path='/post/:postId' element={<Post/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter;