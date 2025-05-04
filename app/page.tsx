import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/typography/Heading';
import { HeroHeader } from '@/components/HeroHeader/HeroHeader';
import { Article } from '@/components/layout/Article';
import css from './page.module.scss';
import { SocialLinks, SocialLink } from '@/components/SocialLinks/SocialLinks';
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Container>
        <Article>

          <Heading className={css.center} level={1}>Join us for meet ups, drives out & local advice!</Heading>

          <p >
            We're a Lancashire-based group for everything Mazda MX-5. Whether your car is completely stock or heavily modified, you're welcome here. New to the MX-5 world or been driving one for years? It doesn’t matter—what counts is the shared passion.
          </p>
          <p>
            Follow us on social media for updates, events, and to connect with a friendly,
            active community of fellow owners.
          </p>


          <Heading level={3} className={css.center}>Follow us:</Heading>
          <SocialLinks>
            <SocialLink href='https://www.facebook.com/groups/lancashiremx5' icon={faFacebook} >Facebook</SocialLink>
            <SocialLink href='https://www.instagram.com/lancashire_mazda_mx5_owners/' icon={faInstagram} >Instagram</SocialLink>
          </SocialLinks>
        </Article>
      </Container >
    </>
  );
}
