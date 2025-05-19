"use client";
import UsersList from "@/ui/components/users";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { RiShutDownLine } from "react-icons/ri";
import { Navbar } from "@/ui/components/navbar/navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Container>
        <Typography variant="h3" component="div" className="text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus, urna id rutrum feugiat, odio nibh sollicitudin dui, ac ultrices mauris eros quis diam.</Typography>
        <Typography variant="h3" component="div" className="text-primary-100">Ut sed malesuada elit. Nulla mattis tellus est, vitae fermentum arcu ultrices quis. Donec blandit venenatis elit, eget interdum est imperdiet non.</Typography>
        <Typography variant="h3" component="div" className="text-primary-300">Fusce eu blandit erat. Ut euismod quam vitae felis commodo gravida.</Typography>
        <Typography variant="h3" component="div" className="text-primary-400"> Nam lectus nisl, fermentum imperdiet ligula in, condimentum convallis leo.</Typography>
        
        {/* <UsersList /> */}
        
        <div className="flex items-center gap-4">
          <Button size="small">Primary</Button>
          <Button size="small" variant="secondary">Secondary</Button>
          <Button size="small" variant="outline">Outline</Button>
          <Button size="small" variant="disabled" disabled>Disabled</Button>
          <Button size="small" variant="ico" icon={{icon: RiShutDownLine}} />
          <Button size="small" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="secondary" />
          <Button size="small" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="gray" />
          <Button size="small" icon={{icon: RiShutDownLine}} inconPosition="left">Primary</Button>
          <Button size="small" icon={{icon: RiShutDownLine}}>Primary</Button>
          <Spinner size="small"/>
        </div>

        <div className="flex items-center gap-4">
          <Button isLoading size="small">Primary</Button>
          <Button isLoading size="small" variant="secondary">Secondary</Button>
          <Button isLoading size="small" variant="outline">Outline</Button>
          <Button isLoading size="small" variant="disabled" disabled>Disabled</Button>
          <Button isLoading size="small" variant="ico" icon={{icon: RiShutDownLine}} />
          <Button isLoading size="small" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="secondary" />
          <Button isLoading size="small" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="gray" />
          <Button isLoading size="small" icon={{icon: RiShutDownLine}} inconPosition="left">Primary</Button>
          <Button isLoading size="small" icon={{icon: RiShutDownLine}}>Primary</Button>
        </div>

        <div className="flex items-center gap-4">
          <Button size="medium">Primary</Button>
          <Button size="medium" variant="secondary">Secondary</Button>
          <Button size="medium" variant="outline">Outline</Button>
          <Button size="medium" variant="disabled" disabled>Disabled</Button>
          <Button size="medium" variant="ico" icon={{icon: RiShutDownLine}} />
          <Button size="medium" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="secondary" />
          <Button size="medium" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="gray" />
          <Button size="medium" icon={{icon: RiShutDownLine}} inconPosition="left">Primary</Button>
          <Button size="medium" icon={{icon: RiShutDownLine}}>Primary</Button>
          <Spinner size="medium"/>
        </div>

        <div className="flex items-center gap-4">
          <Button size="large">Primary</Button>
          <Button size="large" variant="secondary">Secondary</Button>
          <Button size="large" variant="outline">Outline</Button>
          <Button size="large" variant="disabled" disabled>Disabled</Button>
          <Button size="large" variant="ico" icon={{icon: RiShutDownLine}} />
          <Button size="large" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="secondary" />
          <Button size="large" variant="ico" icon={{icon: RiShutDownLine}} iconTheme="gray" />
          <Button size="large" icon={{icon: RiShutDownLine}} inconPosition="left">Primary</Button>
          <Button size="large" icon={{icon: RiShutDownLine}}>Primary</Button>
          <Spinner size="large"/>
        </div>
      </Container>
    </>
  );
}