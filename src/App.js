import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './services/route/PrivateRoute';
import FeedbackView from './views/Feedback/FeedbackView';
import LoginView from './views/Login/LoginView';
import RegisterView from './views/Register/RegisterView';
import ForgotPasswordView from './views/ForgotPassword/ForgotPasswordView';
import ResetPasswordView from './views/ResetPassword/ResetPasswordView';
import MyAccountView from './views/MyAccount/MyAccountView';
import HelpView from './views/Help/HelpView';
import HomeComponent from './components/Home';
import QuestionComponent from './components/Questionnaire/QuizApp';
import OverviewComponent from './components/Overview/PhoneOverview';
import AboutView from './views/About/AboutView';
import CompareView from './views/Compare/CompareView';

import ResultComponent from './components/Overview/ResultOverview';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/about" component={AboutView} />
          <Route exact path="/compare" component={CompareView} />
          <Route exact path="/question" component={QuestionComponent} />
          <Route exact path="/result" component={ResultComponent} />
          <PrivateRoute exact path="/overview" component={OverviewComponent} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/forgotpassword" component={ForgotPasswordView} />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordView}
          />
          <PrivateRoute exact path="/feedback" component={FeedbackView} />
          <PrivateRoute exact path="/help" component={HelpView} />
          <PrivateRoute exact path="/myaccount" component={MyAccountView} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
