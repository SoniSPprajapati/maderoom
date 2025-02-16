import { useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Input,
  Button,
  Form,
  Spinner,
} from "@heroui/react";
import { useEffect } from "react";

function SignUp({ setUser, socket }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setLoading(false);

    if (user) {
      setUser(user);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Update parent state
    socket.emit("user", data.name);
    setUser(data.name);
    sessionStorage.setItem("user", data.name);
  };

  return (
    <div
      className="bg-gradient-to-br from-emerald-200 via-green-100 to-lime-200 flex items-center justify-center min-h-screen 
  w-full"
    >
      {loading ? (
        <Spinner />
      ) : (
        <Card className="max-w-[300px] bg-transparent">
          <CardHeader className="flex gap-3">
            <Image
              alt="maderoom logo"
              height={40}
              radius="sm"
              src="favicon.ico"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">MADE Room</p>
              <p className="text-small text-default-500">made.phleebs.tech</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Form onSubmit={onSubmit} validationBehavior="native">
              <Input
                isRequired
                errorMessage="Please enter a name"
                label="Name"
                labelPlacement="outside"
                name="name"
                placeholder="Enter your name"
                type="text"
                autoComplete="off"
              />
              <Button type="submit" className="bg-emerald-400">
                Join
              </Button>
            </Form>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/shantanuuchak/made"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default SignUp;