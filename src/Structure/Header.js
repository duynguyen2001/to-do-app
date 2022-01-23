import { Carousel, CarouselItem, Container } from "react-bootstrap";
function Header() {
  return (
    <Container style={{color: "white"}}>
      <h1>To Do App</h1>
      <h2>Let reorganize your days</h2>
      <Carousel variant="secondary">
        <CarouselItem>
          “Subtracting from your list of priorities is as important as adding to it.”
        </CarouselItem>
        <CarouselItem>
          “Each day I will accomplish one thing on my to do list.”
        </CarouselItem>
        <CarouselItem>
          “She'd learned now that the only way to write a list was to finish
          with something you actually wanted to do.”
        </CarouselItem>
        <CarouselItem>
          “Each day I will accomplish one thing on my to list.”
        </CarouselItem>
      </Carousel>
      
    </Container>
  );
}
export default Header;
