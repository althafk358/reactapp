
import React from "react";

import Button from "./components/button/button.js";
import List from "./components/list/list.js"
import Images  from "./components/images/images.js"
function Hello(){
  return(
    <div>
      <h1>Hello World</h1>
      <Button/>
      <h2>iam log in</h2>
      <Button/>
      <h2>i am sign up</h2>
      <Button/>
      <List/>
      <Images/>

    </div>
  )
}
export default Hello;