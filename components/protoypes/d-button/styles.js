export default ({ css }) => css`
  [ctx] {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    background: transparent;
    border-radius: 12px;
  }

  [ctx] > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 12px;
    border: 2px #ebebeb solid;
    font-size: calc(1em + 1px);
    font-family: 'Roboto Flex', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #666;
    background: #f9f9f9;
    box-shadow: 3px 3px 5px #ece6ff;
    transition: all 0.3s ease, top 0.2s ease;
    cursor: pointer;
    position: relative;
    top: 0;
    left: 0;
  }

  [ctx] > button:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 3px 3px 5px #e1d8ff;
  }

  [ctx][primary] > button {
    border: 2px #6c28e1 solid;
    color: #6c28e1;
    background: #fff;
  }

  [ctx][primary] > button:hover {
    border: 2px #561db7 solid;
    color: #e1d8ff;
    background: #6c28e1;
  }

  [ctx][danger] > button {
    border: 2px #e9e9ed solid;
    color: #5a5862;
    background: #fff;
  }

  [ctx][danger] > button:hover {
    border: 2px #e12841 solid;
    color: #e12841;
    background: #fff;
  }

  [ctx] > button[disabled],
  [ctx] > button[disabled]:hover {
    border: 2px #e9e9ed solid;
    color: #b9b8c1;
    background: #f6f6f6;
    cursor: not-allowed;
    box-shadow: none;
  }
`
