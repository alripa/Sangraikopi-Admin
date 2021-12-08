import React from "react";
import { Modal, Form, Input, DatePicker, InputNumber } from "antd";
import "./GuideBlack.css";

const GuideBlack = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Tambah Brewing Guide Black"
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
          name="water temperature"
          label="Water Temperature (celsius)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan water temperature dalam celsius"
          />
        </Form.Item>
        <Form.Item
          name="brewing temperature"
          label="Brewing Temperature (celsius)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan brewing temperature dalam celsius"
          />
        </Form.Item>
        <Form.Item
          name="americano"
          label="Americano (ml/cup)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan campuran americano ml/cup"
          />
        </Form.Item>
        <Form.Item
          name="water"
          label="Water (ml/cup)"
          rules={[{ required: true }]}
        >
          <InputNumber
            className="width-100"
            placeholder="Masukkan campuran air ml/cup"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default GuideBlack;
