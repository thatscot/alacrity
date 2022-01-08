import React, { useState } from 'react';

function AddSubTask(props) {
 return (
   <div>
       <div>
         <input
           type="text"
           name="taskSubject"
           placeholder="Task Subject ..."
           // value={taskSubject}
           onChange={props.changeHandler}
         />
       </div>
   </div>
 );
}

export default AddSubTask;
