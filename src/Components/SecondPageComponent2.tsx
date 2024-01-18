import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const SecondPageComponent2 = () => {
  const [mainDeptChecked, setMainDeptChecked] = React.useState(
    Array(data.length).fill(false)
  );
  const [subDeptChecked, setSubDeptChecked] = React.useState(
    data.map(() => Array(data[0].sub_departments.length).fill(false))
  );

  const handleMainDeptChange = (index: number) => {
    setMainDeptChecked(prev => {
      const newMainDeptChecked = [...prev];
      newMainDeptChecked[index] = !newMainDeptChecked[index];
      return newMainDeptChecked;
    });

    setSubDeptChecked(prev => {
      const newSubDeptChecked = [...prev];
      newSubDeptChecked[index] = newSubDeptChecked[index].map(
        () => !newSubDeptChecked[index][0]
      );
      return newSubDeptChecked;
    });
  };

  const handleSubDeptChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    deptIndex: number,
    subDeptIndex: number
  ) => {
    const newSubDeptChecked = [...subDeptChecked];
    newSubDeptChecked[deptIndex][subDeptIndex] = event.target.checked;

    // If all sub-departments are checked, set the main department as checked
    if (newSubDeptChecked[deptIndex].every(isChecked => isChecked)) {
      setMainDeptChecked(prev => {
        const newMainDeptChecked = [...prev];
        newMainDeptChecked[deptIndex] = true;
        return newMainDeptChecked;
      });
    } else {
      // If any sub-department is unchecked, set the main department as unchecked
      setMainDeptChecked(prev => {
        const newMainDeptChecked = [...prev];
        newMainDeptChecked[deptIndex] = false;
        return newMainDeptChecked;
      });
    }

    setSubDeptChecked(newSubDeptChecked);
  };

  return (
    <div>
      {data.map((d, index) => (
        <div key={index}>
          <FormControlLabel
            label={d.department}
            control={
              <Checkbox
                checked={mainDeptChecked[index]}
                onChange={() => handleMainDeptChange(index)}
              />
            }
          />
          <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
            {d.sub_departments.map((subDept, subIndex) => (
              <FormControlLabel
                key={subIndex}
                label={subDept}
                control={
                  <Checkbox
                    checked={subDeptChecked[index][subIndex]}
                    onChange={event =>
                      handleSubDeptChange(event, index, subIndex)
                    }
                  />
                }
              />
            ))}
          </Box>
        </div>
      ))}
    </div>
  );
};

export default SecondPageComponent2;
