import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import DashboardPage from '../components/DashboardPage';
import CurrentCampaignsPage from '../components/CurrentCampaignsPage';
import CampaignConfigPage from '../components/CampaignConfigPage';
import PastCampaignsPage from '../components/PastCampaignsPage';
import CampaignLogPage from '../components/CampaignLogPage';
import CampaignStatsPage from '../components/CampaignStatsPage';
import CampaignReportPage from '../components/CampaignReportPage';
import NotFoundPage from '../components/NotFoundPage';
import AppHeader from '../components/AppHeader';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <appHeader />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/currentcampaigns" component={CurrentCampaignsPage} />
                <Route path="/pastcampaigns" component={PastCampaignsPage} />
                <Route path="/campaignlog" component={CampaignLogPage} />
                <Route path="/campaignconfig" component={CampaignConfigPage} />
                <Route path="/campaignstats" component={CampaignStatsPage} />
                <Route path="/campaignreport" component={CampaignReportPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </BrowserRouter>
);

export default AppRouter;
