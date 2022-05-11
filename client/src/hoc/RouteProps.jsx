import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import PostDetails from '../components/PostDetails'

function RouteProps() {

    const location = useLocation();
    const match = useNavigate();
    const history = useParams();

    return (
        <PostDetails
            location={location}
            match={match}
            history={history}
        />
    )
}

export default RouteProps