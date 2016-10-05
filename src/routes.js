import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AddPostIt from './js/components/addPostItButton';

const routes = (
    <Route path="/" component={AddPostIt}>
    </Route>
);

export default routes;
