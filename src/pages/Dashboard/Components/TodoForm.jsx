import React, { useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { showToast } from "../../../config/global";
import dayjs from "dayjs";

const TodoForm = ({ mode = "create", initialValues, onSubmit, loading, onCancel }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (!initialValues) {
            form.resetFields();
            return;
        }

        form.setFieldsValue({
            title: initialValues.title || initialValues.task || "",
            description: initialValues.description || "",
            dueDate: initialValues.dueDate ? dayjs(initialValues.dueDate) : null,
            priority: initialValues.priority || "Medium",
        });
    }, [form, initialValues]);

    const handleFinish = async (values) => {
        const payload = {
            title: values.title.trim(),
            description: values.description.trim(),
            dueDate: values.dueDate ? values.dueDate.format("YYYY-MM-DD") : "",
            priority: values.priority,
        };

        if (!payload.title) return showToast("warning", "Title is required!");

        await onSubmit(payload);
        if (mode === "create") form.resetFields();
    };

    return (
        <div className="todo-form-card premium-card p-4 p-md-5">
            <div className="mb-4">
                <h3 className="text-white mb-1">{mode === "edit" ? "Update Todo" : "Create Todo"}</h3>
                <p className="text-muted mb-0">
                    {mode === "edit" ? "Change the todo details below." : "Add title, description, due date, and priority."}
                </p>
            </div>

            <Form
                form={form}
                layout="vertical"
                initialValues={{ priority: "Medium" }}
                onFinish={handleFinish}
                requiredMark={false}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Please enter todo title" }]}
                >
                    <Input size="large" placeholder="Enter todo title" disabled={loading} />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please enter todo description" }]}
                >
                    <Input.TextArea rows={4} placeholder="Write a short description" disabled={loading} />
                </Form.Item>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <Form.Item
                            label="Due Date"
                            name="dueDate"
                            rules={[{ required: true, message: "Please select due date" }]}
                        >
                            <DatePicker size="large" className="w-100" disabled={loading} />
                        </Form.Item>
                    </div>

                    <div className="col-12 col-md-6">
                        <Form.Item
                            label="Priority"
                            name="priority"
                            rules={[{ required: true, message: "Please select priority" }]}
                        >
                            <Select
                                size="large"
                                disabled={loading}
                                options={[
                                    { value: "Low", label: "Low" },
                                    { value: "Medium", label: "Medium" },
                                    { value: "High", label: "High" },
                                ]}
                            />
                        </Form.Item>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row gap-2 justify-content-end mt-3">
                    {onCancel && (
                        <Button size="large" onClick={onCancel} disabled={loading}>
                            Cancel
                        </Button>
                    )}
                    <Button
                        type="primary"
                        size="large"
                        icon={mode === "edit" ? <SaveOutlined /> : <PlusOutlined />}
                        htmlType="submit"
                        loading={loading}
                    >
                        {mode === "edit" ? "Update Todo" : "Create Todo"}
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default TodoForm;
