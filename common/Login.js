import styled from 'styled-components';

export const Principal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 770px){
    background: linear-gradient(217deg, rgba(2, 175, 31, 0.1), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(3, 204, 161, 0.1), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(98, 204, 83, 0.1), rgba(0,0,255,0) 70.71%);
  }
`;

export const Contenido = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  form{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    h3{
      font-weight: bold;
      color: #1e8449;
      font-size: 25px;
    }
    input{
      position: absolute;
      width: 100px; 
    }
    input:focus ~ span, input:valid ~ span{
      transform: translateY(-10px);
      font-size: 12px;
      letter-spacing: 0;
      color: #575757;
    }
    span{
      position: absolute;
      transform: translateY(10px);
      font-size: 14px;
      letter-spacing:3px;
      transition: 0.5s;
      pointer-events: none;
    }
    button{
      width: 100%;
      height: 30px;
      border-radius: 6px;
      background: #03c754;
      color: #fff;
    }
    button:hover{
      background: #1e8449;
    }
  }

  @media screen and (max-width: 770px){
    width: 90%;
    form{
      width: 100%;
      height: 80vh;
      margin: auto;
      h3{
        font-size: 18px;
        text-align: center;
        letter-spacing: 3px;
      }
    }
  }
`;

export const Users = styled.div`
  width: 100%;
  height: 40vh;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 770px){
    display:none;
  }
`;

export const Slide = styled.div`
  width: 100%;
  background-image: url(https://image.freepik.com/vector-gratis/establecer-miembro-perfil-medios-sociales_24877-53571.jpg);
  background-size: contain;
  animation: animateSlide 120s linear infinite;
  position: relative;
  left: 100%;

  @keyframes animateSlide{
    0%{
        transform: translateX(0);
    }
    5%{
        transform: translateX(0);
    }
    45%{
        transform: translateX(-100%);
    }
    47.5%,50%{
        transform: translateX(-100%);
    }

  }

`;
