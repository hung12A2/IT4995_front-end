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
  useDataProvider,
} from "react-admin";

const postFilters = [
  <div className="grid-cols-2 grid gap-x-2 ml-4" alwaysOn={true}>
    <TextInput label="idFrom" source="where.id.like" alwaysOn={true} value={'10'}/>
    <TextInput label="status" source="where.status.like" alwaysOn={true} value={`1000`}/>
  </div>,
];

export const ListProducts = (props) => {
  return (
    <List>
      <FilterForm
        defaultValues={{
          where: {
            status: {
              like: "active",
            },
          },
        }}
        filters={postFilters}
        {...props}
      ></FilterForm>
      <Datagrid>
        <TextField source="id" />
        <TextField source="status" />
        <TextField source="username" />
        <TextField source="permissions" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

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

export const CreateProduct = (props) => {
  const dataProvider = useDataProvider();

  return (
    <Create {...props}>
      <SimpleForm
        onSubmit={async (data) => {
          dataProvider.create("employees", { data: data });
        }}
      >
        <div className="grid grid-cols-3 w-full gap-x-4 px-3">
          <TextInput source="id" />
          <TextInput source="status" />
          <TextInput source="username" />
          <TextInput source="permissions" />
        </div>
      </SimpleForm>
    </Create>
  );
};
