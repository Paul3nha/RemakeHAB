import { useState } from "react";
import "./Upload.css";
import { useUser } from "../../UserContext.jsx";

export const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Uploading:", file);

    const fd = new FormData();
    fd.append("picture", file);

    const res = await fetch("https://photochat.anxoso.com/image", {
      method: "POST",
      headers: { Authorization: "Bearer" + user.token },
      body: fd,
    });

    const json = await res.json();
    setSuccess(json);
  };

  const handleFile = (e) => {
    setFile(e.target.file[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1>Upload a Picture</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {preview ? (
            <img className="image-preview" src={preview} />
          ) : (
            <div className="add-image" />
          )}
          <input type="file" onChange={handleFile} />
        </label>
        <button>⬆️</button>
      </form>
      {success && (
        <div>
          Succesfully uploaded!!
          <br />
          <a href={success.url} target="_blank" rel="noreferrer">
            {success.url}
          </a>
        </div>
      )}
    </div>
  );
};
