import styled from 'styled-components';
import { globalColor } from '../../styles/roots';
import rocket from '../../assets/rocket.gif';

export const Herofon = styled.div`
  /* background: url('https://s3-alpha-sig.figma.com/img/3cd6/97b3/9e47d0d84e92c6e6acbf4b71504241e9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kGHaDahKmCkTwNkCj~ZqQvsaY64Jc6tJh-S-O7hje~7emm6EAv9Nvv6BOXDsSXawCStbm8nieBoq69OLuheNfTNCHB6l8WtS2sXzG~KTBg9CNwOqw5xqLGdqSadsu9rNiTT2zrbp63ZX7rhu8CMEAfULNi7NDATEzvdaeZnAgohk4cC~qwWFcBvQbW-YofHkz7kyyBpVEuRSI8fyLxi4HxJfILSw0kaWBDFWr7Z-oZaMQdhpE8D37yE8GC~5Jf5vHTT13POUKyoSA4LE7rE4IhVUdhQS2Cv3RKASG5OiTkoerDYIBpE~R5kjULkvbclnqSj0ZbUrMnPfERfWV6I6mw__'); */
  background-image: url(${rocket});
  background-repeat: no-repeat;
  background-size: 130%;
  background-position-x: -15%;
  background-position-y: 60%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  width: 100%;
  height: 653px;
  padding: 0 32px;
  > div {
    display: flex;
    align-items: center;
    gap: 32px;
  }
`;
export const Title = styled.h1`
  width: 580px;
  font-weight: 700;
  font-size: 100px;
  text-transform: uppercase;
  color: ${globalColor.colorWhite};
  margin-top: 148px;
  margin-bottom: 83px;
`;
export const SvgStyled = styled.svg`
  fill: ${globalColor.colorWhite};
  width: 33.02px;
  height: 33px;
`;
export const Line = styled.div`
  height: 5px;
  width: 1191px;
  background: linear-gradient(-90deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  /* transform: rotate(-90deg); */
`;
