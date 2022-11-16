export default ({ css }) => css`
  #ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    position: relative;
    font-size: 1em;
  }

  #ctx input {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 1.6rem;
    background: #faf8ff;
    font-size: 1em;
    border-radius: 12px;
    border: 1px #cdbbec solid;
    outline: none;
    transition: all 0.3s ease-in-out;
    color: #8a79a9;
  }

  #ctx input::placeholder {
    font-size: 0;
  }

  #ctx input:focus {
    background: #fff;
    box-shadow: 3px 3px 15px #ede3ff;
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
    transition: all 0.2s ease;
    color: #8a79a9;
  }

  #ctx input:not(:placeholder-shown) + i + span,
  #ctx input:focus + i + span {
    top: -15px;
    left: 0;
    background: none;
    padding: 0;
    font-size: 0.875em;
    font-weight: 400;
    border-radius: 8px;
  }
`
