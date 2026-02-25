import styled from "styled-components";

const Footer = styled.footer`
  background: linear-gradient(180deg, #071032 0%, #0b1226 100%);
  color: #e6eef8;
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial;
  padding: 36px 16px;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Brand = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Logo = styled.a`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const Desc = styled.p`
  margin: 0;
  color: #a8c2ff;
  font-size: 14px;
`;

const News = styled.div`
  margin-left: 0;
`;

const Heading = styled.h4`
  margin: 0 0 8px 0;
  font-size: 15px;
  color: #a8c2ff;
`;

const Note = styled.p`
  margin: 0 0 12px 0;
  color: #9fbfff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  color: #e6eef8;
  outline: none;
  font-size: 14px;
  transition:
    box-shadow 0.12s ease,
    border-color 0.12s ease;

  &::placeholder {
    color: rgba(230, 240, 255, 0.5);
  }

  &:focus {
    border-color: rgba(99, 102, 241, 0.95);
    box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.06);
  }
`;

const Button = styled.button`
  background: linear-gradient(180deg, #60a5fa, #3b82f6);
  color: #04223a;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;

  &:active {
    transform: translateY(1px);
  }
  &:focus {
    outline: 3px solid rgba(99, 102, 241, 0.18);
    outline-offset: 2px;
  }
`;

const Social = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: #e6eef8;
`;

const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
`;

const Col = styled.div`
  min-width: 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 8px 0;
`;

const LegalCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const LegalNote = styled.p`
  margin: 0;
  color: #a8c2ff;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const LegalLink = styled.a`
  color: #9fbfff;
`;

export default function ResponsiveFooter() {
  return (
    <Footer aria-label="Site footer">
      <Inner>
        <Top>
          <Brand>
            <Logo href="/" aria-label="Homepage">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <rect width="48" height="48" rx="8" fill="#2563EB" />
                <path
                  d="M14 30c4-6 10-14 18-10-6 2-10 8-12 12-2 4-6 4-6 4s0-2 0-6z"
                  fill="#fff"
                />
              </svg>
              <Title>VibeFooter</Title>
            </Logo>
            <Desc>
              Clean, responsive footer built with React and plain CSS.
            </Desc>
          </Brand>

          <News>
            <Heading>Stay in the loop</Heading>
            <Note>Subscribe for product updates and tips.</Note>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed!");
              }}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="rvf-email" style={{ display: "none" }}>
                Email address
              </label>
              <InputWrap>
                <Input
                  id="rvf-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  placeholder="you@company.com"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </InputWrap>
            </Form>

            <Social aria-hidden="false">
              <SocialLink href="https://twitter.com" aria-label="Twitter">
                {/* Twitter SVG Icon */}
              </SocialLink>
              <SocialLink href="https://github.com" aria-label="GitHub">
                {/* GitHub SVG Icon */}
              </SocialLink>
              <SocialLink href="https://www.linkedin.com" aria-label="LinkedIn">
                {/* LinkedIn SVG Icon */}
              </SocialLink>
            </Social>
          </News>
        </Top>

        <Links aria-label="Footer navigation">
          <Col>
            <Heading>Product</Heading>
            <List>
              <ListItem>
                <a href="#features">Features</a>
              </ListItem>
              <ListItem>
                <a href="#pricing">Pricing</a>
              </ListItem>
              <ListItem>
                <a href="#docs">Docs</a>
              </ListItem>
              <ListItem>
                <a href="#changelog">Changelog</a>
              </ListItem>
            </List>
          </Col>

          <Col>
            <Heading>Company</Heading>
            <List>
              <ListItem>
                <a href="#about">About</a>
              </ListItem>
              <ListItem>
                <a href="#careers">Careers</a>
              </ListItem>
              <ListItem>
                <a href="#press">Press</a>
              </ListItem>
              <ListItem>
                <a href="#contact">Contact</a>
              </ListItem>
            </List>
          </Col>

          <Col>
            <Heading>Resources</Heading>
            <List>
              <ListItem>
                <a href="#blog">Blog</a>
              </ListItem>
              <ListItem>
                <a href="#guides">Guides</a>
              </ListItem>
              <ListItem>
                <a href="#events">Events</a>
              </ListItem>
              <ListItem>
                <a href="#support">Support</a>
              </ListItem>
            </List>
          </Col>

          <LegalCol>
            <LegalNote>
              © {new Date().getFullYear()} VibeFooter — Built with care.
            </LegalNote>
            <LegalLinks>
              <LegalLink href="#terms">Terms</LegalLink>
              <LegalLink href="#privacy">Privacy</LegalLink>
              <LegalLink href="#security">Security</LegalLink>
            </LegalLinks>
          </LegalCol>
        </Links>
      </Inner>
    </Footer>
  );
}
