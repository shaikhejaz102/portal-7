import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./step8.css";
const Step8 = () => {
  return (
    <div className="step-8">
      <img className="union-icon" alt="" src="/union.svg" />
      <div className="someone-from-our" />
      <Button className="button" variant="primary">
        Okay
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step8;
