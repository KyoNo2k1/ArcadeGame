import React from "react";

import './dialog-box.css'

function DialogBox({dialogState, setDialogState}){
    return (dialogState.show) ? (
        <div class="overlay fixed-top">
            <div class="dialog">
                <div class="dialog__content">
                    <h2 class="dialog__title">{dialogState.title}</h2>
                    <p class="dialog__description">{dialogState.message}</p>
                </div>
                <hr />
                <div class="dialog__footer">
                    {(dialogState.title === "Confirm!") ?
                        <button 
                            class="dialog__cancel"
                            onClick={() => setDialogState({
                                title: "",
                                message: "",
                                show: false
                            })}
                        >Cancel</button> : null}

                    {(dialogState.title === "Confirm!") ?
                        <button 
                            class="dialog__confirm"
                            onClick={() => setDialogState({
                                title: "",
                                message: "",
                                show: false
                            })}
                        >Confirm</button> : null}
                    
                    {(dialogState.title === "Notify!" || dialogState.title === "Error!") ? 
                        <button 
                            class="dialog__confirm"
                            onClick={() => setDialogState({
                                title: "",
                                message: "",
                                show: false
                            })}
                        >OK</button> : null}
                </div>
            </div>
        </div>
    ) : null
}

export default DialogBox