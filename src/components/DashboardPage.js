import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = () => (
    <div>
        <div>
            This is from my dashboard component
        </div>
        <div>
            <Link to="/currentcampaigns">View Current Campaigns</Link>
            <Link to="/pastcampaigns">View Past Campaigns</Link>
            <Link to="/campaignconfig">Start A New Campaign</Link>
        </div>
    </div>
);

export default DashboardPage;