import styled from 'styled-components';

const Nav = styled.nav`
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    font-size: 2rem;
    margin-right:40px;
  }

  .main-header {
    display:flex;
  }

  .search-header {
    padding: 10px 0;
  }
`;

export default Nav;
