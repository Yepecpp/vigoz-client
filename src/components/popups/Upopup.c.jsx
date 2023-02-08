import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosClient } from '../../libs/axios';
import { Button, Select, MenuItem, TextField, Box } from '@mui/material';
import { Formik, useFormik, ErrorMessage } from 'formik';
import moment from 'moment';
const Upopup = ({ Fstate, isOpened, SetisOpened, QueryKey }) => {
  if (!isOpened) return null;
  const Dstate = Fstate();
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
            <Box className="info_popup">
              {ConvertData(Formikh.values, false).map((item, index) => {
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
function ConvertData(data, cameFromObject = false) {
  return Object.keys(data).map((key) => {
    if (typeof data[key] === 'object' && !(data[key] instanceof Date)) {
      return {
        key: key,
        type: typeof data[key],
        value: ConvertData(data[key], true),
        header: key,
      };
    }
    if (cameFromObject) {
      return {
        key: key,
        type: data[key] instanceof Date ? 'date' : typeof data[key],
        value: data[key],
        header: key,
      };
    }
    return {
      key: key,
      type: data[key] instanceof Date ? 'date' : typeof data[key],
      value: data[key],
      header: key,
    };
  });
}
function RenderData(item, index, Formikh) {
  if (item.key === 'id') return null;
  if (item.type === 'string') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={item.value}
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
          value={item.value}
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
          value={item.value}
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
  if (item.type === 'array') {
    return (
      <Box key={index} className="info_popup">
        <Select
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={item.value}
        >
          {item.value.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
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

  if (item.type === 'date') {
    return (
      <Box key={index} className="info_popup_ext">
        <label htmlFor={item.key}>{item.header}</label>
        <TextField
          name={item.key}
          onChange={Formikh.handleChange}
          onBlur={Formikh.handleBlur}
          value={moment(item.value).format('yyyy-MM-DD')}
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

  if (item.type === 'object') {
    return (
      <Box key={index} className="info_popup">
        {Object.keys(item.value).map((key, index) =>
          RenderData(
            {
              ...item.value[key],
              key: item.key + '.' + item.value[key].key,
              header: item.value[key].key,
            },
            index,
            Formikh
          )
        )}
      </Box>
    );
  }
}
export default Upopup;
