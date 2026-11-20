import React, { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useAuth } from "../../../context/Auth";
import StatsCard from "../Components/StatsCard";
import TodoForm from "../Components/TodoForm";
import TodoTable from "../Components/TodoTable";
import { CheckCircleOutlined, ClockCircleOutlined, OrderedListOutlined } from "@ant-design/icons";

const DashboardHome = () => {
    const { currentUser } = useAuth();
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const q = query(collection(db, "todos"), where("userId", "==", currentUser.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });
        return unsubscribe;
    }, [currentUser]);

    const handleAdd = async (task) => {
        setLoading(true);
        await addDoc(collection(db, "todos"), { task, completed: false, userId: currentUser.uid });
        setLoading(false);
    };

    return (
        <div className="container-fluid">
            <h3 className="text-white mb-4">Dashboard Overview</h3>

            {/* Stats Section */}
            <div className="row mb-4">
                <StatsCard title="Total" count={todos.length} icon={<OrderedListOutlined />} color="#4f46e5" />
                <StatsCard title="Pending" count={todos.filter(t => !t.completed).length} icon={<ClockCircleOutlined />} color="#a855f7" />
                <StatsCard title="Completed" count={todos.filter(t => t.completed).length} icon={<CheckCircleOutlined />} color="#10b981" />
            </div>

            <TodoForm onAdd={handleAdd} loading={loading} />
            <TodoTable
                dataSource={todos}
                onToggle={async (id, status) => await updateDoc(doc(db, "todos", id), { completed: !status })}
                onDelete={async (id) => await deleteDoc(doc(db, "todos", id))}
            />
        </div>
    );
};

export default DashboardHome;