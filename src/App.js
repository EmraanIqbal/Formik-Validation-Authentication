import {
  Box,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Input, Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon } from "@chakra-ui/icons";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import "./App.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(20, "Too Long")
    .required("Must Enter Name"),
  email: Yup.string()
    .email("Invalid Email")
    .min(2, "Too Short")
    .max(20, "Too Long")
    .required("required"),
});

// const validationSchema = yup.
function App() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirm: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("alert!");
          console.log(values);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Box mt="100">
              <Container>
                <Box
                  border="1px solid #EDF2F7"
                  p="10"
                  boxShadow="xl"
                  borderRadius="5"
                >
                  <Flex>
                    <Heading mb="50">Registeration Form</Heading>
                    <Spacer />
                    <Button onClick={toggleColorMode}>
                      <MoonIcon />
                    </Button>
                  </Flex>

                  <Stack spacing="5">
                    <Input
                      placeholder="Enter your name"
                      name="name"
                      type="text"
                      id="name"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    <Input
                      placeholder="Enter your Email"
                      name="email"
                      type="text"
                      id="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Enter your Password"
                      name="password"
                      type="password"
                      id="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Confirm Your Password"
                      name="confirm"
                      type="password"
                      id="text"
                      value={values.confirm}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <Button w="40%" colorScheme="blue" type="submit">
                      Sign up
                    </Button>
                  </Stack>
                </Box>
              </Container>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
