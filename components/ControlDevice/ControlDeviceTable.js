import React from 'react';
import { Table, Tag, Radio, Space, Button, Tooltip } from 'antd';
import { PlayCircleTwoTone, StopTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

export function ControlDeviceTable() {

  const onDelete = (key, e) => {
    e.preventDefault();
    
    alert(key);
  }

  const STATUS_CODE = {
    0: 'OFF',
    1: 'ON'
  }

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: text => <a>{text}</a>,
      sorter: {
        compare: (a, b) => a.index - b.index,
        multiple: 2,
      },
    },
    {
      title: 'Serial',
      dataIndex: 'serial',
      key: 'serial',
      render: text => <a>{text}</a>,
      sorter: {
        compare: (a, b) => a.serial - b.serial,
        multiple: 1,
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: status => {
        let color = 'error';

        if (status === 'ON') {
          color = 'green';
        }
        
        return (
          <span>
            <Tag color={color} key={status}>
              { status }
            </Tag>
          </span>
        )
      },
      filters: [
        {
          text: 'OFF',
          value: 'OFF',
        },
        {
          text: 'ON',
          value: 'ON',
        },
      ],
      onFilter: (value, record) => record.status.includes(value),
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Tooltip title="Chạy">
            <Button onClick={(e) => { onDelete(record.key, e); }} shape="circle" icon={<PlayCircleTwoTone twoToneColor="#1890ff" />} />
          </Tooltip>
          <Tooltip title="Dừng">
            <Button onClick={(e) => { onDelete(record.key, e); }} shape="circle" icon={<StopTwoTone twoToneColor="#ff0000" />} />
          </Tooltip>
          <Tooltip title="Sửa">
            <Button onClick={(e) => { onDelete(record.key, e); }} shape="circle" icon={<EditTwoTone twoToneColor="#f1c40f" />} />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button onClick={(e) => { onDelete(record.key, e); }} shape="circle" icon={<DeleteTwoTone twoToneColor="#c0392b" />} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  
  const data = [
    {
      key: '1',
      serial: 'Serial 1',
      status: 0,
    },
    {
      key: '2',
      serial: 'Serial 2',
      status: 0,
    },
    {
      key: '3',
      serial: 'Serial 3',
      status: 1,
    },
  ];

  const page = 1;
  const limit = 10;

  data.forEach((element, index) => {
    element['index'] = (page - 1) * limit + index + 1;
    element['status'] = STATUS_CODE[element.status];
  });

  return (
    <div>
      <Table
        columns={columns}
        pagination={{ position: 'bottom' }}
        dataSource={data}
      />
    </div>
  )
}