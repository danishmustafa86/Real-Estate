import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createObject, getObjects, updateObject, deleteObject } from '../../store/slices/object.slice';
import { Link } from 'react-router-dom';
import './Objects.css';



export default function Objects() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(null);

  const objects = useSelector(state => state.objectSlice.objects);  // ✅ Corrected

  useEffect(() => {
    dispatch(getObjects());
  }, [dispatch]);

  const handleSubmit = () => {
    if (id) {
      dispatch(updateObject({ objectId: id, updatedData: { title, body } })); // ✅ Correct shape
    } else {
      dispatch(createObject({ title, body }));
    }
    setTitle("");
    setBody("");
    setId(null);
  };

  return (
    <div>
      <h1>Objects</h1>
      <p style={{
        fontSize: "20px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "10px",
        textAlign: "center",
      }}>
        List of Objects
      </p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
      }}>
        {objects.map(obj => (
          <div key={obj.id} style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            width: "300px",
            textAlign: "center",
          }}>
            <h2>{obj.title}</h2>
            <p>{obj.body}</p>
            <button onClick={() => dispatch(deleteObject(obj.id))}>Delete</button>
            <br />
            <Link to={`/objects/${obj.id}`}>View Details</Link>
            <br />
            <button onClick={() => {
              setTitle(obj.title);
              setBody(obj.body);
              setId(obj.id);
            }}>
              Edit
            </button>
          </div>
        ))}

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}>
          <h2>{id ? "Update Object" : "Add Object"}</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
