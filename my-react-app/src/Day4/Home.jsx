import { useState } from "react";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
    const [search, setSearch] = useState("");
    const [task, setTask] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]); // State for search results
    const [val, setVal] = useState("");
    const [priority, setPriority] = useState("High");

    function handleClick() {
        if (val.trim() === "") {
            alert("Please Add Task");
        } else {
            const newTask = {
                id: Date.now(),
                name: val,
                completed: false,
                priority: priority,
                createdAt: new Date(),
            };

            setTask((prev) => [...prev, newTask]);
            setFilteredTasks([]); // Reset filtered tasks after adding a new task
            setVal("");
        }
    }

    function handleSearch() {
        const arr = task.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredTasks(arr); // Update filtered tasks
    }
    
    function handleDelete(id){
        setTask((prev)=> prev.filter((e)=>e.id!==id))
    }

    // console.log(task,"task")
    return (
        <div className="container">
            <h1 className="title">Task Manager</h1>

            {/* Search Section */}
            <div className="search-section">
                <input
                    type="text"
                    className="search-input"
                    value={search}
                    placeholder="Search tasks..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn search-btn" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {/* Task Input Section */}
            <div className="task-section">
                <input
                    type="text"
                    className="task-input"
                    placeholder="Enter your todo"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />

                <select
                    name="priority"
                    className="priority-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="High">High</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                </select>

                <button className="btn add-btn" onClick={handleClick}>
                    Add Task
                </button>
            </div>

            {/* Task List Section */}
            <div className="task-list">
                <h2 className="section-title">Tasks:</h2>
                {(filteredTasks.length > 0 ? filteredTasks : task).map((e) => (
                    <div key={e.id} className={`task-item ${e.priority.toLowerCase()}`}>
                        <p className="task-name">{e.name}</p>
                        <p className="task-priority">{e.priority}</p>
                        <p>{new Date(e.createdAt).toLocaleDateString()}</p>

                        {/* <p className="task-priority">{e?.createdAt}</p> */}
                        <button onClick={() => handleDelete(e?.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
