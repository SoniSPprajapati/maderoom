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
  } from "@heroui/react";
  
  function SignUp() {
    const onSubmit = (e) => {
      e.preventDefault();
  
      const data = Object.fromEntries(new FormData(e.currentTarget));
      console.log(data.name);
    };
  
    return (
      <div
        className="bg-lime-100 flex items-center justify-center min-h-screen 
    w-full"
      >
        <Card className="max-w-[300px]">
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
              <Button type="submit">Join</Button>
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
      </div>
    );
  }
  
  export default SignUp;