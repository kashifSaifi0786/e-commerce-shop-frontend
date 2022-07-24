import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Announcement = () => {
  return <Container>Sunday dhamaka sale! cheepest prices ever.</Container>;
};

export default Announcement;
