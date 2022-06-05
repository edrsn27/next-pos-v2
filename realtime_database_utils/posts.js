import {
  getDatabase,
  ref,
  child,
  push,
  update,
  onValue,
} from "firebase/database";
import { app } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";

export function writeNewPost(picture, title, body) {
  const { currentUser } = getAuth(app);

  const db = getDatabase(app);

  // A post entry.
  const postData = {
    author: currentUser.email,
    uid: currentUser.uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), "posts")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + currentUser.uid + "/" + newPostKey] = postData;

  return update(ref(db), updates);
}

export function getPosts() {
  const { currentUser } = getAuth(app);
  console.log(currentUser.uid);
  const db = getDatabase(app);
  const [posts, setPosts] = useState(null);
  const postRef = ref(db, "user-posts/" + currentUser.uid);

  useEffect(() => {
    onValue(postRef, (snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log(data);
      if (data !== posts) setPosts(Object.entries(data).reverse());
    });
  }, []);

  return posts;
}
