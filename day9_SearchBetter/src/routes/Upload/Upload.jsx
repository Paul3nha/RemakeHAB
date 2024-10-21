import { useState } from "react";
import { useUser } from "../../UserContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import "./Upload.css";

export const Upload = () => {
  const [user] = useUser();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Uploading...", file);

    const fd = new FormData();
    fd.append("image", file);

    const res = await fetch("https://photochat.anxoso.com/image", {
      method: "POST",
      headers: { Authorization: "Bearer" + user.token },
      body: fd,
    });
    const json = await res.json();
    setSuccess(json);
    navigate("/image/" + json.date);
  };

  if (!user) return <Navigate to="/" />;

  return (
    <div
      id="upload"
      className="page"
    >
      <h1>Upload an image:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {preview ? (
            <img
              className="image-preview"
              src={preview}
            />
          ) : (
            <div className="add-image"></div>
          )}
          <input
            type="file"
            onChange={handleFile}
          />
        </label>
        <button>⬆️</button>
      </form>
      {success && (
        <div>
          Your image has been successfully uploaded!
          <br />
          <a
            href={success.url}
            target="_blank"
            rel="noreferrer"
          >
            {success.url}
          </a>{" "}
        </div>
      )}
    </div>
  );
};
