const { default: ComAClassTypeEventHandling } = require("./ComAClassTypeEventHandling");
const { default: ComBFunTypeEventHandling } = require("./ComBFunTypeEventHandling");

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
      </div>
    </div>
  );
}

export default Exam06EventHandling;