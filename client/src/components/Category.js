import React from "react";
import Thread from "./Thread";

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: [
        { title: "thread1", user: "user1", id: 0 },
        { title: "thread2", user: "user2", id: 1 }
      ]
    };
  }
  //TODO: fetchThreads from db

  render() {
    return this.state.threads.map((thread, index) => (
      <Thread key={thread.id} title={thread.title} user={thread.user} />
    ));
  }
}

export default Category;
