import React, { useRef, useEffect } from "react";

const EditableElement = (props: {
  children: JSX.Element;
  onChange: (text: string) => void;
}): JSX.Element => {
  const { onChange } = props;
  const element = useRef<HTMLInputElement>();
  let elements = React.Children.toArray(props.children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onBlur = () => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange && value) {
      onChange(value);
    }
  };

  // @ts-ignore
  elements = React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onBlur,
  });
  // @ts-ignore
  return elements;
};

export default EditableElement;
