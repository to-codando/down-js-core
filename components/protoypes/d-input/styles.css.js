export default ({ css }) => css`
  #ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
    font-size: 1em;
    position: relative;
  }

  #ctx input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 1.6rem;
    background: #fff;
    font-size: 1em;
    border-radius: 16px;
    border: 2px #e9e9ed solid;
    outline: none;
    transition: all 0.3s ease-in-out;
    color: #8c8b92;
    font-weight: 600;
  }

  #ctx input::placeholder {
    font-size: 0;
  }

  #ctx input:focus {
    background: #fff;
    box-shadow: 0 5px 10px #cec7d9;
    border: 2px #6c28e1 solid;
    color: #5a5862;
  }

  #ctx input:disabled {
    background: #fafafa;
    border-color: #ccc;
  }

  #ctx input + i {
    display: none;
  }

  #ctx input:disabled + .icon-disabled {
    display: block;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    color: #aaa4a4;
    font-size: 1.3em;
  }

  #ctx .success {
    border-color: #99ffe3;
    background: #f2fffc;
  }
  #ctx .success:focus {
    box-shadow: 3px 3px 15px #d1e2de;
  }

  #ctx .success + .icon-disabled {
    display: none;
  }

  #ctx .error {
    border-color: #ffadce;
    background: #fff6fa;
  }
  #ctx .error:focus {
    box-shadow: 3px 3px 15px #f1dfe7;
  }

  #ctx .error + .icon-disabled {
    display: none;
  }

  #ctx span {
    display: flex;
    font-size: 0.875em;
    width: auto;
    position: absolute;
    top: 50%;
    left: 1.6rem;
    transform: translateY(-50%);
    transition: all 0.1s ease;
    color: #e9e9ed;
  }

  #ctx input:not(:placeholder-shown) + i + span,
  #ctx input:focus + i + span {
    top: 0;
    left: 1.1rem;
    background: #fdfcff;
    padding: 0 0.5rem;
    font-size: 0.75em;
    font-weight: 400;
    color: #a0a0b3;
  }

  #ctx input:focus:not(:placeholder-shown) + i + span,
  #ctx input:focus + i + span {
    color: #6c28e1;
  }

  #ctx .error-message {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 1.8em;
    color: #ff4b4b;
    background: #fff0f0;
    position: absolute;
    z-index: 10;
    top: -12px;
    right: 1em;
    border-radius: 12px;
    padding: 0 1rem;
    font-size: 0.875em;
  }

  #ctx input.input-error {
    border-color: #ff4b4b;
  }

  #ctx input.input-error:focus + i + span,
  #ctx input.input-error + i + span {
    color: #ff4b4b;
  }
`
