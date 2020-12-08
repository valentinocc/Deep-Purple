import React from 'react';
import { Router, Route, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import DashboardPage from '../components/DashboardPage';
import CurrentCampaignsPage from '../components/CurrentCampaignsPage';
import CampaignConfigPage from '../components/CampaignConfigPage';
import PastCampaignsPage from '../components/PastCampaignsPage';
import CampaignLogPage from '../components/CampaignLogPage';
import CampaignStatsPage from '../components/CampaignStatsPage';
import CampaignReportPage from '../components/CampaignReportPage';
import CampaignEditPage from '../components/CampaignEditPage';
import SignUpPage from '../components/SignUpPage';
import NotFoundPage from '../components/NotFoundPage';
import AppHeader from '../components/AppHeader';
import ReduxStateChecker from '../components/ReduxStateChecker';
import campaignTutorial from '../components/tutorial';
import teamStructure from '../components/TeamStructure';
import PopQuiz from '../components/PopQuiz';
export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <ReduxStateChecker />
            
            {console.log(history.location.pathname)}

            
                <AppHeader />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                
                <Route path="/currentcampaigns" component={CurrentCampaignsPage} />
                <Route path="/pastcampaigns" component={PastCampaignsPage} />
                <Route path="/campaignlog" component={CampaignLogPage} />
                <Route path="/campaignconfig" component={CampaignConfigPage} />
                <Route path="/campaignedit" component={CampaignEditPage} />
                <Route path="/campaignstats" component={CampaignStatsPage} />
                <Route path="/campaignreport" component={CampaignReportPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/tutorial" component={campaignTutorial} />
                <Route path="/teamstruct" component={teamStructure} />
                <Route path="/popquiz" component={PopQuiz} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
        
    </Router>
);

export default AppRouter;
