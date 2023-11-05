import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const tarih = new Date(taskObj.deadline);
  const kalanGun = formatDistanceToNow(tarih, {
    addSuffix: true,
    locale: tr,
  });

  const accentClass =
    differenceInDays(tarih, new Date()) <= 3 ? "normal" : "urgent";

  console.log(taskObj.deadline, differenceInDays(tarih, new Date()));

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span className={accentClass}>{kalanGun}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-[5px] px-3 " key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
