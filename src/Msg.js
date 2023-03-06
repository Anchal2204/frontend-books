import { Counter } from "./Counter";

//Task - create a dislike button 
//hook - react to listen the eventlistener
//useState - [1st ->state, 2nd-> setState]
//const [state, setState] = useState(InitialValue)
//const [like, setLike ] = useState(0)
//state of art technology, state of mind - meaning
export function Msg({ name, pic }) {
  return (
    <div className='user-container'>
      <img className="profile-pic" src={pic} alt={name + "Be Happy"} />
      <h1>Hey {name}</h1>
      <Counter />
    </div>
  );
}