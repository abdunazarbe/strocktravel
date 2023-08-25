import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Drop = () => (
  <Space wrap>
    <Select className='hidden lg:flex'
      defaultValue="RUS"
      style={{
        width: 120,
        border:0,
        background: "transparent"
      }}
      onChange={handleChange}
      options={[
        {
          value: 'RUS',
          label: 'RUS',
        },
        {
          value: 'ENG',
          label: 'ENG',
        },
        {
          value: 'UZB',
          label: 'UZB',
        },
       
      ]}
    />
     </Space>
);
export default Drop;