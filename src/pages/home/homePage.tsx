import { Button } from "@/root/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/root/ui/card";
import HeroSection from "./hero/HeroSection";

const HomePage = () => {
  return (
    <>
      <>
        <HeroSection></HeroSection>
      </>
      <h1>Welcome to the HomePage!</h1>

      <Button className="bg-slate-900 text-white">Click here</Button>

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomePage;
