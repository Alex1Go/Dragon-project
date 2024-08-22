import { List, Number, Text } from './Total.styled';

const Total = () => {
  return (
    <>
      <div style={{ paddingBottom: '100px' }}>
        <List>
          <li>
            <Number>43</Number>
            <Text>TOTAL LAUNCHES</Text>
          </li>
          <li>
            <Number>46</Number>
            <Text>VISITS TO THE ISS</Text>
          </li>
          <li>
            <Number>25</Number>
            <Text>TOTAL REFLIGHTS</Text>
          </li>
        </List>
      </div>
    </>
  );
};
export default Total;
