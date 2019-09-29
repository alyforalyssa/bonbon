export interface IFrameState {
  components: IFrameComponent[];
  selected?: IFrameComponent;
}

export interface IFrameCreateComponent {
  component: IFrameComponent;
}

export interface IFrameAddProps {
  componentId: string;
  props?: any;
}

export interface IFrameConnectAnimationToComponent {
  componentId: string;
  animationId: number;
}

export interface IFrameSelectComponent {
  componentId: string;
}

// animation is the id in state.animations
// propa details is all the possible props?
export interface IFrameComponent {
  id: string;
  component: React.ReactNode;
  props?: IAnyPropsObject;
  propsDetails?: IFrameProps[];
  animation?: string;
}

// type determines the ui for edit
// handleformat should take raw input and output the formated style to update state
export interface IFrameProps {
  id: string;
  default?: string;
  handleFormat: (arg0: any) => any;
  type: IFramePropsInput;
}
export interface IAnyPropsObject {
  [key: string]: any;
}
export interface IProps {
  all?: IAnyPropsObject;
  details?: IFrameProps[];
}
interface IFramePropsNumberInput {
  id: string;
  kind: "number";
  label: string;
  placeholder?: number;
  minValue?: number;
  maxValue?: number;
}

export type IFramePropsInput =  IFramePropsNumberInput;

interface IBasicInput {
  id: string;
  kind: "basicInput";
  headline: string;
  placeholder?: string;
  password?: boolean;
}
interface INumberInput {
  id: string;
  kind: "numberInput";
  headline: string;
  placeholder?: number;
  minValue?: number;
  maxValue?: number;
}
interface IRadioInput {
  id: string;
  kind: "radioInput";
  headline: any;
  defaultValue?: string;
  values: string[];
}
interface IManyTagsInput {
  id: string;
  kind: "manyTagsInput";
  headline: string;
  placeholder?: string;
  tags: string[];
}
interface IDatePickerInput {
  id: string;
  kind: "datePickerInput";
  headline: string;
}
interface IInputGroupInput {
  id: string;
  kind: "inputGroupInput";
}
export type FormInputs = IBasicInput | INumberInput | IManyTagsInput | IDatePickerInput | IInputGroupInput | IRadioInput;
export interface IInputs extends Array<FormInputs> {}
// export { IBasicInput, INumberInput, IManyTagsInput, FormInputs };
