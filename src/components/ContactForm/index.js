import { lazy } from "react";
import { Row, Col } from "antd";

import useForm from "./useForm";
import validate from "./validationRules";

import * as S from "./styles";

import {Button as AButton} from 'antd';

import Block from '../Block'
import Input from '../../common/Input'
import Button from '../../common/Button'
import TextArea from '../../common/TextArea'

import { Select, Typography } from 'antd'

const { Option } = Select;
const {Title} = Typography;


const Contact = ({id }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <S.Span>{ErrorMessage}</S.Span>

    ) : (
      <S.Span />
    );
  };

  function handleSelect(value) {
    console.log(`selected ${value}`);
  }
  return (
    <S.ContactContainer id={id}>
      <Row type="flex" justify="center" align="start">
        <Col lg={12} md={12} sm={24}>
          <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
            <Col span={24}>
              <Input
                type="text"
                name="name"
                id="Name"
                placeholder="Your Name"
                value={values.name || ""}
                onChange={handleChange}
              />
              <ValidationType type="name" />
            </Col>
            <Col span={24}>
              <Input
                type="text"
                name="email"
                id="Email"
                placeholder="Your Email"
                value={values.email || ""}
                onChange={handleChange}
              />
              <ValidationType type="email" />
            </Col>
            <Col span={24}>
            <label htmlFor="Gender">Gender</label>
              <Select
                type="select"
                name="select"
                id="need"
                allowClear
                style={{ width: '100%',fontSize: '1rem' }}
                placeholder="please select"
                onChange={handleSelect}
              >
                {['Male', 'Female'].map((child,i)=> {
                  return (
                    <Option key={i.toString(36) + i}>{child}</Option>
                  )
                })}
              </Select>
            </Col>
            <Col span={24}>
            <label htmlFor="Age">Age</label>
              <Select
                type="select"
                name="select"
                id="age"
                allowClear
                style={{ width: '100%',fontSize: '1rem' }}
                placeholder="please select"
                onChange={handleSelect}
              >
                {['Below 10', '10-20', '20-30', '30-40', '40-50', '50-60', 'above 60'].map((child,i)=> {
                  return (
                    <Option key={i.toString(36) + i}>{child}</Option>
                  )
                })}
              </Select>
            </Col>
            <Col span={24}>
            <label htmlFor="need">Need</label>
              <Select
                type="select"
                name="select"
                id="need"
                mode="multiple"
                allowClear
                style={{ width: '100%',fontSize: '1rem' }}
                placeholder="What do you need?"
                onChange={handleSelect}
              >
                {['ICU Bed', 'Oxygen Cylinder', 'Ambulance', 'Medical Emergency', ].map((child,i)=> {
                  return (
                    <Option key={i.toString(36) + i}>{child}</Option>
                  )
                })}
              </Select>
            </Col>
            <Col>
            <Col>
            <AButton onClick={() => alert("getting Patient's location")}>
              Get location
            </AButton >
            </Col>
            <Col span={24}>
                <TextArea
                  placeholder="You can give your medical details here"
                  value={values.message || ""}
                  name="message"
                  id="Medical Condition"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
            </Col>
          </S.FormGroup>
        </Col>
      </Row>

    </S.ContactContainer>
  );
};

export default Contact;
