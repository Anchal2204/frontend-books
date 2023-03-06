import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  useEffect(() => {
    console.log("Total updates", like + dislike);
  }, [like, dislike]);

  return (
    <div>
      {/* onClick - camelcase */}
      <IconButton
        aria-label="like"
        onClick={() => {
          setLike(like + 1);
        }}
        color="primary"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="dislike"
        onClick={() => {
          setDisLike(dislike + 1);
        }}
        color="error"
      >
        <Badge badgeContent={dislike} color="error">
          {" "}
          👎
        </Badge>
      </IconButton>

      {/* <Button className='btn-like' onClick={() => { setLike(like + 1); }}>
        👍 {like}</Button> */}
      {/* <Button className='btn-dislike' onClick={() => { setDisLike(dislike + 1); }}>
        👎 {dislike}</Button> */}
    </div>
  );
}