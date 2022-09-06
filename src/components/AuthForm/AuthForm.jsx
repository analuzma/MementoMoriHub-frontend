import * as React from 'react';
import {Button} from '@mui/material';
// 
const renderItem = (props) => {
  switch (props.type) {
    case "password":
      return <Input.Password />;
    case "button":
      return (
        <Button type="primary" htmlType="submit">
          {props.button_text}
        </Button>
      );

    default:
      return <Input />;
  }
};
const FormItem = (props) => (
  <Form.Item {...props}>{renderItem(props)}</Form.Item>
);

export default FormItem;