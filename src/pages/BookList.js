import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

function BookList() {
  const { userID, mySky, setUserID } = useContext(GlobalContext);
  const history = useHistory();

  const [message, setMessage] = useState("");
  const [text, setText] = useState("");

  const getJSONExample = async () => {
    try {
      // Get discoverable JSON data from the given path.
      const { data, skylink } = await mySky.getJSON("app.hns/path/file.json");
      console.log(data, skylink);
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  const setJSONExample = async () => {
    try {
      // Set discoverable JSON data at the given path. The return type is the same as getJSON.
      const { data, skylink } = await mySky.setJSON("app.hns/path/file.json", { message: text });
      console.log(data, skylink);
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>userID: {userID}</p>
      <button onClick={getJSONExample}>
        Get Data
      </button>
      <button onClick={setJSONExample}>
        Set Data
      </button>
      <input onChange={(e) => setText(e.target.value)} value={text} placeholder="Enter text" />
      <p>{message}</p>
    </div>
  );
}

export default BookList;