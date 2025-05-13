import { useRef, useState } from "react";

function App() {
  let nameRef = useRef();
  let phoneRef = useRef();
  let btnRef = useRef();

  let [user, setUser] = useState({});

  let imgRef = useRef();
  console.log(nameRef);

  function handelSubmit(e) {
    console.log(e);

    e.preventDefault();
    console.log("hii");

    console.log(nameRef.current);
    console.log(phoneRef.current);
    console.log(btnRef.current);
    setUser({
      name: nameRef.current.value,
    });

    setUser(...user, { phone: phoneRef.current.value });
    console.log(
      imgRef.current.setAttribute(
        "src",
        "https://wallpaperaccess.com/full/2615131.jpg"
      )
    );
  }

  return (
    <>
      <form action="">
        <input
          ref={nameRef}
          type="text"
          placeholder="enter name"
          onChange={() => {
            setName(nameRef.current.value);
          }}
        />

        <input ref={phoneRef} type="text" placeholder="enterphone" />
        <button onClick={(e) => handelSubmit(e)}>submit</button>
      </form>
      <button ref={btnRef}>xyz</button>
      <img
        height={100}
        ref={imgRef}
        src="https://wallpapers.com/images/hd/virat-kohli-in-sunglasses-yc8dfpcjssp3s4se.jpg"
        alt=""
      />
      name: {name}
    </>
  );
}

export default App;
