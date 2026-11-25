import { Button } from "../atoms/Button";
import NewsletterInput from "../atoms/NewsletterInput";

const NewsletterForm = () => {
  return (
    <div className="newsletter-form">
      <NewsletterInput />
      <Button variant="primary">Suscríbete</Button>
    </div>
  );
};

export default NewsletterForm;
