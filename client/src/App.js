import React from 'react';
import { Container } from '@material-ui/core';
// import { useDispatch} from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Posts from './components/Posts/Posts';
// import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
// import { getPosts } from './actions/posts';
// import useStyles from './styles';
import Home from './components/Home/Home.jsx';
import Auth from './components/Auth/Auth';

const App = () => (
  // const [currentId, setCurrentID] = useState(null);
  // const dispatch = useDispatch();
  // const classes = useStyles();

  // const changeid = (inp) => {
  //     setCurrentID(inp)
  // };

  // useEffect(() => {
  //     dispatch(getPosts());
  // }, [currentId, dispatch]);

  <Router>
    <Container maxidth='lg'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
