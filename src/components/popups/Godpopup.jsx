import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../../libs/axios';
import { Button, Select, MenuItem, TextField, Box } from '@mui/material';
import { Formik, useFormik, ErrorMessage } from 'formik';
import UserPopup from './user.p';
import moment from 'moment';
const Godpopup = ({ Structure, Dstate, isOpened, SetisOpened, QueryKey }) => {
  if (!isOpened) return null;
  const queryClient = useQueryClient();
  const stateMutation = useMutation({
    mutationFn: async (newData) => {
      const axios = AxiosClient();
      // string fn that removes last character
      const stateSingular = QueryKey[0].slice(0, -1).toLowerCase();
      const response = await (newData.id
        ? axios.put('/' + QueryKey[0], {
            [`${stateSingular}`]: newData,
          })
        : axios.post('/' + QueryKey[0], {
            [`${stateSingular}`]: newData,
          }));
      return response.data;
    },
    onSuccess: (values) => {
      queryClient.invalidateQueries([...QueryKey, values.id]);
      SetisOpened(false);
    },
  });
  const Formikh = useFormik({
    initialValues: {
      ...Dstate,
    },
    onSubmit: async (values, { resetForm }) => {
      stateMutation.mutate(values);
      if (stateMutation.isSuccess) {
        SetisOpened(false);
        resetForm();
      }
    },
  });
  return (
    <Formik>
      <div className="container_popupClient">
        <form onSubmit={Formikh.handleSubmit} className="container_form">
          <div className="popup_client">
            {Formikh.values?.id ? (
              <h1>
                Edit {QueryKey[0]}: {Formikh.values?.name}
              </h1>
            ) : (
              <h1>Create New {QueryKey[0]}</h1>
            )}
            <Box className="info_popup container_popup">
              {Structure.map((item, index) => {
                return RenderData(item, index, Formikh);
              })}
            </Box>
            <span className="close" onClick={() => SetisOpened(false)}>
              &times;
            </span>
          </div>
          <Button type="submit" variant="contained" color="success">
            Guardar
          </Button>
        </form>
      </div>
    </Formik>
  );
};
function RenderData(item, index, Formikh) {
  const keys = item.key.split('.');
  if (item.key === 'id')
    return Formikh.values[item.key] ? (
      <h1>
        {item.header}: {Formikh.values[item.key]}
      </h1>
    ) : null;
  if (item.type === 'text') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={Formikh.values[keys[keys.length - 1]]}
        />
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }
  if (item.type === 'password') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={Formikh.values[keys[keys.length - 1]]}
          type="password"
        />
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }
  if (item.type === 'number') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={Formikh.values[keys[keys.length - 1]]}
          type="number"
        />
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }
  if (item.type === 'boolean') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <Select
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={Formikh.values[keys[keys.length - 1]]}
        >
          <MenuItem value={true}>True</MenuItem>
          <MenuItem value={false}>False</MenuItem>
        </Select>
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }
  if (item.type === 'user') {
    return (
      <UserPopup keys={keys} item={item} Formikh={Formikh} index={index} />
    );
  }
  if (item.type === 'date') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={moment(Formikh.values[keys[keys.length - 1]]).format(
            'yyyy-MM-DD'
          )}
          type="date"
        />
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }

  if (item.type === 'select') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <Select
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={Formikh.values[keys[keys.length - 1]]}
        >
          {item.enums.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.header}
            </MenuItem>
          ))}
        </Select>
        <ErrorMessage
          name={item.key}
          component={() => (
            <div className="error">{Formikh.errors[item.key]}</div>
          )}
        />
      </Box>
    );
  }

  if (item.type === 'object') {
    return (
      <div className="container_structure">
        <h3>{item.header}</h3>
        <Box key={index} className="info_popup object">
          {item.value.map((val, index) =>
            RenderData(
              {
                ...val,
                key: `${item.key}.${val.key}`,
              },
              index,
              { ...Formikh, values: Formikh.values[keys[keys.length - 1]] }
            )
          )}
        </Box>
      </div>
    );
  }
}
export default Godpopup;
