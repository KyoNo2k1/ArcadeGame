import {React,useState,useEffect} from 'react';
import "../styles/Search.css";
import "../styles/pagination.css";
import "../styles/icon.css";
import "../styles/table.css";
import "../styles/modal.css";
import UsersRouter from '../Router/UsersRouter';
import  PaginationTest from "../components/PaginationTest"
import axios from 'axios';
import DetailUser from '../Router/DetailUser';
import EditUser from '../Router/EditUser';

function Users() {
  const [user, getUser] = useState([]);
  const [users,setPosts] = useState([]);
  const [userFilter,setDataUser] = useState([]);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = userFilter.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const searchDone = () => setSearch(false);
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('/user/',config);
      setPosts(res.data);
      setDataUser(res.data);
      setLoading(false);
    }
    fetchData();
  },[]);
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };
  const fetchUserInfo = async (id) => {
    const res = await axios.get(`/user/${id}`,config);
    getUser(res.data);
  }
  const [detail, setState] = useState(false)
  const closeInfo = value => setState(value);
  const openInfo = value => setState(value);
  const getDataUser = (id,data)=> updateUser(id,data);
  const updateUser = (id,data) => {
    axios.patch(`/user/${id}`,data,config);
    window.location.reload();
    alert("Edit successfully!");
    }
  const deleteUser = (id) => {
    axios.delete(`/user/${id}`,config);
    window.location.reload();
    alert("Delete successfully!");
  }
  const [editform, setEdit] = useState(false)
  const showEdit = value => {
    setEdit(value);
  }
  const openEdit = value => {
    document.getElementById('avaInfo1').src = "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png"
    document.getElementById('out1').src = document.getElementById('avaInfo1').src;
    setEdit(value);
  }
  const setImg = value => setEdit(value);
  const _handlerClickEnter =(e) => {
    var input, filter;
    if(e.key === 'Enter'){
      input = document.getElementById("myInput1");
      if(input.value==="") {setDataUser(users); setSearch(true);setCurrentPage(1);}
      else{
        setDataUser(users);
        filter = input.value.toUpperCase();
        var newArray = users.filter(function (el) {
          return el.id.toString().indexOf(filter) > -1 || el.Full_name.toUpperCase().indexOf(filter) > -1 || el.Email.replace("@gmail.com","").toUpperCase().indexOf(filter) > -1;
        });
        setSearch(true);
        setCurrentPage(1);
        setDataUser(newArray);
      }
      document.getElementById("myInput1").value = "";
    }
  }
  return (
    <div>
      <input type="search" id="myInput1" onKeyDown={_handlerClickEnter} placeholder="   Search for user accounts, email..." />
      <div></div>
      <table  id="myTable">
        <tbody><tr>
          <th>ID</th>
            <th>Name</th> 
            <th>Email</th>
            <th>DayOfBirth</th>
            <th>Actions</th>
          </tr>
          <UsersRouter users={currentPosts} loading={loading} modalInfo={openInfo} modalEdit={openEdit} dataUser={fetchUserInfo} deleteOK={deleteUser}/>
        </tbody></table>
      <div>
        <EditUser editform={editform} showEdit={showEdit} setImg={setImg} userData={user} updateUser={getDataUser}/>
        <DetailUser detail={detail} modalCloseInfo={closeInfo} userData={user}/>
        <PaginationTest postsPerPage={postsPerPage} totalPosts={userFilter.length} paginate={paginate} search={search} searchDone={searchDone}/>
      </div>
    </div>
  );
}

export default Users;
