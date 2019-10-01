import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import React, {useState} from "react";
import { Preview } from "../view/preview";

export const ModalForm: React.FunctionComponent<{
  visible?: boolean,
  handleCancel: () => void,
  handleOk: () => void,
  title?: string,
  submitTitle?: string,
  children: React.ReactNode,
}> = ({
  visible,
  handleCancel,
  handleOk,
  title,
  submitTitle,
  children,
}) => {
    return (
      <Modal
        title={title || "Let's get started"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            {submitTitle || "Get Started"}
          </Button>,
        ]}
      >
        {children}
      </Modal >
    );
  };

export const PreviewButton = () => {
  const [isModalVisible, toggleModal] = useState(false);
  return (
    <Button type={"primary"} onClick={() => toggleModal(!isModalVisible)}>
      Preview
      <ModalForm
        visible={isModalVisible}
        handleCancel={() => toggleModal(false)}
        handleOk={() => toggleModal(false)}
        title={"Preview"}
        submitTitle={"Back"}
         >
         <Preview />
         </ModalForm>
    </Button>
  );
};
