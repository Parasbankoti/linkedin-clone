import React, { useEffect, useState } from "react";
import "./Feed.css";
import {
  Article,
  CalendarMonth,
  EditNote,
  InsertPhoto,
} from "@mui/icons-material";
import { InputOptions } from "./InputOptions";
import { blue, orange, red } from "@mui/material/colors";
import { Post } from "./Post";
import { db } from "./Firebase";
import { updateDoc, serverTimestamp } from "firebase/firestore";

export const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const timestamp = await db.serverTimestamp();

      const postData = {
        name: "parass bank",
        description: "this is test",
        message: input,
        photoUrl: "",
        //timestamp: db.serverTimestamp(),
      };
      await db.collection("posts").add(postData);
      setInput("");
    } catch (error) {
      console.log(error);
    }
    // db.collection("posts")
    //   .add({
    //     name: "parass bank",
    //     description: "this is test",
    //     message: input,
    //     photoUrl: "",
    //     timestamp: db.serverTimestamp(),
    //   })
    //   .catch((error) => alert(error));
    // setInput("");
    console.log("sent");
  };

  // useEffect(() => {
  //   db.collection("posts")
  //     .orderBy("timestamp", "desc")
  //     .onSnapshot((snapshot) => {
  //       console.log(snapshot);
  //       setPosts(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       );
  //     });
  // }, []);

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <EditNote />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className="text__area"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions
            Icon={InsertPhoto}
            title={"Media"}
            iconColor={red[500]}
          />
          <InputOptions
            Icon={CalendarMonth}
            title={"Events"}
            iconColor={orange[500]}
          />
          <InputOptions
            Icon={Article}
            title={"Write Article"}
            iconColor={blue[500]}
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
    </div>
  );
};
