import { orders } from "./routes";
import DataTable from "usereactable"

const Data = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 170 },
    { field: "orderDate", headerName: "Order Date", width: 270 },
    {
      field: "orderItems",
      headerName: "Order Items",
      width: 270,
      renderCell: (param) => {
        return (
          <div onClick={()=>console.log(param)}>
            {param.orderItems?.map((p,i) => (
              <p  key={i}>{p.product}</p>
            ))}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable
        searchAble={false}
        cols={columns}
        data={orders}
        title="Orders Table"
      />
    </div>
  );
};

export default Data;
