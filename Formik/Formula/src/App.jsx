import "./App.css";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
const nameSchema = Yup.string()
  .required("name is required")
  .min(3, "the name must be at least ")
  .max(42, "the name must be at most 42");
const Irvs = Yup.object({
  name: nameSchema,
  address: Yup.array(Yup.string("address must be string"))
    .required()
    .min(1, "whats your address")
    .max(4, "long ahh address"),
  email: Yup.string().email().required("email is required"),
  message: Yup.string().max(400, "the message must be .."),
  serverDetails: Yup.object({
    name: nameSchema,
    badgeNumber: Yup.number().test({
      message: " the badge number must be in four digits",
      test: (val) => {
        if (val.toString().length <= 4) return true;
        return false;
      },
    }),
  }),
});

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        address: [""],
        email: "",
      }}
      validationSchema={Irvs}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="form">
        <Field className="" placeholder="name" name="name" type="text" />
        <ErrorMessage component="p" name="name" className="error-message" />
        <FieldArray
          name="address"
          render={({ form, push, remove }) => (
            <>
              {form.values.address.map((_, i) => (
                <div className="address" key={i}>
                  <Field
                    className=""
                    placeholder={"address number" + i}
                    name={"address" + i}
                    type="text"
                  />
                  <button type="button" onClick={() => remove(i)}>
                    -
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => push("")}>
                +
              </button>
            </>
          )}
        />
      </Form>
    </Formik>
  );
}

export default App;
