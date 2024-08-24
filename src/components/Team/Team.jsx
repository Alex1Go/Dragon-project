import { Text, Title } from './Team.styled';
import TeamSlider from '../TeamSlider/TeamSlider';

const Team = () => {
  return (
    <>
      <section
        style={{
          // paddingBottom: '100px',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div style={{ marginRight: '20px' }}>
          <Title>Team</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis
            metus id, congue semper neque. Sed suscipit eget ipsum ut gravida.
            Fusce
          </Text>
        </div>
        <TeamSlider />
      </section>
    </>
  );
};
export default Team;
