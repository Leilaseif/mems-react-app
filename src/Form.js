import React from "react";
import MemsData from "./MemsData.js";

export default function Form() {
  const [formData, setFormData] = React.useState({
    topText: "",
    buttomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [MemeImage, setMemeImage] = React.useState(MemsData);

  function randomMem(event) {
    event.preventDefault();
    const memsArray = MemeImage.data.mems;
    const randomNumber = Math.floor(Math.random() * memsArray.length);
    const url = memsArray[randomNumber].url;
    setFormData((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handler(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="Form">
      <form>
        <input
          className="input--topText"
          onChange={handler}
          placeholder="top text"
          name="topText"
        />
        <input
          className="input--buttomText"
          onChange={handler}
          placeholder="buttom text"
          name="buttomText"
        />
        <br />
        <button className="submit" onClick={randomMem}>
          create mems!
        </button>
      </form>
      <div className="Mems">
        <img className="Mems--photo" src={formData.randomImage}></img>
        <h1 className="Mem--text Mems--topText">{formData.topText}</h1>
        <h2 className="Mem--text Mems--buttomText">{formData.buttomText}</h2>
      </div>
    </div>
  );
}
