import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, clearUsers } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const { usersList, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Redux Toolkit Async Example</h1>

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => dispatch(fetchUsers())}
          style={{ marginRight: "10px" }}
        >
          Reload Users
        </button>
        <button onClick={() => dispatch(clearUsers())}>Clear List</button>
      </div>

      {isLoading && <h2>Loading...</h2>}

      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}

      {!isLoading && !error && usersList.length === 0 && (
        <p>No users found. Click "Reload Users" to fetch.</p>
      )}

      <ul>
        {usersList.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
