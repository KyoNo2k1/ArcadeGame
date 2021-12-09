import {React,useState,useEffect} from 'react';
import "../styles/Search.css";
import "../styles/pagination.css";
import "../styles/icon.css";
import "../styles/table.css";
import "../styles/modal.css";
// import  PaginationTest from "../components/PaginationTest"
import axios from 'axios';

function Developers() {
  const [games,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const [detail, setState] = useState(false)
  const showInfo = () => setState(!detail);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchData();
  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <input list="ice-cream-flavors" id="mySort" name="ice-cream-choice"  placeholder="  Sort By"/>
        <datalist id="ice-cream-flavors">
          <option value="Id">
          </option><option value="Name">
          </option><option value="Email">
          </option><option value="Num of games">
          </option></datalist>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="   Search for ids, accounts.." />
         <div></div>
         <table>
      <tbody><tr>
        <th>AdminId</th>
        <th>Name</th>
        <th>Gmail</th>
        <th>Product</th>
        <th>Action</th>
        </tr>
        {/* <Test games={currentPosts} loading={loading}/> */}
      </tbody></table>
        <div>
        <div className="bg-modal" style={{display: detail ? 'flex' : 'none' }}>
    <div className="modal-dev" >
      <div className="close" onClick={showInfo}>+</div>
      <img width="100px" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
      <form action>
      <table>
        <tbody>
        <tr>
            <td>Id</td>
            <td>031200</td>
          </tr>
          <tr>
            <td>Account</td>
            <td>Nacker1412</td>
          </tr>
          <tr>
          <td>Name</td>
            <td>Ho Minh Hieu</td>
          </tr>
          <tr>
          <td>Gmail</td>
            <td>admin00@gmail.com</td>
          </tr>
          <tr>
          <td>Phone</td>
            <td>0928123456</td>
          </tr>
          <tr>
          <td>Product</td>
            <td>02</td>
          </tr>
        </tbody></table>
      </form>
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
      <img width="100px" className="imagee" src="https://yt3.ggpht.com/ytc/AAUvwng1fnpaZgnnArQUjFw4uJWUGvLeEcDspLfvUWYu=s900-c-k-c0x00ffffff-no-rj" />
    </div>
  </div>
        {/* <PaginationTest postsPerPage={postsPerPage} totalPosts={games.length} paginate={paginate} /> */}
        </div>
        </div>
  );
}

export default Developers;
