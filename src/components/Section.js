import React from 'react'
import styled from 'styled-components'


function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </ItemText>
      <Bottons>
        <BottonGroup>
          <LeftBotton>
            { leftBtnText }
          </LeftBotton>
            {rightBtnText &&
              <RightBotton>
                { rightBtnText }
              </RightBotton>
            }
        </BottonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Bottons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const BottonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftBotton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`

const RightBotton = styled(LeftBotton)`
  background-color: white;
  opacity: 0.65;
  color: #000;
`

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`

const Bottons = styled.div`

`
