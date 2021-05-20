import ComAClassTypeEventHandling from "./ComAClassTypeEventHandling";
import ComBFunTypeEventHandling from "./ComBFunTypeEventHandling";
import ComCTwoWayBinding from "./ComCTwoWayBinding";

function Exam06EventHandling() {
  return (
    <div className="card">
      <div className="card-header">
        Exam06EventHandling
      </div>
      <div className="card-body">
        {/* 스위칭x */}
        <ComAClassTypeEventHandling />
        <div className="m-2"></div>
        <ComBFunTypeEventHandling />
        <div className="m-2"></div>
        <ComCTwoWayBinding />
      </div>
    </div>
  );
}

export default Exam06EventHandling;