import styled from 'styled-components';

import { useState, useEffect, useRef, ChangeEvent} from 'react';
import {DebounceInput} from 'react-debounce-input';
import { TfiSearch } from 'react-icons/tfi';

import { SearchResults } from './SearchResults';
import { getProducts } from '../../services/productsApi';

export function SearchBar() {
  const searchRef = useRef(null);
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current !== null && e !== null) {
        const target = e.target;
        if (!searchRef?.current.contains(target)) {
          setProducts([]);
          setHidden(true);
        }
      }
    };

    document.addEventListener('mousedown', handler);
  }, []);
 
  useEffect(() => {
    const promise = getProducts(keyword);
    promise.then((res => {
      setProducts(res);
    }));
    promise.catch(() => setProducts([]));
  }, [keyword]);

  function sendForm () {
    const promise = getProducts(keyword);
    
    promise.then((res => {
      setProducts(res);
      setHidden(false);
    }));
    promise.catch(() => setProducts([]));   
  };

  return (
    <Wrapper ref={searchRef}>
      <Form>
        <Input
          minLength={3}
          debounceTimeout={300}
          type='text'
          placeholder='Pesquisar'
          value={keyword} 
          onChange={(e) => {
            setKeyword(e.target.value);
            setHidden(false);
          }}
        />
        
        <Search onClick={() => sendForm()}/>       
        <SearchResults hidden={hidden} products={products}/> 
      </Form>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled(DebounceInput)`
  width: 90%;
  padding: 6px 8px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background: #f8f9fa;
  color: #f8f9fa;
  font-family: 'Raleway', sans-serif;
  ::placeholder {
  color: #343a40;
  }
  :focus {
    border: 1px solid #f8f9fa;
  }
`;

const Search = styled(TfiSearch)`
  margin-left: 10px;
  font-size: 22px;
  cursor: pointer;
  :hover {
      opacity: .8;
  }
`;