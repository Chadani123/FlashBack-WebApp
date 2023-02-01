import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch} from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentID] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();

    const changeid = (inp) => {
        setCurrentID(inp)
    };

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts changeid={changeid} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} changeid={changeid} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};

export default Home;