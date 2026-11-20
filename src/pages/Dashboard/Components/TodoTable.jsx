import React from "react";
import { Table, Tag, Button, Popconfirm } from "antd";
import { DeleteOutlined, CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";

const TodoTable = ({ dataSource, onToggle, onDelete }) => {
    const columns = [
        {
            title: "Task Description",
            dataIndex: "task",
            key: "task",
            render: (text, record) => (
                <span
                    style={{
                        textDecoration: record.completed ? "line-through" : "none",
                        color: record.completed ? "#64748b" : "#f8fafc",
                        cursor: "pointer"
                    }}
                    onClick={() => onToggle(record.id, record.completed)}
                >
                    {text}
                </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "completed",
            key: "completed",
            width: 120,
            render: (completed) => (
                <Tag color={completed ? "success" : "processing"} className="px-2 py-0.5">
                    {completed ? "Completed" : "Pending"}
                </Tag>
            ),
        },
        {
            title: "Actions",
            key: "actions",
            width: 100,
            align: "center",
            render: (_, record) => (
                <div className="d-flex gap-1 justify-content-center">
                    <Button
                        type="text"
                        style={{ color: record.completed ? "#a855f7" : "#10b981" }}
                        icon={record.completed ? <ClockCircleOutlined /> : <CheckCircleOutlined />}
                        onClick={() => onToggle(record.id, record.completed)}
                    />
                    <Popconfirm
                        title="Delete this task?"
                        onConfirm={() => onDelete(record.id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"
                    >
                        <Button type="text" danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </div>
            ),
        },
    ];

    return (
        <div className="premium-card p-2" style={{ overflowX: "auto" }}>
            <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
                className="custom-table"
                style={{ background: "transparent" }}
            />
        </div>
    );
};

export default TodoTable;