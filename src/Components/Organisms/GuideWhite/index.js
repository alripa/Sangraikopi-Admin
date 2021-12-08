import React from "react";
import { Modal, Form, Input, DatePicker, InputNumber } from "antd";
import "./GuideWhite.css";

const GuideWhite = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Tambah Brewing Guide White"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Simpan Brewing Guide"
      cancelText="Cancel"
    >
      <Form layout="vertical">
        <Form.Item
          name="nama guide"
          label="Nama Guide"
          rules={[{ required: true }]}
        >
          <Input placeholder="Masukkan nama guide" />
        </Form.Item>
        <Form.Item
          name="batch date"
          label="Batch Date"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="dose" label="Dose (gram)" rules={[{ required: true }]}>
          <InputNumber
            className="width-100"
            placeholder="Masukkan dosis dalam gram"
          />
        </Form.Item>
        <Form.Item
          name="yield"
          label="Yield (gram)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan yield dalam gram"
          />
        </Form.Item>
        <Form.Item
          name="brewing time"
          label="Brewing Time (second)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan brewing time dalam detik"
          />
        </Form.Item>
        <Form.Item
          name="brewing temperature"
          label="Brewing Temperature (celsius)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan brewing temperature dalam detik"
          />
        </Form.Item>
        <Form.Item
          name="cappucino"
          label="Cappucino (ml/cup)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan campuran cappucino ml/cup"
          />
        </Form.Item>
        <Form.Item
          name="cafe latte"
          label="Cafe Latte (ml/cup)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan campuran cafe latte ml/cup"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default GuideWhite;
