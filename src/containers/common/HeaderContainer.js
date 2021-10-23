import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";

const HeaderContainer = () => {
    const {user} = useSelector(({user}) => ({user : user.user}));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());//액션 생성 함수를 디스패치하는   onLogout 함수
    };


    return  <Header user={user} onLogout={onLogout}/>; 
}

export default HeaderContainer;