import {React,useState} from 'react';
import "../styles/Search.css";
import "../styles/pagination.css";
import "../styles/icon.css";
import "../styles/table.css";
import "../styles/modal.css";
import {BiMessageDetail} from 'react-icons/bi'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'

function Notification() {
  const [mess, setState] = useState(false)
  const showMess = () => setState(!mess);
  return (
    <div>
      <input list="ice-cream-flavors" id="mySort" name="ice-cream-choice"  placeholder="  Tags"/>
        <datalist id="ice-cream-flavors">
          <option value="Game Error">
          </option><option value="Need Update">
          </option><option value="Upload Game">
          </option><option value="Update Game">
          </option><option value="Other">
          </option></datalist>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="   Search for accounts.." />
         <div></div>
    <table>
        <tbody><tr>
            <th>Accounts</th>
            <th>Email</th>
            <th>Tags</th>
            <th>DateTime</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td><FaUserCircle size="30px" className="ava"/><a className="name">Ho Minh Hieu</a></td>
            <td>developer00000@gmail.com</td>
            <td>Upload Game</td>
            <td>2021-10-02 20:11:32</td>
            <td><BiMessageDetail onClick={showMess} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/></td>
          </tr>
          <tr>
            <td><FaUserCircle size="30px" className="ava"/><a className="name">Le Trung Nghia</a></td>
            <td>user00001@gmail.com</td>
            <td>Game Error</td>
            <td>2021-10-02 20:00:01</td>
            <td><BiMessageDetail onClick={showMess} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/></td>
          </tr>
          <tr>
            <td><FaUserCircle size="30px" className="ava"/><a className="name">Nguyen Dang Tuan Kiet</a></td>
            <td>user00002@gmail.com</td>
            <td>Other</td>
            <td>2021-10-02 19:32:24</td>
            <td><BiMessageDetail onClick={showMess} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/></td>
          </tr>
          <tr>
            <td><FaUserCircle size="30px" className="ava"/><a className="name">Ma Hai Nhat</a></td>
            <td>developer00003@gmail.com</td>
            <td>Update Game</td>
            <td>2021-10-02 09:45:12</td>
            <td><BiMessageDetail onClick={showMess} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/></td>
          </tr>
          <tr>
            <td><FaUserCircle size="30px" className="ava"/><a className="name">Bui Duy Phuong</a></td>
            <td>user00004@gmail.com</td>
            <td>Need Update</td>
            <td>2021-10-01 23:16:56</td>
            <td><BiMessageDetail onClick={showMess} className="iconfont1" size="20px"/><RiDeleteBin6Line className="iconfont" size="20px"/></td>
          </tr>
        </tbody></table>
        <div>
        <div className="bg-modal" style={{display: mess ? 'flex' : 'none' }}>
    <div className="modal-mess" >
      <div className="close" onClick={showMess}>+</div>
      <img width="30px" className="ava" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" />
      <a className="name">user00000@gmail.com</a>
      <a className="tags">Game Error</a>
      <form action>
      <table>
        <tbody>
        <div className="div1">I have some bug for u</div>
        </tbody></table>
        <a className="imggg">Image 1</a>    <a className="imggg">Image 2</a>    <a className="imggg">Image 3</a>
        <table>
        <tbody>
        <input className="div2"/>
        <a href="/setting" className="button1">Send</a>
        </tbody></table>
      </form>
    </div>
  </div>
        <div className="pagination">
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
</div>
{/* <input list="show_table" id="myShow" name="ice-cream-choice"  placeholder="  Show 5"/>
        <datalist id="show_table">
          <option value="Show 50">
          </option><option value="Show 30">
          </option><option value="Show 20">
          </option><option value="Show 10">
          </option></datalist> */}
        </div>
        </div>
  );
}

export default Notification;
