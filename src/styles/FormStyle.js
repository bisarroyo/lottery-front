import styled from 'styled-components'

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 30px 0;

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 50%;
    height: 100%;
    padding: 30px;
    margin: 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .link {
    text-decoration: none;
    color: #000;
  }

  .text-danger {
    color: red;
    margin: 5px 0;
  }
`

export default FormStyle
