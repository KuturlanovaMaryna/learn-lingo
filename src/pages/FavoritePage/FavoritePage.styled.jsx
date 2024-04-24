import styled from 'styled-components';

export const FavoritesPageStyles = styled.section`
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 85vh;
`;
export const Container = styled.div`
  max-width: 1440px;
  padding-left: 128px;
  padding-right: 128px;
  margin-left: auto;
  margin-right: auto;

  .li {
    border: 1px solid black;
    border-radius: 12px;
    padding: 4px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 38px;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
`;
export const AditionalText = styled.p`
  text-align: center;
  font-size: 34px;
  margin-top: 50px;
  color: rgba(52, 112, 255, 1);
`;
