import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AddPostIt from './js/components/addPostIt';

const routes = (
    <Route path="/" component={AddPostIt}>
    </Route>
);

export default routes;
