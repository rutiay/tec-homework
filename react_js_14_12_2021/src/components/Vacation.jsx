import { useState } from "react";

const Vacation = () => {
  let [vacation, setVacation] = useState("");
  let [currentList, setCurrentList] = useState([]);
  let [vacationList, setVacationList] = useState([]);
  let [completedVacationList, setCompletedVacationList] = useState([]);
  let [activeVacationList, setActiveVacationList] = useState([]);
  const [
    { isDisabledAll, isDisabledActive, isDisabledCompleted },
    setIsDisabled,
  ] = useState(false);

  const addVacation = () => {
    if (vacation) {
      const arr = [...vacationList];
      if (
        !arr.find(
          (item) => item.vacation.toLowerCase() === vacation.toLowerCase()
        )
      ) {
        const newVacation = { vacation: vacation, isCompleted: false };
        arr.push(newVacation);
        setVacationList((vacationList = arr));
        setCurrentList((currentList = arr));
      }
    }
  };

  const addToCompletedVacationList = (index) => {
    const completedVacation = vacationList[index];
    completedVacation.isCompleted = true;
    const arr = [...completedVacationList];
    if (!arr.find((item) => item.vacation === completedVacation.vacation)) {
      arr.push(completedVacation);
      setCompletedVacationList((completedVacationList = arr));
    }
  };

  const addToActiveVacationList = () => {
    const arr = vacationList.filter((vacation) => !vacation.isCompleted);
    setActiveVacationList((activeVacationList = arr));
  };

  return (
    <div className="Vacation">
      <input
        type="text"
        onChange={(event) => setVacation((vacation = event.target.value))}
      ></input>
      <button onClick={() => addVacation()}>Add Vacation</button>
      <ol>
        {currentList.map((vacation, index) => (
          <li
            key={index}
            style={{
              textDecoration: vacation.isCompleted ? "line-through" : "none",
            }}
            onClick={() => {
              addToCompletedVacationList(index);
            }}
          >
            {vacation.vacation}
          </li>
        ))}
      </ol>
      <button
        onClick={() => {
          setCurrentList((currentList = vacationList));
          setIsDisabled({
            isDisabledAll: !isDisabledAll,
            isDisabledActive: false,
            isDisabledCompleted: false,
          });
        }}
        disabled={isDisabledAll}
      >
        All
      </button>
      <button
        onClick={() => {
          addToActiveVacationList();
          setCurrentList((currentList = activeVacationList));
          setIsDisabled({
            isDisabledAll: false,
            isDisabledActive: !isDisabledActive,
            isDisabledCompleted: false,
          });
        }}
        disabled={isDisabledActive}
      >
        Active
      </button>
      <button
        onClick={() => {
          setCurrentList((currentList = completedVacationList));
          setIsDisabled({
            isDisabledAll: false,
            isDisabledActive: false,
            isDisabledCompleted: !isDisabledCompleted,
          });
        }}
        disabled={isDisabledCompleted}
      >
        Completed
      </button>
    </div>
  );
};

export default Vacation;
