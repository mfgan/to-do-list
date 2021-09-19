import ConvertText from "../utils/CapitalText";
import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";
import InputComponent from "./InputComponent";
const ListCard = ({ title, data, index, complete, completed,deleteTask,editTasks }) => {
  console.log("completed: ", completed);
  const [open, SetOpen] = useState(false);
  const [error, SetError] = useState(false);
  const [popUpData, SetPopUpData] = useState({
    open: false,
    name: "",
    desc: "",
    acton:"",
  });
  const [editData, SetEditData] = useState({
    open: false,
    name: "",
    desc: "",
  });
  useEffect(() => {
    setInterval(() => SetError(false), 5000);
  }, [error]);
  return (
    <>
      <div className="listCardContainer">
        <h4>{title}</h4>
        {completed ? (
          <hr className="line-through" />
        ) : (
          data&& <div onClick={() => SetOpen(!open)} className="dots" />
        )}
        {open && (
          <div
            tabIndex={index}
            onBlur={() => SetOpen(false)}
            onMouseLeave={() => SetOpen(false)}
            className="dropDownContainer"
          >
            {data.map((w) => {
              return (
                <div
                  onClick={() => {
                    if (w.edit) {
                      SetEditData({
                        open: true,
                        name: title,
                        acton:w.name
                      });
                      SetPopUpData({
                        ...popUpData,
                        name: title,
                        acton:w.name
                      });
                      SetOpen(false)
                      // return
                    } else {
                      SetPopUpData({
                        open: true,
                        name: title,
                        desc: `Do you want to ${w.name} this ${title} ?`,
                        acton:w.name
                      });
                      SetOpen(false);
                    }
                  }}
                >
                  {ConvertText(w.name)}
                </div>
              );
            })}
          </div>
        )}
      </div>
      {popUpData.open && (
        <PopUp
          disableOkBtn={error}
          title={popUpData.name}
          description={popUpData.desc}
          CloseBtn={() => {
            SetPopUpData({
              open: false,
            });
          }}
          okBtn={() => {
            popUpData.acton==='delete'?deleteTask() :complete();
            SetPopUpData({
              open: false,
            });
          }}
        />
      )}
      {editData.open && (
        <PopUp
          disableOkBtn={error}
          title={popUpData.name}
          description={
            <InputComponent
              title="Tasks"
              onChange={(e) =>
                SetEditData({
                  ...editData,
                  name: e.target.value,
                })
              }
              value={editData.name}
              errorText={error && "Please Provide input value"}
            />
          }
          CloseBtn={() => {
            SetEditData({
              open: false,
            });
          }}
          okBtn={() => {
            editTasks(editData.name)
            SetEditData({
              open: false,
            });
          }}
        />
      )}
    </>
  );
};

export default ListCard;
