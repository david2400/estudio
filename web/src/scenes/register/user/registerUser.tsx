import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Input, Radio, Button, Textarea } from "@material-tailwind/react";
const Register = () => {
  const intl = useIntl();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form action="" className="w-full p-3">
      <div className="flex grid grid-cols-12 gap-1">
        <div className="lg:col-span-6 col-span-12 my-2">
          <Input
            id="name"
            name="name"
            size="lg"
            label={intl.formatMessage({ id: "name" })}
            error={false}
          />
        </div>
        <div className="lg:col-span-6 col-span-12 my-2">
          <Input
            id="lastName"
            name="lastName"
            size="lg"
            label={intl.formatMessage({ id: "lastName" })}
            error={false}
          />
        </div>
        <div className="col-span-12 my-2">
          <Input
            id="email"
            name="email"
            size="lg"
            label={intl.formatMessage({ id: "email" })}
            error={false}
          />
        </div>

        <div className="col-span-12 my-2">
          <Input
            id="password"
            name="password"
            type="password"
            size="lg"
            label={intl.formatMessage({ id: "password" })}
          />
        </div>

        <div className="col-span-12 my-2">
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            size="lg"
            label={intl.formatMessage({ id: "confirmPassword" })}
          />
        </div>
        <div className="col-span-12">
          <label className="text-lg font-bold text-gray-600">
            <FormattedMessage id="gender" defaultMessage="Male" />
          </label>
          <Radio
            id="male"
            name="gender"
            label={intl.formatMessage({ id: "male" })}
          />
          <Radio
            id="gender"
            name="gender"
            label={intl.formatMessage({ id: "female" })}
          />
        </div>
        <div className="col-span-12 my-3">
          <input
            type="submit"
            id="signUp"
            className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm"
          ></input>
        </div>
      </div>

      <p className="text-md">
        Already have a account?
        <a href="#" className="text-blue-600 px-2">
          Login
        </a>
      </p>
    </form>
  );
};

export default Register;
