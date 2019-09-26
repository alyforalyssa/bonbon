import DatePicker from "antd/lib/date-picker";
import Input from "antd/lib/input";
import InputNumber from "antd/lib/input-number";
import Radio from "antd/lib/radio";
import Select from "antd/lib/select";
// import Spin from "antd/lib/spin";
import React, { Fragment, useState } from "react";
import { FormInputs, IFramePropsInput } from "../models/IFrame";

const InputGroup = Input.Group;
const Option = Select.Option;

const defaultStyle = {
  border: "1px solid #e9edf2",
  background: "#f4f8fa",
  marginBottom: "16px",
};

export const IFramePropsInputContent: React.FunctionComponent<
{ input: IFramePropsInput,
  handleChange: (arg0: any) => void,
}> = ({
  input,
  handleChange,
}) => {
  const state: any = {};
  switch (input.kind) {
    case "number":
      return (
        <Fragment>
        <label className="basic-label" >{input.label}</label>
        <InputNumber
          style={defaultStyle}
          width={200}
          min={input.minValue || 0}
          max={input.maxValue || Number.MAX_SAFE_INTEGER}
          defaultValue={input.placeholder || 0}
          onChange={(val) => {
            state[input.id] = val;
            handleChange(state);
          }}
          />
        </Fragment>
      );
  }
};
const FormInputContent: React.FunctionComponent<
{ formInput: FormInputs,
  handleChange: (arg0: any) => void,
  index?: number,
  defaultValue?: any,
}> = ({
  formInput,
  handleChange,
  index,
  defaultValue,
}) => {
      const formid = formInput.id;
      const state: any = index ? {id: index} : {};
      const inputGroupStateInit: any = {};
      const objectInit: any = {};
      inputGroupStateInit[formid] = objectInit;
      const [inputGroupState, setInputGroupState] = useState(inputGroupStateInit);
      switch (formInput.kind) {
        case "basicInput":
          return (
            <Fragment>
            <label className="basic-label" >{formInput.headline}</label>
            <Input
              style={defaultStyle}
              type={formInput.password ? "password" : "text"}
              placeholder={formInput.placeholder || "Enter your response"}
              defaultValue={defaultValue || ""}
              onChange={(e) => {
                state[formid] = e.target.value;
                handleChange(state);
              }}
              />
            </Fragment>
          );
        case "numberInput":
          return (
            <Fragment>
            <label className="basic-label" >{formInput.headline}</label>
            <InputNumber
              style={defaultStyle}
              width={200}
              min={formInput.minValue || 0}
              max={formInput.maxValue || Number.MAX_SAFE_INTEGER}
              formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              parser={(value) => parseInt((value || "").replace(/\$\s?|(,*)/g, ""), 10)}
              defaultValue={defaultValue || 0}
              onChange={(val) => {
                state[formid] = val;
                handleChange(state);
              }}
              />
            </Fragment>
          );
        case "manyTagsInput":
          return (
            <Fragment>
            <label className="basic-label" >{formInput.headline}</label>
            <Select
              style={defaultStyle}
              mode="tags"
              defaultValue={defaultValue}
              placeholder={formInput.placeholder || "Enter your response"}
              onChange={(val) => {
                state[formid] = val;
                handleChange(state);
              }}
            >
              {formInput.tags.map((tag: any) => (
                <Option key={tag}>{tag}</Option>
              ))}
            </Select>
            </Fragment>
          );
        case "datePickerInput":
          return (
            <Fragment>
            <label className="basic-label" >{formInput.headline}</label>
            <DatePicker
            onChange={(val) => {
              state[formid] = val;
              handleChange(state);
            }}/>
            </Fragment>
          );
        case "radioInput":
          return (
            <Fragment>
            {formInput.headline}
            <Radio.Group
              style={defaultStyle}
              defaultValue={defaultValue}
              buttonStyle="solid"
              onChange={(e) => {
                state[formid] = e.target.value;
                handleChange(state);
              }}
            >
              {formInput.values.map((value: any) => (
                <Radio.Button key={value} value={value}>{value}</Radio.Button>
              ))}
            </Radio.Group>
            </Fragment>
          );
        case "inputGroupInput":
          return (
            <InputGroup compact>
              <Input style={{ width: "50%" }} defaultValue="key"
              onChange={(e) => {
                const temp = {key: e.target.value};
                const merged = {...inputGroupState[formid], ...temp};
                const withId: any = {};
                withId[formid] = merged;
                setInputGroupState(withId);
                handleChange(inputGroupState);
              }}/>
              <Input style={{ width: "50%" }} defaultValue="value"
              onChange={(e) => {
                const temp = {value: e.target.value};
                const merged = {...inputGroupState[formid], ...temp};
                const withId: any = {};
                withId[formid] = merged;
                setInputGroupState(withId);
                handleChange(inputGroupState);
              }}/>
            </InputGroup>
          );
        }
    };
export default FormInputContent;
