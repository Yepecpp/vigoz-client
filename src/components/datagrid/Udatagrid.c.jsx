import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
const Udatagrid = ({ data, name }) => {
  return (
    <Box style={{ height: '70vh' }}>
      <Typography variant="h4">{name}</Typography>
      <DataGrid {...data} treeData getTreeDataPath={(row) => row.path} />
    </Box>
  );
};

export default Udatagrid;
