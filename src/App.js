
import styles from'./App.module.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Provider} from "react-redux"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from "./redux/store"
import Home from "./pages/Home/Home"
import Final from "./pages/Final/Final"
import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import ForgotPassword from "./pages/ForgotPassword/Forgot"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Form from "./pages/Form/Form"
import Quiz from "./pages/Quiz/Quiz"
import CreatedQuiz from './pages/Created/CreatedQuiz';

function App() {
 
  return (
    <Provider store={store}>
    <div className={styles.App}>
     <Router>
       <Routes>
       <Route path='/' element={<PrivateRoute/>} > 
       <Route path='/' element={<Home/>} />
       </Route>
       <Route path='/final' element={<PrivateRoute/>} > 
       <Route path='/final' element={<Final/>} />
       </Route>
         <Route path='/signIn' element={<SignIn/>}/>
         <Route path='/signUp' element={<SignUp/>}/>
         <Route path='/forgotPassword' element={<ForgotPassword/>}/>

         <Route path='/form' element={<Form/>}/>
         <Route path='/quiz' element={<Quiz/>} />
         <Route path='/createdQuiz' element={<CreatedQuiz/>} />
       </Routes>
     </Router>
     <ToastContainer/>
    </div>
    </Provider>
  );
}

export default App;
