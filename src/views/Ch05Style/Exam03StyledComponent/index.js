import Button from "./Button";
import Box from "./Box";

function Exam03StyledComponent(props) {
  return (
    <div className="card">
      <div className="card-header">
        Exam03StyledComponent
      </div>
      <div className="card-body">
        <Box>
          Box 컴포넌트입니다.
          <Button>버튼1</Button>
          <Button inverted={true}>버튼2</Button>
        </Box>
      </div>
    </div>
  );
}

export default Exam03StyledComponent;