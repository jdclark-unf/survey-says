import { connect } from 'react-redux'
import { MainNavBar } from '../../../components/Nav/NavBar/MainNavBar/MainNavBar';
import { IState} from '../../../reducers';
import { login, logout } from '../../../actions/Login.actions'
import { openSurveysToggle, closedSurveysToggle, closeSurveyTabs } from '../../../actions/Nav.actions';


const mapStateToProps = (state: IState) => ({
  nav: state.nav,
  user: state.user
})

const mapDispatchToProps = {
  login,
  logout,
  openSurveysToggle,
  closedSurveysToggle,
  closeSurveyTabs
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavBar)
