import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Imgur.css";

export const Imgur = () => {
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

    const res = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: { Authorization: "Client-ID 3b63944cdbf9d32" },
      body: fd,
    });
    const json = await res.json();
    setSuccess(json);
    navigate(json.url);
  };

  return (
    <div
      id="upload"
      className="page"
    >
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {preview ? (
            <img
              className="image-preview"
              src={preview}
            />
          ) : (
            <div className="add-image" />
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
          </a>
        </div>
      )}
    </div>
  );
};

// Este componente permite a los usuarios subir una imagen a Imgur, un popular servicio de alojamiento de imágenes, y mostrar un enlace a la imagen subida.
