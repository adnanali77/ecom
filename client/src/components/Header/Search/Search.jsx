import SearchIcon from '@mui/icons-material/Search';
import { getProduct } from '../../../Service/api.js';
import './Search.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List, ListItem, Box, styled } from '@mui/material';

const ListWrapper = styled(List)`
  position: absolute;
  top: 5px;
  color: #000;
  background: #FFFFFF;
  margin-top: 50px;
`;

const Search = ({products}) => {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true);

  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  const afterSearch = () => {
    setText('');
    setOpen(true);
  }
  
  return (
    <div className='mainSearch'>
      <div className='searchItem'>
        <input 
          placeholder='Search for Products, Brands and More...'
          onChange={(e) => getText(e.target.value)}
          value=''
        />
        <SearchIcon className='searchIcon'/>
        {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(prdt => (
                    <ListItem>
                      <Link 
                        to={`/product/${prdt.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        // onClick={() => }
                        onClick={afterSearch}  
                      >
                        {prdt.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
      </div>
      
    </div>
  )
}

export default Search