import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
  FilterForm,
} from "react-admin";

const postFilters = [
  <div className="grid-cols-2 grid gap-x-2 ml-4" alwaysOn={true}>
    <TextInput
      label="id"
      source="where.id"
      alwaysOn={true}
    />

    <TextInput
      label="status"
      source="where.status"
      alwaysOn={true}
    />
  </div>,
];

const ListToolbar = () => <FilterForm filters={postFilters} />;

export const listProducts = (props) => (
  <List {...props} className="">
    <ListToolbar />
    <Datagrid>
      <TextField source="id" />
      <TextField source="status" />
      <TextField source="username" />
      <TextField source="permissions" />
      <EditButton />
    </Datagrid>
  </List>
);

export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <div className="grid grid-cols-3 w-full gap-x-4 px-3">
        <TextInput source="id" />
        <TextInput source="status" />
        <TextInput source="username" />
        <TextInput source="permissions" />
      </div>
    </SimpleForm>
  </Edit>
);

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <div className="grid grid-cols-3 w-full gap-x-4 px-3">
        <TextInput source="id" />
        <TextInput source="status" />
        <TextInput source="username" />
        <TextInput source="permissions" />
      </div>
    </SimpleForm>
  </Create>
);
