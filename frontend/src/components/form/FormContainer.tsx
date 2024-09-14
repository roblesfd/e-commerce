import { Formik } from "formik";
import { Children, isValidElement, ReactNode } from "react";
import { filterChildrenByName } from "../../utils/dataFormatFunctions";

const generateInitialValues = (
  inputList: ReactNode[]
): Record<string, string> => {
  const initialValuesList: Record<string, string> = {};
  inputList.forEach((input) => {
    if (isValidElement(input) && input.props.inputName) {
      initialValuesList[input.props.inputName] = "";
    }
  });
  return initialValuesList;
};

interface FormContainerProps {
  children: ReactNode;
  checkoutSchema?: object;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  checkoutSchema,
}) => {
  const childrenArray = Children.toArray(children);
  const header = filterChildrenByName("FormHeader", childrenArray)[0];
  const inputList = filterChildrenByName("FormInput", childrenArray);
  const footer = filterChildrenByName("FormFooter", childrenArray)[0];

  const initialValues = generateInitialValues(inputList);

  const onSaveUserClicked = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <div className="max-w-md w-full  px-8 py-8 bg-white dark:bg-primary-800">
      <>
        {isValidElement(header) && header}
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={onSaveUserClicked}
        >
          {(formik) => {
            return (
              <form onSubmit={formik.handleSubmit}>
                {inputList.map((input) => isValidElement(input) && input)}
                {isValidElement(footer) && footer}
              </form>
            );
          }}
        </Formik>
      </>
    </div>
  );
};

export default FormContainer;
