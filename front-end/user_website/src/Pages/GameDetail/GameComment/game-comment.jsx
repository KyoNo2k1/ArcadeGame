import React, { useEffect , useState , useRef } from 'react'

import './game-comment.css'
import axios from 'axios'

    
function GameComment({user,gameId}) {
    
    var inputCmt = document.getElementById("game-comment__account-btn")
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    
    let avatarUrl = useRef()
    const [cmt,setCmt] = useState([])
    const [userName,setUserName] = useState([])
    const [timeSend,setTimeSend] = useState('')
    const [cmtDeleteUpdate, setCmtDeleteUpdate] = useState([])
    const [cmtUserAvatar, setUserAvatar] = useState([])
    const [userId,setUserId] = useState('')
    const [valueCmt , setValueCmt] = useState('')
    const GAMEID= useRef()
    useEffect(() => {
        getComment()
    },[gameId])
    
    GAMEID.current = gameId
    const handleInputChange = (e) => {
        setValueCmt(e.target.value)
    }
    const postComment = () => {

            if(inputCmt.value !==null){
                axios.post('comment/', {
                    UserID: user.id,
                    GameID: Number(GAMEID.current),
                    Content: valueCmt,
                    }, config)
                    .then(response =>{
                        getComment()
                    })
                    
                    .catch((err) => {
                        console.log(err);
                    })
                    inputCmt.value = null
            }
            else alert('Please write on the box')

    }
        
    //GetComment
    function getComment() {
        axios.get('comment/get-by-game-id/' + GAMEID.current)
            .then((res) => {
                const cmtArr = res.data.post.slice(res.data.post.length - 3,res.data.post.length)
                const saveArrContent = [cmtArr[0].Content,cmtArr[1].Content,cmtArr[2].Content]
                const saveArrName = [cmtArr[0].UserName,cmtArr[1].UserName,cmtArr[2].UserName]
                const saveArrDeleteUpdate = [cmtArr[0].id,cmtArr[1].id,cmtArr[2].id]
                const saveArrUserId = [cmtArr[2].UserID,cmtArr[1].UserID,cmtArr[0].UserID]
                const saveArrUserAvatar = [cmtArr[0].UserAvatar,cmtArr[1].UserAvatar,cmtArr[2].UserAvatar]
                
                setCmt(saveArrContent)
                
                setUserName(saveArrName)
                setCmtDeleteUpdate(saveArrDeleteUpdate)
                setUserId(saveArrUserId)
                setUserAvatar(saveArrUserAvatar)

                avatarUrl.current = axios.defaults.baseURL + 'uploads/images/users/' + user.Avatar;
                
                for (var i = 0; i <=2;i++){
                    cmtArr[i].createdAt=cmtArr[i].createdAt.replace("T","  ")
                    cmtArr[i].createdAt=cmtArr[i].createdAt.replace(".000Z", "s")
                }
                
                const saveArrTimeSend =  [cmtArr[0].createdAt,cmtArr[1].createdAt,cmtArr[2].createdAt]

                setTimeSend(saveArrTimeSend)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //delete
    const functionCmtDelete = (id) => {
        axios.delete('comment/' + id, config)
            .then((response) =>{
                getComment()
            })
            .catch((err) =>{
                console.log(err);
            })
    }
    
    //Update1
    const handleUpdate1 = () =>{
        document.getElementById('comment__bottom__right1').style.display = 'none'
        document.getElementById('comment__bottom__right-hide1').style.display = 'flex'
        document.getElementById('comment__cmt1').style.display = 'none'
        document.getElementById('comment__input1').style.display = 'flex'
    }
    
    const cancelUpdate1 = () =>{
        document.getElementById('comment__bottom__right1').style.display = 'flex'
        document.getElementById('comment__bottom__right-hide1').style.display = 'none'
        document.getElementById('comment__cmt1').style.display = 'flex'
        document.getElementById('comment__cmt1').style.animation = 'commentCome ease-in 1s'
        document.getElementById('comment__input1').style.display = 'none'
    }

    const acceptUpdate1 =(id) =>{
        const valueUpdate1 = document.getElementById('comment__input-box1').value
        axios.patch('comment/' + id,{
                Content:valueUpdate1
            }, config)
            .then(() =>{
                cancelUpdate1()
                getComment()
                valueUpdate1.value=null
            })
            .catch((err) =>{
                console.log(err)
            })
        
    }

    //update2
    const handleUpdate2 = () =>{

        document.getElementById('comment__bottom__right2').style.display = 'none'
        document.getElementById('comment__bottom__right-hide2').style.display = 'flex'
        document.getElementById('comment__cmt2').style.display = 'none'
        document.getElementById('comment__input2').style.display = 'flex'
    }
    
    const cancelUpdate2 = () =>{
        document.getElementById('comment__bottom__right2').style.display = 'flex'
        document.getElementById('comment__bottom__right-hide2').style.display = 'none'
        document.getElementById('comment__cmt2').style.display = 'flex'
        document.getElementById('comment__cmt2').style.animation = 'commentCome ease-in 1s'
        document.getElementById('comment__input2').style.display = 'none'
    }

    const acceptUpdate2 =(id) =>{
        const valueUpdate2 = document.getElementById('comment__input-box2').value
        axios.patch('comment/' + id,{
                Content:valueUpdate2
            }, config)
            .then(() =>{
                cancelUpdate2()
                getComment()
                valueUpdate2.value=null
            })
            .catch((err) =>{
                console.log(err)
            })
        
    }

    //update3
    const handleUpdate3 = () =>{

        document.getElementById('comment__bottom__right3').style.display = 'none'
        document.getElementById('comment__bottom__right-hide3').style.display = 'flex'
        document.getElementById('comment__cmt3').style.display = 'none'
        document.getElementById('comment__input3').style.display = 'flex'
    }
    
    const cancelUpdate3 = () =>{
        document.getElementById('comment__bottom__right3').style.display = 'flex'
        document.getElementById('comment__bottom__right-hide3').style.display = 'none'
        document.getElementById('comment__cmt3').style.display = 'flex'
        document.getElementById('comment__cmt3').style.animation = 'commentCome ease-in 1s'
        document.getElementById('comment__input3').style.display = 'none'
    }

    const acceptUpdate3 =(id) =>{
        const valueUpdate3 = document.getElementById('comment__input-box3').value
        axios.patch('comment/' + id,{
                Content:valueUpdate3
            }, config)
            .then(() =>{
                cancelUpdate3()
                getComment()
                valueUpdate3.value=null
            })
            .catch((err) =>{
                console.log(err)
            })
        
    }

    useEffect(() =>{
        if(user){
            document.getElementById('test1').style.display = 'none'
            document.getElementById('test2').style.display = 'flex'
        }
    },[user])


    useEffect(() => {
        for(let i=0; i<=2; i++){
            if(user){
                if(user.id !== userId[i]){
                    document.getElementById(`comment__bottom__right${i+1}`).style.display = 'none'
                }
                else {
                    document.getElementById(`comment__bottom__right${i+1}`).style.display = 'flex'
                }
            }
        }
    },[cmt, user, userId])


    return (
            <div className="game-comment game-desc">
                <h3>COMMENTS</h3>
                <div className="game-comment__account" id="test1">
                    <div className="game-comment__account-header">Please register or login to post a comment</div>
                    <div className="game-comment__account-btn">
                        <div className="login-out">
                            <label for="btnLogIn" className="login-out__btn" id='logined'>
                            LOGIN
                            </label>
                        </div>
                        <div for="btnSignUp" className="login-out">
                            <label for="btnSignUp" className="login-out__btn--css">
                            SIGN UP
                            </label>
                        </div>
                    </div>
                </div>
                <div className="game-comment__account-login" id="test2">
                    <img className="comment__img" src={avatarUrl.current} alt="" />
                    <input type="text" placeholder="Comment text" className="game-comment__input" maxlength="100" onChange={(e) => handleInputChange(e)} id="game-comment__account-btn"/>
                    <input type="submit" value="Send" className="game-comment__account-send" onClick={postComment}/>
                </div>
                <div className="game-comment__content">
                    <div className="game-comment__content1">
                        <img className="comment__img" src={axios.defaults.baseURL + 'uploads/images/users/'+cmtUserAvatar[2]} alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__top">
                                <div className="comment__user">
                                    {userName[2]}
                                </div>
                                <div className="comment__time">
                                    <time>{timeSend[2]}</time>
                                </div>
                            </div>
                            <div className="comment__bottom">
                                <div className="comment__cmt" id="comment__cmt1">
                                        {cmt[2]}
                                </div>
                                <div className="comment__input" id="comment__input1">
                                    <input type="text" name="input" id="comment__input-box1" className="comment__input-box"  placeholder="Comment Update" />
                                </div>
                                <div className="comment__bottom__right" id="comment__bottom__right1">
                                    <div className="comment__update" onClick={handleUpdate1}>
                                        <i class="comment__update-icon fas fa-pen-alt"></i>
                                    </div>
                                    <div className="comment__delete" onClick={() =>functionCmtDelete(cmtDeleteUpdate[2])}>
                                        <i class="comment__delete-icon far fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="comment__bottom__right-hide" id="comment__bottom__right-hide1">
                                    <div className="comment__update-hide" onClick={cancelUpdate1}>
                                        <i class="comment__update-icon-hide far fa-times-circle"></i>
                                    </div>
                                    <div className="comment__delete-hide" onClick={() => acceptUpdate1(cmtDeleteUpdate[2])}>
                                        <i class="comment__delete-icon-hide far fa-check-circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-comment__content1">
                        <img className="comment__img" src={axios.defaults.baseURL + 'uploads/images/users/'+cmtUserAvatar[1]} alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__top">
                                <div className="comment__user">
                                    {userName[1]}
                                </div>
                                <div className="comment__time">
                                    <time>{timeSend[1]}</time>
                                </div>
                            </div>
                            <div className="comment__bottom">
                                <div className="comment__cmt" id="comment__cmt2">
                                        {cmt[1]}
                                </div>
                                <div className="comment__input" id="comment__input2">
                                    <input type="text" name="input" id="comment__input-box2" className="comment__input-box" placeholder="Comment Update" />
                                </div>
                                <div className="comment__bottom__right" id="comment__bottom__right2">
                                    <div className="comment__update" onClick={handleUpdate2}>
                                        <i class="comment__update-icon fas fa-pen-alt"></i>
                                    </div>
                                    <div className="comment__delete" onClick={() =>functionCmtDelete(cmtDeleteUpdate[1])}>
                                        <i class="comment__delete-icon far fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="comment__bottom__right-hide" id="comment__bottom__right-hide2">
                                    <div className="comment__update-hide" onClick={cancelUpdate2}>
                                        <i class="comment__update-icon-hide far fa-times-circle"></i>
                                    </div>
                                    <div className="comment__delete-hide" onClick={() => acceptUpdate2(cmtDeleteUpdate[1])}>
                                        <i class="comment__delete-icon-hide far fa-check-circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="game-comment__content1">
                        <img className="comment__img" src={axios.defaults.baseURL + 'uploads/images/users/'+cmtUserAvatar[0]} alt="" />
                        <div className="game-comment__desc">
                            <div className="comment__top">
                                <div className="comment__user">
                                    {userName[0]}
                                </div>
                                <div className="comment__time">
                                    <time>{timeSend[0]}</time>
                                </div>
                            </div>
                            <div className="comment__bottom">
                                <div className="comment__cmt" id="comment__cmt3">
                                        {cmt[0]}
                                </div>
                                <div className="comment__input" id="comment__input3">
                                    <input type="text" name="input" id="comment__input-box3" className="comment__input-box" placeholder="Comment Update" />
                                </div>
                                <div className="comment__bottom__right" id="comment__bottom__right3">
                                    <div className="comment__update" onClick={handleUpdate3}>
                                        <i class="comment__update-icon fas fa-pen-alt"></i>
                                    </div>
                                    <div className="comment__delete" onClick={() =>functionCmtDelete(cmtDeleteUpdate[0])}>
                                        <i class="comment__delete-icon far fa-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="comment__bottom__right-hide" id="comment__bottom__right-hide3">
                                    <div className="comment__update-hide" onClick={cancelUpdate1}>
                                        <i class="comment__update-icon-hide far fa-times-circle"></i>
                                    </div>
                                    <div className="comment__delete-hide" onClick={() => acceptUpdate3(cmtDeleteUpdate[0])}>
                                        <i class="comment__delete-icon-hide far fa-check-circle"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default GameComment
