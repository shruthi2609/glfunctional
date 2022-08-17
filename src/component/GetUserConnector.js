import {connect} from 'react-redux'
import axios from 'axios'
import {getUserData} from '../store/actions/userAction'
import GetUserComponent from './GetUserComponent'

const mapStateToProps=(state)=>{
    return{
        users:state.users,
        isLoading:state.loading
    }
}

export default connect(mapStateToProps,{getUserData})(GetUserComponent)
