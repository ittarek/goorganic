import  { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


const SecondPage = () => {
 const [userData, setUserData] = useState<Users[]>([]);
type Users = {
          completed: boolean;
          id: number;
          title: string;
          userId: number;
        }
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        // console.log(data);
      });
  }, []);
 const columns: GridColDef[] = [
   { field: "userId", headerName: "User ID", width: 120 },
   { field: "title", headerName: "Title", width: 200 },
   { field: "completed", headerName: "Completed", width: 120 },
 ];
  const rows = userData.map(data => ({
    id:data.id,
    userId: data.userId,
    title: data.title,
    completed: data.completed.toString(),
    // userId: data.userId,
  }));
  const getData = localStorage.getItem("userDetails");
  if(getData){
    const data = JSON.parse(getData)
      }

  
  
  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default SecondPage;
