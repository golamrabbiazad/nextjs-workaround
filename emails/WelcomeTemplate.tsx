import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

export default function WelcomeTemplate({ name }: { name: string }) {
  return (
    <Html style={{ fontFamily: "Inter" }}>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithmosh.com/">CodeWithMosh</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
