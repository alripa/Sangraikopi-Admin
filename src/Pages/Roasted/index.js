import AdminNav from "../../Components/Organisms/AdminNav";
import Gap from "../../Components/Atoms/Gap";
import { useState, React } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
  Button,
  Space,
} from "antd";
import {
  InboxOutlined,
  PlusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import "./Roasted.css";
import GuideWhite from "../../Components/Organisms/GuideWhite";
import GuideBlack from "../../Components/Organisms/GuideBlack";

export const RoastedForm = () => {
  // Modal White Recipe
  const [isModalVisibleWhite, setIsModalVisibleWhite] = useState(false);

  const showModalWhite = () => {
    setIsModalVisibleWhite(true);
  };

  const handleOkWhite = () => {
    setIsModalVisibleWhite(false);
  };

  const handleCancelWhite = () => {
    setIsModalVisibleWhite(false);
  };

  // Modal Black Recipe
  const [isModalVisibleBlack, setIsModalVisibleBlack] = useState(false);
  const showModalBlack = () => {
    setIsModalVisibleBlack(true);
  };

  const handleOkBlack = () => {
    setIsModalVisibleBlack(false);
  };

  const handleCancelBlack = () => {
    setIsModalVisibleBlack(false);
  };

  const { TextArea } = Input;

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <AdminNav title="Tambah Produk Roasted" selectedMenu="product">
      <Gap height={24} />
      <div className="roasted">
        <Form layout="vertical" wrapperCol={{ span: 16 }}>
          <Form.Item
            name="Nama Produk"
            label="Nama Produk"
            rules={[{ required: true }]}
          >
            <Input placeholder="Masukkan nama produkmu" />
          </Form.Item>
          <Form.Item
            name="Permalink"
            label="Permalink"
            rules={[{ required: true }]}
          >
            <Input
              value={"Same value with above"}
              placeholder="Masukkan permalink"
            />
          </Form.Item>
          <Form.Item
            name="Jenis Produk"
            label="Jenis Produk"
            rules={[{ required: true }]}
          >
            <Select placeholder="Pilih jenis produk">
              <Select.Option value="filter single">Filter Single</Select.Option>
              <Select.Option value="filter blend">Filter Blend</Select.Option>
              <Select.Option value="espresso single">
                Espresso Single
              </Select.Option>
              <Select.Option value="espresso blend">
                Espresso Blend
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="stock barang"
            label="Stock Barang"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="width-100"
              placeholder="Masukkan jumlah stock barang"
            />
          </Form.Item>
          <Form.Item
            name="Berat Bersih (Gram)"
            label="Berat Bersih (Gram)"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="width-100"
              placeholder="Masukkan berat bersih barang dalam gram"
            />
          </Form.Item>

          <Form.Item
            name="Harga (Rupiah)"
            label="Harga (Rupiah)"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="width-100"
              placeholder="Masukkan harga barang dalam rupiah"
            />
          </Form.Item>
          <Form.Item
            name="Foto Produk"
            label="Foto Produk"
            rules={[{ required: true }]}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Klik atau geser foto berukuran 560x560 pada area ini untuk
                mengupload
              </p>
            </Dragger>
          </Form.Item>

          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: "flex", marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      label="Origin"
                      {...restField}
                      name="origin"
                      rules={[
                        {
                          required: true,
                          message: "Origin wajib dimasukkan!",
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan origin" />
                    </Form.Item>
                    <Form.Item
                      label="Postharvest"
                      {...restField}
                      name="postharvest"
                      rules={[
                        {
                          required: true,
                          message: "Postharvest wajib dimasukkan!",
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan Postharvest" />
                    </Form.Item>
                    <Form.Item
                      label="Percentage"
                      {...restField}
                      name="percentage"
                      rules={[
                        {
                          required: true,
                          message: "Percentage wajib dimasukkan!",
                        },
                      ]}
                    >
                      <Input placeholder="Masukkan Percentage" />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Tambah Campuran
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            name="deskripsi"
            label="Deskripsi Produk"
            rules={[
              {
                required: true,
                message: "Deskripsi produk wajib dimasukkan!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item
            name="brewing guide white"
            label="Brewing Guide White"
            rules={[{ required: true }]}
          >
            <Select placeholder="Pilih recipe">
              <Select.Option value="brewing guide white batch 1">
                brewing guide white batch 1
              </Select.Option>
              <Select.Option value="brewing guide white batch 2">
                brewing guide white batch 2
              </Select.Option>
            </Select>
            <Gap height={16} />
            <Button onClick={showModalWhite}>
              <PlusOutlined />
              Tambah Guide
            </Button>
          </Form.Item>

          <Gap height={8} />
          <Form.Item
            name="brewing guide black"
            label="Brewing Guide Black"
            rules={[{ required: true }]}
          >
            <Select placeholder="Pilih recipe">
              <Select.Option value="brewing guide black batch 1">
                brewing guide black batch 1
              </Select.Option>
              <Select.Option value="brewing guide black batch 2">
                brewing guide black batch 2
              </Select.Option>
            </Select>
            <Gap height={16} />
            <Button onClick={showModalBlack}>
              <PlusOutlined />
              Tambah Guide
            </Button>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
        <GuideWhite
          visible={isModalVisibleWhite}
          onOk={handleOkWhite}
          onCancel={handleCancelWhite}
        />
        <GuideBlack
          visible={isModalVisibleBlack}
          onOk={handleOkBlack}
          onCancel={handleCancelBlack}
        />
      </div>
    </AdminNav>
  );
};

export default RoastedForm;
