import { Msg } from "./Msg";

export function UserList() {

  // Array of objects
  const users = [
    {
      name: "Sowmya",
      pic: "https://www.unigreet.com/wp-content/uploads/2020/04/Smiley-816x1024.jpg",
    },
    {
      name: "Anchal",
      pic: "http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/05/Profile-Picture-7.jpg",
    },
    {
      name: "Gokul",
      pic: "https://i0.wp.com/mytechoffer.com/wp-content/uploads/2022/05/2e2fac9d4a392456e511345021592dd2.jpeg?resize=708%2C894&ssl=1",
    },
    {
      name: "Abirami",
      pic: "https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
  ];

  return (
    <div>
      {users.map((user, index) => <Msg key={index} name={user.name} pic={user.pic} />
      )}
    </div>
  );
}