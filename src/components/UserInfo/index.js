import styled from 'styled-components';
import dayjs from 'dayjs';
import DateFnsUtils from '@date-io/date-fns';
import InputMask from 'react-input-mask';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

import { getEnrollment, postEnrollment } from '../../services/enrollmentApi';
import { getAddress } from '../../services/cepApi';

export function PersonalInformationForm () {
  const [form, setForm] = useState({
    full_name: '',
    cpf: '',
    birthday: null,
    phone: '',
    cep: '',
    street: '',
    city: '',
    number: '',
    state: '',
    neighborhood: '',
    addressDetail: ''
  });

  function handleForm (event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const customHandleChange = (key, sanitizeFn) => (inputValue) => {
    const value = sanitizeFn ? sanitizeFn(inputValue) : inputValue;
    setForm({
      ...form,
      [key]: value,
    });
  };

  useEffect(() => {
    const promise = getEnrollment();
    promise.then((res => {
      setForm({
        full_name: res.full_name,
        cpf: res.cpf,
        birthday: res.birthday,
        phone: res.phone,
        cep: res.address.cep,
        street: res.address.street,
        city: res.address.city,
        number: res.address.number,
        state: res.address.state,
        neighborhood: res.address.neighborhood,
        addressDetail: res.address.addressDetail
      });
    }));
  }, []);

  function isValidCep(cep) {
    return cep.length === 8;
  }

  async function handleCepChanges(event) {
    const { name, value } = event.target;

    const valueWithoutMask = value.replace('-', '');

    if (isValidCep(valueWithoutMask)) {
      const newDataValues = {
        ...form,
        [name]: value
      };

      const cepData = await getAddress(valueWithoutMask);
      setForm({
        ...newDataValues,
        street: cepData.logradouro,
        city: cepData.localidade,
        neighborhood: cepData.bairro,
        state: cepData.uf,
      });
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const newData = {
      full_name: form.full_name,
      cpf: form.cpf.replaceAll('.', '').replaceAll('-', ''),
      birthday: dayjs(form.birthday).toISOString(),
      address: {
        cep: form.cep,
        street: form.street,
        city: form.city,
        number: form.number,
        state: form.state,
        neighborhood: form.neighborhood,
        addressDetail: form.addressDetail,
      },
      phone: form.phone.replace(/[^0-9]+/g, '').replace(/^(\d{2})(9?\d{4})(\d{4})$/, '($1) $2-$3'),
    };
    
    try {
      await postEnrollment(newData);
      alert('Information successfully saved!');
    } catch (err) {
      alert('Something went wrong! Check you data and try again!');
    }
  }

  return (
    <Wrapper>
      <Wrapper utils={DateFnsUtils}>
        <Form onSubmit={handleSubmit}>
          <h1>Informações Pessoais</h1>

          <InputWrapper className='full-box'>
            <Input 
              type="text" 
              name="name" 
              placeholder="Nome" 
              value={form.name}               
              onChange={handleForm}
            />
          </InputWrapper>
          
          <InputWrapper className='half-box'>
            <InputMsk
              type="text" 
              name="cpf"
              mask="999.999.999-99"
              placeholder="CPF"
              value={form.cpf}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <InputWrapper 
              name="birthday"
              error={false}
              helperText={null}
              format="dd-MM-yyyy"
              label="Birthday"
              inputVariant="outlined"
              clearable
              value={dayjs(form.birthday).format('YYYY-MM-DD').toString()}
              onChange={(date) => { 
                customHandleChange('birthday', (d) => d && dayjs(d).format('YYYY-MM-DD'))(date);
              }}
            />
          </InputWrapper>

          <InputWrapper className='full-box'>
            <InputMsk
              type="text" 
              name="phone"
              mask={form?.phone.length < 15 ? '(99) 9999-99999' : '(99) 99999-9999'}
              placeholder="Telefone" 
              value={form.phone}               
              onChange={handleForm}
            />
          </InputWrapper>

          <h1>Entrega</h1>

          <InputWrapper className='full-box'>
            <InputMsk
              type="text"
              name="cep"
              mask="99999-999"
              placeholder="CEP"
              value={form.cep}
              onChange={(e) => {
                handleForm(e);
                handleCepChanges(e);
              }}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="state" 
              placeholder="Estado"
              value={form.state}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="city" 
              placeholder="Cidade"
              value={form.city}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="street" 
              placeholder="Rua"
              value={form.street}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="number" 
              placeholder="Número"
              value={form.number}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="neighborhood" 
              placeholder="Bairro"
              value={form.neighborhood}               
              onChange={handleForm}
            />
          </InputWrapper>

          <InputWrapper className='half-box'>
            <Input 
              type="text" 
              name="addressDetail" 
              placeholder="Complemento" 
              value={form.addressDetail}               
              onChange={handleForm}
            />
          </InputWrapper>

          <Button type='submit'>Salvar</Button>
        </Form>
      </Wrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  @media (max-width: 850px) {
    width: 95%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .full-box {
    flex: 1 1 100%;
    position: relative;
  }
    
  .half-box {
    flex: 1 1 45%;
    position: relative;
  }
`;

const InputWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items:center;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 8px;
  display: block;
  outline: none;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid #f8f9fa;
  background: none;
  font-size: 16px;
  :focus {
    border-color: #495057;
  }
`;

const InputMsk = styled(InputMask)`
  width: 100%;
  padding: 6px 8px;
  display: block;
  outline: none;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid #f8f9fa;
  background: none;
  font-size: 16px;
  :focus {
    border-color: #495057;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  color: #6c757d;
  background-image: #f8f9fa;
  cursor: pointer; 
  
  &:hover {
      opacity: .8;
  }
`;