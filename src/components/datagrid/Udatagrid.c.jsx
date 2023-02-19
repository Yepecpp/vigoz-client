import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
const Udatagrid = ({ data, name }) => {
  return (
    <Box style={{ height: '70vh' }} className="w-datagrid">
      <Typography variant="h4">{name}</Typography>
      <br />
      <DataGrid {...data} treeData={true} />
    </Box>
  );
};

export default Udatagrid;
